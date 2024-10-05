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
        const restaurantId = product.restaurant_id;
        const prodsToBeDeleted: string[] = [];
        Object.values(state.products).forEach(prod => {
          if (prod.details.restaurant_id !== restaurantId) {
            prodsToBeDeleted.push(prod.details.id);
          }
        });
        for (const id of prodsToBeDeleted) {
          delete state.products[id];
        }
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
