import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  detail: "",
};

const commentSlice = createSlice({
  initialState,
  name: "comment",
  reducers: {
    handleChange: (state, action) => {
      return { ...state, [action.payload.name]: action.payload.value };
    },
    addComment: (state, action) => {
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    },
  },
});
export const { handleChange, addComment } = commentSlice.actions;
export default commentSlice.reducer;
