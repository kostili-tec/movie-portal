import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../shared/models/IUser"

interface UserState {
  user: IUser;  
}

const initialState: IUser = {  
    login: '',
    password: '',
    apikey: '',
    isAuth: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      return {...state, ...action.payload};
    },
    clearUser: (state) => {
      return {...initialState};
    }
  }
})

export const {setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
