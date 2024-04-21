import { Dispatch } from '@reduxjs/toolkit';
import { userSlice } from './UseSlice';

export const registerUser =
  (login: string, password: string, apiKey: string) => (dispatch: Dispatch) => {
    const { setUser } = userSlice.actions;
    const isAuth = true;
    localStorage.setItem(
      'userData',
      JSON.stringify({
        login,
        password,
        apiKey,
        isAuth,
      })
    );
    console.log('login');
    dispatch(
      setUser({
        login,
        password,
        apiKey,
        isAuth,
      })
    );
  };

export const loginUser = (login: string, password: string) => (dispatch: Dispatch) => {
  const { setUser } = userSlice.actions;
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData) {
    if (login === userData.login && password === userData.password) {
      const isAuth = true;
      localStorage.setItem('userData', JSON.stringify({ ...userData, isAuth }));
      dispatch(setUser({ ...userData, isAuth }));
    }
  }
};

export const checkAuth = () => (dispatch: Dispatch) => {
  const { setUser } = userSlice.actions;
  const userData = localStorage.getItem('userData');
  console.log('userData', userData);
  if (userData) {
    const { login, password, apiKey, isAuth } = JSON.parse(userData);
    dispatch(
      setUser({
        login,
        password,
        apiKey,
        isAuth,
      })
    );
  }
};

export const logoutUser = () => (dispatch: Dispatch) => {
  const { clearUser } = userSlice.actions;
  const userData = localStorage.getItem('userData');
  if (userData) {
    const isAuth = false;
    localStorage.setItem('userData', JSON.stringify({ ...JSON.parse(userData), isAuth }));
  }
  dispatch(clearUser());
};
