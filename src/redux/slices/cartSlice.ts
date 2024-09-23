import {createSlice, type PayloadAction} from '@reduxjs/toolkit';

import type {IProduct} from 'src/types/ordering';
import {ICartSlice} from 'src/types/redux';

const initialState: ICartSlice = {
  products: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductQuantity: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      const cartProduct = state.products[product.id];
      if (cartProduct && cartProduct.quantity && cartProduct.details.id) {
        cartProduct.quantity += 1;
      } else {
        state.products[product.id] = {
          quantity: 1,
          details: product,
        };
      }
    },
    minusProductQuantity: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      const cartProduct = state.products[product.id];
      if (
        cartProduct &&
        cartProduct.quantity &&
        cartProduct.details.id &&
        cartProduct.quantity > 0
      ) {
        cartProduct.quantity -= 1;
      }
    },
    clearCart: state => {
      state.products = {};
    },
  },
});

export const {addProductQuantity, minusProductQuantity, clearCart} =
  cartSlice.actions;
export default cartSlice.reducer;
