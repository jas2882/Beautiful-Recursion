import React, {useContext} from 'react';
import NumberSpinner from '../components/NumberSpinner';
import {ThemeContext} from '../contexts/ThemeContext';

const LeftMenu = (props) => {

  let theme = useContext(ThemeContext);

  const { isLightTheme, light, dark } = theme;
  theme = isLightTheme ? light : dark;

  let data = props.value;
  const menuConstruction = [];

  for (let each of data) {
    if(each.type === 'stroke') {
      //console.log(each.type);
      menuConstruction.push(<NumberSpinner {...each} />);
    }
  }

  return (
    <aside
      className="left-menu"
      id="side-menu"
      style={{
        background: theme.ui,
        color: theme.syntax,
        border:theme.border
      }}
    >
      { menuConstruction }
    </aside>
  )
}

export default LeftMenu;