import {createSlice, type PayloadAction} from '@reduxjs/toolkit';

import type {IRestaurant} from 'src/types/ordering';

const initialState: {
  restaurants: IRestaurant[];
} = {
  restaurants: [],
};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    addRestaurant: (state, action: PayloadAction<IRestaurant>) => {
      const currRestaurantIndex = state.restaurants.findIndex(
        restaurant => restaurant.id === action.payload.id,
      );
      if (currRestaurantIndex < 0) {
        state.restaurants.push(action.payload);
      }
    },
    removeRestaurant: (state, action: PayloadAction<IRestaurant>) => {
      state.restaurants = state.restaurants.filter(
        restaurant => restaurant.id !== action.payload.id,
      );
    },
    clearRestaurants: state => {
      state.restaurants = [];
    },
  },
});

export const {addRestaurant, removeRestaurant, clearRestaurants} =
  restaurantSlice.actions;
export default restaurantSlice.reducer;
