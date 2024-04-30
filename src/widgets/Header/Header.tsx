import { useNavigate } from 'react-router-dom';
import { AppLink } from '../../components/AppLink/AppLink';
import ThemeSwitcher from '../../containers/ThemeSwitcher/ThemeSwitcher';
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
      <div className="logo">
        <AppLink to="/">
          <img
            className={classes.logo}
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Movie portal"
          />
        </AppLink>
      </div>

      <div className={classes.headerAuth}>
        {!isAuth ? (
          <>
            <AppLink to="/login">Login</AppLink>
            <AppLink to="/sign_up">Sign Up</AppLink>
          </>
        ) : (
          <>
            <span className={classes.username}>{login}</span>
            <AppLink to="/favorites">Favorites</AppLink>
            <button className={classes.logout} type="button" onClick={handleLogout}>
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
