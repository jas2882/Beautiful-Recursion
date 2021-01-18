import React, { Component } from 'react'
import Draw from './Draw';

class Canvas extends Component {
  state = {  };
  
  componentDidMount() {
    Draw()
  }
  render() { 
    return (     
      <canvas id="myCanvas"></canvas>
    );
  }

}
export default Canvas;