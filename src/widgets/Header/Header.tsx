import { AppLink } from '../../components/AppLink/AppLink';
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';
import { useAppSelector, useAppDispatch } from '../../shared/hooks/redux';
import { logoutUser } from '../../store/reducers/ActionsUser';
import classes from './Header.module.scss';

const Header = () => {
  const { isAuth, login } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.ul}>
          <li>
            <AppLink to="/">Main</AppLink>
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
            <AppLink to="/profile">{login}</AppLink>
            <AppLink to="/" onClick={() => dispatch(logoutUser())}>
              Logout
            </AppLink>
          </>
        )}
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
