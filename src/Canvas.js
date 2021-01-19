import React, { Component } from 'react'
import Draw from './Draw';

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
      </>
    );
  }

}
export default Canvas;