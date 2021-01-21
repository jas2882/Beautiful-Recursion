//import { AdjustValue } from './Draw';

export const ColorPicker = (props) => {
  {/* 
    surround color display with opacity slide
    box shadow, gradient and background-stroke color toggle 
    dynamic box-shadow on tool components
    maybe frame canvas

    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
      output.innerHTML = this.value;
    }

  */}

  const { banner, current } = props;
  const min = 0;
  const max = 255;
  // const colorPicked;
  // const r,g,b;

  //cs vision
  return (
    <div className="color-tool-container" >
      <div className="radio-container">
        <label className="tool-container radio-btn">Stroke
          <input className="radio-btn-glow" type="radio" name="radio" onClick={() => console.log('check')} />
            <span className="checkMark"></span>
        </label>
        <label className="tool-container radio-btn">Shadow
          <input className="radio-btn-glow" type="radio" name="radio" onClick={() => console.log('check')} />
            <span className="checkMark"></span>
        </label>
        <label className="tool-container radio-btn">Canvas
          <input className="radio-btn-glow" type="radio" name="radio" onClick={() => console.log('check')} />
           <span className="checkMark"></span>
        </label>
      </div>

      <section className="color-tool-display">
        <span className="slide-container themed">
          <input 
            className="vert slide-container slider"
            id="vert"
            orient="vertical"
            type="range"
            min="0"
            max="100"
          />
        </span>
        <span className="color-display"></span>
        <span className="slide-container themed">
          <input 
            className="vert slide-container slider"
            id="vert" 
            type="range" 
            orient="vertical"
          />
        </span>
      </section>
      <section className="color-slider themed">
        <span className="horizontal slide-container themed">
          <input 
            className="slider"
            type="range"
            min={min}
            max={max}
            value={current}
            id="red"
          />
          </span>
        <span className="horizontal slide-container themed">
          <input
          className="slider"
          type="range"
          min={min}
          max={max}
          value={current}
          id="green"
        />
        </span>
        <span className="horizontal slide-container themed">
        <input
          className="slider"
          type="range"
          min={min}
          max={max}
          value={current}
          id="blue"
        />
        </span>
      </section>
      <button className="apply-btn themed">Apply</button>
    </div>
  )
}