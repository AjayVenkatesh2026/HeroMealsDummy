import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import profileReducer from './slices/profileSlice';

const store = configureStore({
  reducer: {
    themeReducer,
    profileReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type {RootState, AppDispatch};
export default store;
