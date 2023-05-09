import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isCartOpen: false,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const removeItem = state.items.filter((item) => item.id !== id);
      state.items = removeItem;
    },
    increaseQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.totalPrice + action.payload.price;
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const item = state.items?.find((m) => m.id === id);
      item.totalPrice = item?.totalPrice - item?.price;
      if (item) {
        item.quantity--;
        if (item.quantity === 0) {
          state.items = state.items.filter((m) => m.id !== id);
        }
      } else {
        return;
      }
    },
    cartOpen(state) {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const {
  addItemToCart,
  removeItemFromCart,
  cartOpen,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
