const Draw = () => {
  
  function canvas_obj(ele) {
    let returnable = {
      canvas: ele,
      ctx: ele.getContext("2d"),
      dpi: window.devicePixelRatio
    };
    returnable.get = {
      style: {
        height() {
          return +getComputedStyle(ele).getPropertyValue("height").slice(0, -2);
        },
        width() {
          return +getComputedStyle(ele).getPropertyValue("width").slice(0, -2);
        }
      },
      attr: {
        height() {
          return returnable.ele.getAttribute("height");
        },
        width() {
          return returnable.ele.getAttribute("height");
        }
      }
    };
    returnable.set = {
      style: {
        height(ht) {
          ele.style.height = ht + "px";
        },
        width(wth) {
          ele.style.width = wth + "px";
        }
      },
      attr: {
        height(ht) {
          ele.setAttribute("height", ht);
        },
        width(wth) {
          ele.setAttribute("width", wth);
        }
      }
    };
    console.log(ele.height, ele.width)
    return returnable;
  }
  
  let canvas = canvas_obj(document.getElementById("myCanvas"));
  let { ctx, dpi, set, get } = canvas;
  
  function dpi_adjust() {
    set.attr.height(get.style.height() * dpi);
    set.attr.width(get.style.width() * dpi);
  }
  
  function draw(startX, startY, len, angle) {
    
    console.log("draw called")

  //ctx.strokeStyle = "green"
  //ctx.fillStyle = "green"
    // Set line width
    
    // Width left:0 top-down:825  right:1343
    // ctx.strokeRect(0, 825, 1343, 100);
    
    // ctx.moveTo(50, 140);
    // ctx.lineTo(150, 60);
    // ctx.lineTo(250, 140);
    // ctx.closePath();
    // ctx.stroke();
    // ctx.translate(startX, startY);
    // ctx.rotate(angle * Math.PI/180);
    // ctx.moveTo(0, 0);
    // ctx.lineTo(0, -len);
    // ctx.stroke();
    
  ctx.lineWidth = 2;
 
  ctx.beginPath();
  ctx.save();
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

  draw(0, -len, len*.8, -15)
  draw(0, -len, len*.8, 15)
  
  ctx.restore();
}

  dpi_adjust();

  requestAnimationFrame( a => draw(700,900,120, 0));

}

export default Draw;