//import fireImage from './resources/fire_effect.gif';

export const Render = () => {
  console.log('render')
};
export const Reset = () => {
  console.log('reset')
};
export const SetValue = (id, min, max, increment) => {

  let displayValue = document.getElementById(id);
  let value = Math.floor(displayValue.innerHTML) + Math.floor(increment);

  // add checks

  displayValue.innerHTML = value;

  return value;
}
export const AdjustValue = () => {
  console.log('adjusting');
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
  output.innerHTML = this.value;
}
}
const Draw = (props) => {

  // Credit to Zachary Frisch on codePen for canvas dpi adjustment
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
  
  let { canvasElement } = props;
  let canvas = canvasObj(document.getElementById(canvasElement));
  let { ctx, dpi, set, get } = canvas;
  
  function adjustDPI() {
    set.attr.height(get.style.height() * dpi);
    set.attr.width(get.style.width() * dpi);
  }

  function draw(startX, startY, len, angle) {

    ctx.lineWidth = setLineWidth;
    ctx.strokeStyle = setStrokeColor;
    ctx.fillStyle = setFillStyle;
    ctx.globalAlpha = setOpacity;

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
      //console.log('step');
      return;
    }

     draw(0, -len, len * setBranchDensityLeft, setDegreesRight);
     draw(0, -len, len * setBranchDensityRight, setDegreesLeft);

    ctx.restore();
  }

  adjustDPI();
  /* adjustable inputs */
  let setAdjustCanvas = 1;      // 1 sets fractal to bottom of the canvas(1.01 for cushion) 2 sets it directly in the middle
  let setBranchDensityLeft = 0.8; // baseline: 0.5
  let setBranchDensityRight = 0.8;// max: 0.85
  let setDegreesLeft = 30;        // baseline: 30 Increment to increase spread
  let setDegreesRight = -30;      // baseline: -30 Decrement to increase spread
  let setFillStyle= "rgba(0, 0, 0, 0, 0.9)";
  let setInputAngle = 0           // baseline: 0
  let setLength = 157.5;            // baseline: 120 max:200
  let setLineWidth = 2;           // baseline: 0.05(needs high contrast recommend 0.1) Line width of individual branches
  let setOpacity = 0.07;          // 1 = no transparency 0 = full transparency
  let setRecursionExit = 10;      // baseline: 10 Exits function when reached <--keep above 10 for performance reasons-->
  let setRotate = 180;            // baseline: 31
  let setShadowBlur = 0;          // baseline: 15
  let setShadowColor = "(rgba(0,0,0,0.8)";
  let setStrokeColor = "white"

  let originX =get.style.width() / 2; // center canvas on x-axis
  let originY =get.style.height() / setAdjustCanvas;  //center on y-axis <-- divide / 2 to center in middle of canvas -->

  //let img = <img src={fireImage} alt="fire"></img>
  //let strokeEffect = ctx.drawImage(img, originX, originY);

  draw(originX, originY, setLength, setInputAngle);
}
// function getRandomColor() {
//   let letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
// function getRandomSetting(min, max) {
//   return Math.floor((Math.random() * max) + min);
// }
export default Draw;