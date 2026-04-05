import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ref as dbRef, push, set, get, remove } from 'firebase/database';
import { db } from '../firebase/firebaseConfig';

export const uploadFileBase64 = createAsyncThunk(
  'files/uploadFileBase64',
  async ({ fileDetails, base64Data }, { rejectWithValue }) => {
    try {
      const fileData = { ...fileDetails, fileContent: base64Data };
      const newDocRef = push(dbRef(db, 'files'));
      await set(newDocRef, fileData);

      return { key: newDocRef.key, ...fileData };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchFiles = createAsyncThunk(
  'files/fetchFiles', 
  async (_, { rejectWithValue }) => {
    try {
      const snapshot = await get(dbRef(db, 'files'));
      if (snapshot.exists()) {
        const data = snapshot.val();
        return Object.keys(data).map(key => ({ key, ...data[key] }));
      }
      return [];
    } catch (error) {
      return rejectWithValue(error.message);
    }
});

export const deleteFile = createAsyncThunk(
  'files/deleteFile',
  async (fileKey, { rejectWithValue }) => {
    try {
      await remove(dbRef(db, `files/${fileKey}`));
      return fileKey;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const fileSlice = createSlice({
  name: 'files',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadFileBase64.pending, (state) => { state.loading = true; })
      .addCase(uploadFileBase64.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(uploadFileBase64.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchFiles.pending, (state) => { state.loading = true; })
      .addCase(fetchFiles.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(deleteFile.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.key !== action.payload);
      });
  },
});

export default fileSlice.reducer;