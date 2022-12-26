import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  detail: "",
  image: "",
  user: {},
  singleProduct: {},
};

export const productSlice = createSlice({
  initialState,
  name: "product",
  reducers: {
    addLike: (state, action) => {
      var index = state.product.findIndex(
        (product) => product.id == action.payload
      );
      state.product[index].like += 1;
    },
    removeLike: (state, action) => {
      var index = state.product.findIndex(
        (product) => product.id == action.payload
      );
      state.product[index].like -= 1;
    },

    handleChange: (state, action) => {
      return { ...state, [action.payload.name]: action.payload.value };
    },
    addProduct: (state, action) => {
      return { ...state, product: [action.payload, ...state.product] };
    },
    getProductById: (state, action) => {
      var newProduct = state.product;
      var data = newProduct.find(
        (product, index) => index == action.payload.index
      );
      state.singleProduct = data;
    },
    updateProductById: (state, action) => {
      state.product[action.payload.index] = action.payload.product;
    },
    removeProductById: (state, action) => {
      state.product = state.product.filter(
        (product) => product.id != action.payload
      );
    },
  },
});
export const {
  addLike,
  handleChange,
  addProduct,
  updateProductById,
  getProductById,
  removeProductById,
  removeLike,
} = productSlice.actions;
export default productSlice.reducer;
