import React, { Component } from 'react'
import { Draw } from './ContentBody';

class Canvas extends Component {
  state = { 
    canvasId: Math.random().toString()
   };
   

  componentDidMount() {
    Draw({ canvasElement: this.state.canvasId})
  }
  render() { 
    return (
      <>
        <canvas className="myCanvas" id={this.state.canvasId}></canvas>
        {/* <canvas className="myCanvasBackground" id="canvasBackground"></canvas>*/}
      </> 
    );
  }

}
export default Canvas;