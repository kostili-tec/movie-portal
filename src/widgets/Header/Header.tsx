import React from 'react';
import { AppLink } from '../../components/AppLink/AppLink';
import classes from './Header.module.scss';
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';
import { useAppSelector, useAppDispatch } from '../../shared/hooks/redux';
import { logoutUser } from '../../store/reducers/ActionsUser';

const Header = () => {
  const { isAuth } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.ul}>
          <li>
            <AppLink to="/">Main</AppLink>
          </li>
          <li>
            <AppLink to="/error">Test</AppLink>
          </li>
        </ul>
      </nav>
      <div className={classes.headerAuth}>
        {!isAuth ? (
          <>
            <AppLink to="/login">Login</AppLink>
            <AppLink to="/sign_up">Sign Up</AppLink>
          </>
        ) : (
          <>
            <AppLink to="/" onClick={() => dispatch(logoutUser())}>
              Logout
            </AppLink>
            <AppLink to="/profile">Profile</AppLink>
          </>
        )}
      </div>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
