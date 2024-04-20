import React, { type FC } from 'react';
import { useTheme } from '../../app/providers/ThemeProvider/lib/useTheme';
import { Theme } from '../../app/providers/ThemeProvider/lib/ThemeContext';

const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button type="button" onClick={toggleTheme}>
      {theme === Theme.DARK ? 'Dark' : 'Light'}
    </button>
  );
};

export default ThemeSwitcher;
