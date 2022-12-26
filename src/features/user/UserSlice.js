import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  currentUser: {
    name: "messi",
    image:
      "https://www.shutterstock.com/image-photo/barcelona-feb-23-lionel-messi-600w-1900547713.jpg",
    address: "Lusail Stadium",
  },
};

export const userSlice = createSlice({
  initialState: initialState,
  name: "user",
  reducers: {
    getCurrentUser: (state, action) => {
      return state.currentUser;
    },
  },
});

export const { getCurrentUser } = userSlice.actions;
export default userSlice.reducer;
