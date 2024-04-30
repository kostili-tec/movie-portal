import { IUser } from '../models/IUser';

const loginRegex = /^[a-zA-Z0-9]{4,10}$/;
const passwordRegex = /^[a-zA-Z0-9@\$!%*?#]{4,10}$/; // eslint-disable-line

export const isValidLogin = (login: string) => loginRegex.test(login);
export const isValidPassword = (password: string) => passwordRegex.test(password);

export const checkIsAvilableLogin = (login: string) => {
  const userDataKeys = Object.keys(localStorage).filter((key) => key.startsWith('userData'));
  const userDataValues: IUser[] = userDataKeys.map((key) => JSON.parse(localStorage.getItem(key)));
  const findLogin = userDataValues.some((user) => user.login === login);
  return !findLogin;
};

export const checkIsExistUser = (login: string, password: string) => {
  const userDataKeys = Object.keys(localStorage).filter((key) => key.startsWith('userData'));
  const userDataValues: IUser[] = userDataKeys.map((key) => JSON.parse(localStorage.getItem(key)));
  const findUser = userDataValues.some(
    (user) => user.login === login && user.password === password
  );
  return findUser;
};
