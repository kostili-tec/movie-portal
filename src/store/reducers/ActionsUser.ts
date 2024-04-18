import { userSlice } from "./UseSlice";
import { Dispatch } from "@reduxjs/toolkit";

export const loginUser = (login: string, password: string, apikey: string) => (dispatch: Dispatch) => {
  const {setUser} = userSlice.actions;
  localStorage.setItem(`userData`, JSON.stringify({ login, password, apikey}));
  dispatch(setUser({login, password, apikey}));
}

export const checkAuth = () => (dispatch: Dispatch) => {
  const {setUser} = userSlice.actions;
  const userData = localStorage.getItem('userData');
  console.log('userData', userData);
  if (userData) {
    const {login, password, apikey} = JSON.parse(userData);
    dispatch(setUser({login, password, apikey}));
  }
}