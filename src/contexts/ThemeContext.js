import '../styles/App.css';
import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

export class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      test: '#ff7089',
      width: 'auto',
      border: '1px solid #FF2F14',
      primaryBg: '#FFF',
      altBg: 'radial-gradient(ellipse at center, #FFFFFF, #486785)',
      primaryFg: '#1a2031da',
      altFg: '#486685',
      primaryHighlight: '#2F4F4F',
      primaryPop: '#FF2F14',
      altPop: '#19c1d8',
      primaryContrast: '#282c34',
      altContrast: '#FFF',
      black: '#000',
      toolBg: 'radial-gradient(ellipse at center,#282c34 0,#1f263b 100%)',
      btnBg: 'radial-gradient(ellipse at center,#282c34 0,#1f263b 100%)',
      canvasBg: 'radial-gradient(ellipse farthest-side at top, #FFFFFFDA, #4A63A8DA)',
      altRadial: 'radial-gradient(ellipse at center, #FFFFFF, #FF2F15)',
    },
    dark: {
      border: '1px solid #FF2F14',
      primaryBg: '#000',
      altBg: '#1a2031da',
      primaryFg: '#486685',
      altFg: '#1a2031da',
      primaryHighlight: '#2F4F4F',
      primaryPop: '#FF2F14',
      altPop: '#19c1d8',
      primaryContrast: '#FFF',
      altContrast: '#282c34',
      toolBg: 'radial-gradient(ellipse at center,#282c34 0,#1f263b 100%)',
      btnBg: 'radial-gradient(ellipse at center,#282c34 0,#1f263b 100%)',
      canvasBg: 'radial-gradient(ellipse farthest-side at top, #73646e 0, #3c3237 100%)'
    },

  }
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme }); //passed in next to ...state
  }
  //console.log(this.state)
  render() {
    return(
      // spread operator creates the light and dark object
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {/* this.props.children wraps child elements in the provider tag */}
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider;