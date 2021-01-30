import ColorPicker from "../components/ColorPicker";
import React, { useContext } from 'react';
import { ThemeContext }  from '../contexts/ThemeContext';
import ThemeToggle from "./ThemeToggle";
//import {Clear, Random, Render} from "../ContentBody";





const RightMenu = (props) => {

  let theme = useContext(ThemeContext);

  const { isLightTheme, light, dark } = theme;
  theme = isLightTheme ? light : dark;

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
      style={{background: theme.ui, color: theme.syntax}}
      className="right-menu-right"
      id="side-menu"
      >
      <ThemeToggle />
      <ColorPicker />
       <section className="update-canvas">
         <button className="btn random-btn themed" onClick={() => console.log('random')}>
           Random
         </button>
         <button className="btn clear-btn themed" onClick={() => console.log('clear')}>
           Clear
         </button>
         <button className="btn render-btn themed" onClick={() => console.log('render')}>
           Render
         </button>
       </section>
    </aside>
  )
}

export default RightMenu;