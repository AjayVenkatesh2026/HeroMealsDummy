import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {ITheme} from '../../interfaces/theme';
import light from '../../themes/light';

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
