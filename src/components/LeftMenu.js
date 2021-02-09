import SpinManager from './SpinManager';
import React, { useContext } from 'react';
//import NumberSpinner from '../components/NumberSpinner';
import { ThemeContext } from '../contexts/ThemeContext';

const LeftMenu = () => {

  let theme = useContext(ThemeContext);

  const { isLightTheme, light, dark } = theme;
  theme = isLightTheme ? light : dark;

  // let data = props.value;
  // const menuConstruction = [];
  //
  // for (let each of data) {
  //   if(each.location === 'left-menu') {
  //     //console.log(menuConstruction);
  //     menuConstruction.push(<NumberSpinner {...each} />);
  //   }
  //   //console.log(()=>each.filter('value'))
  // }
  //console.log(menuConstruction);

  return (
    <aside
      className="left-menu"
      id="side-menu"
      style={{
        background: theme.primaryBg,
      }}
    >
        <SpinManager isLeft={true} />
      <div className="aside-menu">
        <button
          style={{
            fontSize: '1.5em',
            border: theme.border,
            color: theme.primaryBg,
            backgroundColor: theme.primaryContrast,
          }}
          className="btn themed"
          onClick={() => alert('Randomize Coming Soon')}
        >
          Random
        </button>

      </div>
    </aside>
  )
}

export default LeftMenu;