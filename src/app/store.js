import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/ProductSlice";
import userReducer from "../features/user/UserSlice";
import commentReducer from "../features/comment/CommentSlice";

const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  comment: commentReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
