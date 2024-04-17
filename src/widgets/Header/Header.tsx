import React from 'react'
import { AppLink } from '../../components/AppLink/AppLink';
import classes from './Header.module.scss';
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.ul}>
          <li>
            <AppLink to={'/'}>Main</AppLink>
          </li>
          <li>
            <AppLink to={'/error'}>Test</AppLink>
          </li>
        </ul>
      </nav>
      <div>
        <AppLink to={'/login'}>Login</AppLink>
        <AppLink to={'/sign_up'}>Sign Up</AppLink>
      </div>
      <ThemeSwitcher />
    </header>
  )
}

export default Header