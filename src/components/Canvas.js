import React, { useContext, useEffect } from 'react';
import { GenerateKey } from './Tools';
import { ThemeContext } from "../contexts/ThemeContext";
import { ComponentContext } from "../contexts/CanvasComponentContext";

const Draw = (props) => {

  const { canvasElement } = props;
  const canvas = canvasObj(document.getElementById(canvasElement));
  const { ctx, dpi, set, get } = canvas;


  const data = props.values.components;
  const parsedData = {};

  for (let each of data) {
    parsedData[each.id] = each.value;
  }

  let {
    strokeWidth,
    strokeColor,
    fillStyle,
    opacity,
    rotate,
    shadowBlur,
    shadowColor,
    recursionExit,
    branchDensityLeft,
    branchDensityRight,
    degreesRight,
    degreesLeft,
    adjustCanvasX,
    adjustCanvasY,
    strokeLength,
    inputAngle,
  } = parsedData;


  // Credit to Zachary Frisch on codePen for canvas dpi adjustment
  function canvasObj(element) {
    let returnable = {
      canvas: element,
      ctx: element.getContext("2d"),
      dpi: window.devicePixelRatio,
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
          return element.getAttribute("height");
        },
        width() {
          return element.getAttribute("height");
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

  function adjustDPI() {
    set.attr.height(get.style.height() * dpi);
    set.attr.width(get.style.width() * dpi);
  }

  function paintCanvas(startX, startY, len, angle) {

    ctx.lineWidth = strokeWidth;
    ctx.strokeStyle = strokeColor;
    ctx.fillStyle = fillStyle;
    ctx.globalAlpha = opacity;

    ctx.beginPath();

    ctx.save();
    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI/rotate);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);
    ctx.stroke();

    ctx.shadowBlur = shadowBlur;
    ctx.shadowColor = shadowColor;

    if(len < recursionExit) {
      ctx.restore();
      return;
    }

    paintCanvas(0, -len, len * branchDensityLeft, degreesRight);
    paintCanvas(0, -len, len * branchDensityRight, degreesLeft);

    ctx.restore();
  }

  adjustDPI();

  let originX =get.style.width() / adjustCanvasX; // center canvas on x-axis
  let originY =get.style.height() / adjustCanvasY;  //center on y-axis -- divide / 2 to center in middle of canvas --


  paintCanvas(originX, originY, strokeLength, inputAngle);
}

const Canvas = () => {

  const canvasId = GenerateKey();

  const state = useContext(ComponentContext);

  useEffect(()=>{
    Draw({ canvasElement: canvasId, values:state})
  })

  return (
    <ThemeContext.Consumer>{(context) => {

      const { isLightTheme, light, dark } = context;
      const theme = isLightTheme ? light : dark;

      return (
        <canvas
          style={{
            background: theme.canvasBg,
            color: theme.primaryContrast,
          }}
          className="canvas"
          id={ canvasId }
        />);
    }}
    </ThemeContext.Consumer>
  );
}

export default Canvas;
