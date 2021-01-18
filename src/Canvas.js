import React, { Component } from 'react'
import Draw from './Draw';

class Canvas extends Component {
  state = {  }
  render() { 
    return (     
      <canvas id="myCanvas">
      hello
      </canvas> );
  }

  //document.getElementById('myCanvas').onload('Draw()');
  
  // let myCanvas = document.getElementById("myCanvas");
  // let ctx = myCanvas.getContext("2d");
  
  // function draw(startX, startY, len, angle) {
  //   ctx.beginPath();
  //   ctx.save();
    
  //   ctx.translate(startX, startY);
  //   ctx.rotate(angle * Math.PI/180);
  //   ctx.moveTo(0, 0);
  //   ctx.lineTo(0, -len);
  //   ctx.stroke();
    
  //   if(len < 10) {
  //     ctx.restore();
  //     return;
  //   }
    
  //   draw(0, -len, len*0.8, -15);
  //   draw(0, -len, len*0.8, +15);
    
  //   ctx.restore();
  // }

  //draw(400, 600, 120, 0)

  componentDidMount() {
    Draw()
  }
}
export default Canvas;