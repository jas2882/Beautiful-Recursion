//import { SetValue } from './Draw';

export const ColorPicker = () => {
  /*
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
      output.innerHTML = this.value;
    }
        red green blue alpha
  */
  return (
    <section className="color-tool-container" >
      <div className="radio-container counter">
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
        <span className="slide-container">
          <input 
            className="vert slide-container slider"
            id="alpha"
            orient="vertical"
            type="range"
            min='0'
            max='1'
          />
        </span>
        <span className="color-display" id="color-preview">hello</span>
        <span className="slide-container">
          <input 
            className="vert slide-container slider"
            id="blur" 
            orient="vertical"
            type="range"
            min='0'
            max='3' 
          />
        </span>
      </section>
      <section className="color-slider">
        <span className="horizontal slide-container">
          <input 
            className="slider"
            type="range"
            min='0'
            max='3'
            id="red"
          />
          </span>
        <span className="horizontal slide-container">
          <input
          className="slider"
          type="range"
          min='0'
          max='3'
          id="green"
        />
        </span>
        <span className="horizontal slide-container">
        <input
          className="slider"
          type="range"
          min='0'
          max='2'
          id="blue"
        />
        </span>
      </section>
      <button className="apply-btn themed">Apply</button>
    </section>
  )
}