import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      console.log(action.payload);
      const { time, post } = action.payload;
      state.posts.push({ time, post });
    },
  },
});

export const { addPost } = postSlice.actions;

export default postSlice.reducer;
