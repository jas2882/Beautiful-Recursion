import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {

  static contextType = ThemeContext;

  render() {
    const { toggleTheme } = this.context;
    return(
      <button
        className="themed theme-toggle"
        onClick={toggleTheme}
      >
        <i className="fa fa-adjust" />
      </button>
    )
  }
}

export default ThemeToggle;