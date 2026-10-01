import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // Implement according to the course requirements.
    },
    removeItem: (state, action) => {
      // Implement according to the course requirements.
    },
    updateQuantity: (state, action) => {
      // Implement according to the course requirements.
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
