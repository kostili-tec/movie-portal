import React from 'react'
import { AppLink } from '../../components/AppLink/AppLink';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header>
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
    </header>
  )
}

export default Header