import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

export class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      syntax: '#555',
      ui: '#ddd',
      bg: '#eee',
      border: '#ff2f14',
      canvasBg: 'radial-gradient(ellipse farthest-side at top, #B0FFF9 0%, #33FFF6 43%, #1FA8FF 100%)',
    },
    dark: {
      syntax: '#ddd',
      ui: '#333',
      bg: '#555',
      border: '#555',
      canvasBg: 'radial-gradient(ellipse farthest-side at top, #73646e 0, #5E525A 43%, #3c3237 100%)'
    }
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