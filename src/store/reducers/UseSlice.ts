import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../shared/models/IUser"

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
  }
})

export default userSlice.reducer;