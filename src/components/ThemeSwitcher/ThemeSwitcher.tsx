import React, { useEffect, useRef, type FC } from 'react';
import { useTheme } from '../../app/providers/ThemeProvider/lib/useTheme';
import { Theme } from '../../app/providers/ThemeProvider/lib/ThemeContext';

const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>();
  useEffect(() => {
    inputRef.current.checked = theme === Theme.DARK;
  }, []);
  return (
    <div>
      <input
        type="checkbox"
        id="themeSwitch"
        name="theme-switch"
        className="theme-switch__input"
        ref={inputRef}
        onChange={() => toggleTheme(inputRef)}
      />
      <label htmlFor="themeSwitch" className="theme-switch__label">
        <span />
      </label>
    </div>
  );
};

export default ThemeSwitcher;
