const Draw = () => {
  // Credit to CodePen Home Zachary Frisch on codePen for canvas dpi adjustment
  function canvasObj(element) {
    let returnable = {
      canvas: element,
      ctx: element.getContext("2d"),
      dpi: window.devicePixelRatio
    };
    returnable.get = {
      style: {
        height() {
          return +getComputedStyle(element).getPropertyValue("height").slice(0, -2);
        },
        width() {
          return +getComputedStyle(element).getPropertyValue("width").slice(0, -2);
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
          element.style.height = ht + "px";
        },
        width(wth) {
          element.style.width = wth + "px";
        }
      },
      attr: {
        height(ht) {
          element.setAttribute("height", ht);
        },
        width(wth) {
          element.setAttribute("width", wth);
        }
      }
    };
    return returnable;
  }
  
  let canvas = canvasObj(document.getElementById("myCanvas"));
  let { ctx, dpi, set, get } = canvas;
  
  function adjustDPI() {
    set.attr.height(get.style.height() * dpi);
    set.attr.width(get.style.width() * dpi);
  }

  function draw(startX, startY, len, angle) {

    ctx.lineWidth = setLineWidth;
    ctx.strokeStyle = setStrokeColor;
    ctx.fillStyle = setFillStyle;

    ctx.beginPath();
    ctx.save();
    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI/setRotate);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);
    ctx.stroke();

    ctx.shadowBlur = setShadowBlur;
    ctx.shadowColor = setShadowColor;

    if(len < setRecursionExit) {
      ctx.restore();
      return;
    }

     draw(0, -len, len * setBranchDensityLeft, setDegreesRight);
     draw(0, -len, len * setBranchDensityRight, setDegreesLeft);

    ctx.restore();
  }

  adjustDPI();

  /* adjustable inputs */
  let lengthInput = 120;          // baseline: 120
  let inputAngle = 0;             // baseline: 0
  let setLineWidth = 0.1;         // baseline: 0.05(needs high contrast recommend 0.1) Line width of individual branches
  let setDegreesRight = -30;      // baseline: -30 Decrement to increase spread
  let setDegreesLeft = 30;        // baseline: 30 Increment to increase spread
  let setShadowBlur = 15          // baseline: 15
  let setRecursionExit = 10;      // baseline: 10 Exits function when reached <--keep above 10 for performance reasons-->
  let setBranchDensityLeft = 0.8; // baseline: 0.5
  let setBranchDensityRight = 0.8;// max: 0.85
  let setRotate = 180;            // baseline: 31
  let setStrokeColor = "white";
  let setFillStyle= "green";
  let setShadowColor = "(rgba(0,0,0,0.8)";
  let setAdjustCanvas = 1.01;        // 1 sets fractal to bottom of the canvas(1.01 for cushion) 2 sets it directly in the middle
  
  let originX =get.style.width() / 2; // center canvas on x-axis
  let originY =get.style.height() / setAdjustCanvas;  //center on y-axis <-- divide / 2 to center in middle of canvas -->

  requestAnimationFrame( a => draw(originX, originY, lengthInput, inputAngle));
}

export default Draw;