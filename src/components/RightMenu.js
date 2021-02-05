
import React, { useContext } from 'react';
import { ThemeContext }  from '../contexts/ThemeContext';
import ThemeToggle from "./ThemeToggle";
import NumberSpinner from "./NumberSpinner";
//import {Clear, Random, Render} from "../ContentBody";





const RightMenu = (props) => {

  let theme = useContext(ThemeContext);

  const { isLightTheme, light, dark } = theme;
  theme = isLightTheme ? light : dark;

  let data = props.value;
  const menuConstruction = [];

  for (let each of data) {
    if(each.location === 'right-menu') {
      //console.log(menuConstruction);
      menuConstruction.push(<NumberSpinner {...each} />);
    }
  }

  //const {
    // strokeColor,
    // fillStyle,
    // opacity,
    // shadowColor,
  //} = props.value;

  // console.log(
  //   props.value,
    // strokeColor,
    // fillStyle,
    // opacity,
    // shadowColor,
    //isLightTheme,
    //light,
    //dark
  //)

  return (
    <aside
      style={{
        background: theme.primaryBg,
      }}
      className="right-menu-right"
      id="side-menu"
      >
        { menuConstruction }
        {/*<ColorPicker />*/}
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
          onClick={() => console.log('clear')}
        >
          Reset
        </button>
      </section>
    </aside>
  )
}

export default RightMenu;