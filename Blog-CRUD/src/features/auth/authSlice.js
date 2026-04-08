import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API = "http://localhost:5000/users";
const STORAGE_KEY = "blog-app-user";

const loadStoredUser = () => {
  try {
    const user = localStorage.getItem(STORAGE_KEY);
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

const saveStoredUser = (user) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
};

const clearStoredUser = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    const normalizedEmail = email.trim().toLowerCase();
    const res = await fetch(
      `${API}?email=${encodeURIComponent(normalizedEmail)}&password=${encodeURIComponent(password)}`
    );
    const users = await res.json();

    if (!users.length) {
      return thunkAPI.rejectWithValue("Invalid email or password.");
    }

    const user = users[0];
    saveStoredUser(user);
    return user;
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ name, email, password }, thunkAPI) => {
    const normalizedEmail = email.trim().toLowerCase();
    const existingUserRes = await fetch(
      `${API}?email=${encodeURIComponent(normalizedEmail)}`
    );
    const existingUsers = await existingUserRes.json();

    if (existingUsers.length) {
      return thunkAPI.rejectWithValue("An account with this email already exists.");
    }

    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        email: normalizedEmail,
        password,
      }),
    });

    const user = await res.json();
    saveStoredUser(user);
    return user;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: loadStoredUser(),
    status: "idle",
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.status = "idle";
      state.error = null;
      clearStoredUser();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Login failed.";
      })
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Signup failed.";
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
