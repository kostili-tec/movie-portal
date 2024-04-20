import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../shared/models/IUser';

const initialState: IUser = {
  login: '',
  password: '',
  apikey: '',
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => ({ ...state, ...action.payload }),
    clearUser: (state) => ({ ...initialState }), // eslint-disable-line
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
