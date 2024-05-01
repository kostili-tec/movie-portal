import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { AppLink } from '../../components/AppLink/AppLink';
import ThemeSwitcher from '../../containers/ThemeSwitcher/ThemeSwitcher';
import { useAppSelector, useAppDispatch } from '../../shared/hooks/redux';
import { logoutUser } from '../../store/reducers/ActionsUser';
import classes from './Header.module.scss';
import { classNames } from '../../shared/lib/classNames';

const Header = () => {
  const { isAuth, login } = useAppSelector((state) => state.userReducer);
  const [isOpen, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser(login));
    navigate('/');
    window.location.reload();
  };

  return (
    <header className={classes.header}>
      <div
        className={
          isOpen
            ? classNames(classes.headerAdaptive, {}, [classes.headerAdaptiveOpen])
            : classes.headerAdaptive
        }
      >
        <div className="logo">
          <AppLink to="/" onClick={() => setOpen(false)}>
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
              <AppLink to="/login" onClick={() => setOpen(false)}>
                Login
              </AppLink>
              <AppLink to="/sign_up" onClick={() => setOpen(false)}>
                Sign Up
              </AppLink>
            </>
          ) : (
            <>
              <span className={classes.username}>{login}</span>
              <AppLink to="/favorites" onClick={() => setOpen(false)}>
                Favorites
              </AppLink>
              <button className={classes.logout} type="button" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
          <ThemeSwitcher />
        </div>
      </div>
      <div className={classes.burger}>
        <Hamburger direction="left" toggled={isOpen} toggle={setOpen} />
      </div>
      <div
        aria-hidden="true"
        onClick={() => setOpen((prev) => !prev)}
        className={
          isOpen ? classNames(classes.overlay, {}, [classes.overlayOpen]) : classes.overlay
        }
      />
    </header>
  );
};

export default Header;
