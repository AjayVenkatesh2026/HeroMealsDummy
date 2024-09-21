import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';

const store = configureStore({
  reducer: {
    themeReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type {RootState, AppDispatch};
export default store;
