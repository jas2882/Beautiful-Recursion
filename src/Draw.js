const Draw = () => {
  
  let myCanvas = document.getElementById("myCanvas");
  let ctx = myCanvas.getContext("2d");
  // ctx.fillStyle = "FFFFFF"
  
  function draw(startX, startY, len, angle) {
    ctx.beginPath();
    ctx.save();

    ctx.strokeStyle = "green"
    ctx.fillStyle = "green"

    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI/180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);
    ctx.stroke();

    ctx.shadowBlur = 15;
    ctx.shadowColor = "(rgba(0,0,0,0.8)"
    
    if(len < 10) {
      ctx.restore();
      return;
    }
    
    draw(0, -len, len*0.8, -15);
    draw(0, -len, len*0.8, +15);
    
    ctx.restore();
  }
  draw(150,150,30, 0)
}

export default Draw;