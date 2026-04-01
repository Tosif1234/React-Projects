import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ref, push, set, remove, update, onValue } from 'firebase/database';
import { database } from '../db/Firebase';

export const addProduct = createAsyncThunk('inventory/add', async (product) => {
  const productListRef = ref(database, 'products');
  const newProductRef = push(productListRef);
  await set(newProductRef, product);
});

export const updateProduct = createAsyncThunk('inventory/update', async ({ id, ...data }) => {
  const productRef = ref(database, `products/${id}`);
  await update(productRef, data);
});

export const deleteProduct = createAsyncThunk('inventory/delete', async (id) => {
  const productRef = ref(database, `products/${id}`);
  await remove(productRef);
});

const inventorySlice = createSlice({
  name: 'inventory',
  initialState: {
    items: [],
    loading: true,
    error: null,
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const { setItems, setError } = inventorySlice.actions;

export const listenToInventory = () => (dispatch) => {
  const productListRef = ref(database, 'products');
  onValue(productListRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const parsedData = Object.keys(data).map(key => ({id: key, ...data[key]}));
      dispatch(setItems(parsedData));
    } else {
      dispatch(setItems([]));
    }
  }, (error) => {
    dispatch(setError(error.message));
  });
};

export default inventorySlice.reducer;