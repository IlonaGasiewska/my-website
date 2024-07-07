import React from 'react';
import { useTheme } from '../../providers/themeProviders';
import './ThemeSwither.css';

function ThemeSwither() {
  const { changeTheme } = useTheme();

  return (
    <div className="theme-switcher" onClick={changeTheme}>
      <div className="theme-switcher-button"></div>
    </div>
  );
}

export default ThemeSwither;
