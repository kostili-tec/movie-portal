import { useNavigate } from 'react-router-dom';
import { AppLink } from '../../components/AppLink/AppLink';
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';
import { useAppSelector, useAppDispatch } from '../../shared/hooks/redux';
import { logoutUser } from '../../store/reducers/ActionsUser';
import classes from './Header.module.scss';

const Header = () => {
  const { isAuth, login } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser(login));
    navigate('/');
    window.location.reload();
  };
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.ul}>
          <li>
            <AppLink to="/">Main</AppLink>
          </li>
          <li>{isAuth && <AppLink to="/favorites">Favorites</AppLink>}</li>
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
            <span>{login}</span>
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
