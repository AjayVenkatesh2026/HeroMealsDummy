import {createSlice, type PayloadAction} from '@reduxjs/toolkit';

import type {ITheme} from 'src/types/theme';
import light from 'src/themes/light';

const initialState: {theme?: ITheme} = {
  theme: light,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<ITheme>) => {
      state.theme = action.payload;
    },
  },
});

const {updateTheme} = themeSlice.actions;

export {updateTheme};
export default themeSlice.reducer;
