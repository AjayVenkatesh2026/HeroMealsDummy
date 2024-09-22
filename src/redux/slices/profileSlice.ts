import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {IProfile} from 'src/types/ordering';

const initialState: {profile?: IProfile | {}} = {
  profile: {},
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<IProfile>) => {
      state.profile = action.payload;
    },
  },
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;
