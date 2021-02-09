import SpinManager from './SpinManager';
import React, { useContext } from 'react';
import { ThemeContext }  from '../contexts/ThemeContext';
import ThemeToggle from "./ThemeToggle";

const RightMenu = () => {

  let theme = useContext(ThemeContext);

  const { isLightTheme, light, dark } = theme;
  theme = isLightTheme ? light : dark;

  return (
    <aside
      style={{
        background: theme.primaryBg,
      }}
      className="right-menu-right"
      id="side-menu"
    >
      <SpinManager isLeft={false}/>

      <section className="aside-menu">
        <ThemeToggle />
        <button
          style={{
            fontSize: '1.5em',
            border: theme.border,
            color: theme.primaryBg,
            backgroundColor: theme.primaryContrast,
          }}
          className="btn themed"
          onClick={() => alert('Reset Coming Soon')}
        >
          Reset
        </button>
      </section>
    </aside>
  )
}

export default RightMenu;