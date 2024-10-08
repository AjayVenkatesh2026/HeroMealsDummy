import {configureStore} from '@reduxjs/toolkit';

import themeReducer from './slices/themeSlice';
import profileReducer from './slices/profileSlice';
import restaurantsReducer from './slices/restaurantSlice';
import cartReducer from './slices/cartSlice';
import categoriesReducer from './slices/categoriesSlice';

const store = configureStore({
  reducer: {
    themeReducer,
    profileReducer,
    restaurantsReducer,
    cartReducer,
    categoriesReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type {RootState, AppDispatch};
export default store;
