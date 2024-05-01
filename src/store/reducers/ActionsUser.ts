import { Dispatch } from '@reduxjs/toolkit';
import { userSlice } from './UserSlice';
import { IUser } from '../../shared/models/IUser';

const LSLoginKey = 'userData';

export const registerUser = (login: string, password: string) => (dispatch: Dispatch) => {
  const LS_KEY = `${LSLoginKey}-${login}`;
  const { setUser } = userSlice.actions;
  const isAuth = true;
  localStorage.setItem(
    LS_KEY,
    JSON.stringify({
      login,
      password,
      isAuth,
    })
  );
  localStorage.setItem('lastLogin', login);
  dispatch(
    setUser({
      login,
      password,
      isAuth,
    })
  );
};

export const loginUser = (login: string, password: string) => (dispatch: Dispatch) => {
  const LS_KEY = `${LSLoginKey}-${login}`;
  const { setUser } = userSlice.actions;
  const userData = JSON.parse(localStorage.getItem(LS_KEY));
  if (userData) {
    if (login === userData.login && password === userData.password) {
      const isAuth = true;
      localStorage.setItem(LS_KEY, JSON.stringify({ ...userData, isAuth }));
      localStorage.setItem('lastLogin', login);
      dispatch(setUser({ ...userData, isAuth }));
    }
  }
};

export const checkAuth = () => (dispatch: Dispatch) => {
  const { setUser } = userSlice.actions;
  const lastLogin = localStorage.getItem('lastLogin');
  if (lastLogin) {
    const getCurrentUser: IUser = JSON.parse(localStorage.getItem(`${LSLoginKey}-${lastLogin}`));
    if (getCurrentUser && getCurrentUser.isAuth) {
      const { login, password, isAuth } = getCurrentUser;
      dispatch(
        setUser({
          login,
          password,
          isAuth,
        })
      );
    }
  }
};

export const logoutUser = (login: string) => (dispatch: Dispatch) => {
  const { clearUser } = userSlice.actions;
  const userData = localStorage.getItem(`${LSLoginKey}-${login}`);
  if (userData) {
    const isAuth = false;
    localStorage.setItem(
      `${LSLoginKey}-${login}`,
      JSON.stringify({ ...JSON.parse(userData), isAuth })
    );
  }
  dispatch(clearUser());
};
