import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API = "http://localhost:5000/posts";

const getCurrentUser = (thunkAPI) => thunkAPI.getState().auth.user;

export const fetchPosts = createAsyncThunk("posts/fetch", async () => {
  const res = await fetch(API);
  return res.json();
});

export const addPost = createAsyncThunk(
  "posts/add",
  async (post, thunkAPI) => {
    const user = getCurrentUser(thunkAPI);

    if (!user) {
      return thunkAPI.rejectWithValue("Please log in to create a post.");
    }

    const postPayload = {
      ...post,
      userId: user.id,
      authorName: user.name,
      popularity: Number(post.popularity ?? 0),
    };

    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postPayload),
    });

    return res.json();
  }
);

export const updatePost = createAsyncThunk(
  "posts/update",
  async (post, thunkAPI) => {
    const user = getCurrentUser(thunkAPI);

    if (!user) {
      return thunkAPI.rejectWithValue("Please log in to edit a post.");
    }

    if (post.userId !== user.id) {
      return thunkAPI.rejectWithValue("You can edit only your own posts.");
    }

    const res = await fetch(`${API}/${post.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });

    return res.json();
  }
);

export const deletePost = createAsyncThunk(
  "posts/delete",
  async (post, thunkAPI) => {
    const user = getCurrentUser(thunkAPI);

    if (!user) {
      return thunkAPI.rejectWithValue("Please log in to delete a post.");
    }

    if (post.userId !== user.id) {
      return thunkAPI.rejectWithValue("You can delete only your own posts.");
    }

    await fetch(`${API}/${post.id}`, { method: "DELETE" });
    return post.id;
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch posts.";
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.list.push(action.payload);
        state.error = null;
      })
      .addCase(addPost.rejected, (state, action) => {
        state.error = action.payload || "Failed to add post.";
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.list.findIndex((p) => p.id === action.payload.id);

        if (index !== -1) {
          state.list[index] = action.payload;
        }

        state.error = null;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.error = action.payload || "Failed to update post.";
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.list = state.list.filter((p) => p.id !== action.payload);
        state.error = null;
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.error = action.payload || "Failed to delete post.";
      });
  },
});

export default postSlice.reducer;
