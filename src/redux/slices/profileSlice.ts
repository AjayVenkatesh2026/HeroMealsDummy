import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {IProfile} from 'src/types/ordering';

const initialState: {profile: IProfile} = {
  profile: {
    id: '',
    name: '',
    image: '',
    gender: '',
    token: '',
    phone_number: '',
    address: {
      landmark: '',
      line_1: '',
      line_2: '',
      pin_code: '',
      latitude: '',
      longitude: '',
    },
  },
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
