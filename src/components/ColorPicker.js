//import { SetValue } from './Draw';

const ColorPicker = () => {
  // const rangeSlider = function () {
  //   const slider = $(".range-slider"),
  //     range = $(".range-slider__range"),
  //     value = $(".range-slider__value");
  //
  //   slider.each(function () {
  //     value.each(function () {
  //       const value = $(this).prev().attr("value");
  //       $(this).html(value);
  //     });
  //
  //     range.on("input", function () {
  //       $(this).next(value).html(this.value);
  //     });
  //   });
  // };
  const ColorSlider = () => {
    const slider = document.getElementsByClassName("slider");
    // const min = slider.getAttribute("min");
    // const max = slider.getAttribute("max");


    console.log(slider);
  }
  ColorSlider();
  return (
    <section className="themed color-picker-container" >
      <div className="radio-container">
        <label className="btn radio-btn">Stroke
          <input className=" btn radio-btn-glow" type="radio" name="radio" onClick={() => console.log('check')} />
            <span className="checkMark" />
        </label>
        <label className="btn radio-btn">Canvas
          <input className="radio-btn-glow" type="radio" name="radio" onClick={() => console.log('check')} />
           <span className="checkMark" />
        </label>
        <label className="btn radio-btn">Shadow
          <input className="radio-btn-glow" type="radio" name="radio" onClick={() => console.log('check')} />
            <span className="checkMark" />
        </label>
      </div>

      <section className="color-tool-display">
        <span className="color-display" id="color-preview">hello</span>
      </section>
      <section className="color-slider">
        <div className="horizontal slide-container">
          <input 
            className="slider"
            type="range"
            min='0'
            max='255'
            id="red"
          />
          <span className="slider-value">0</span>
          </div>
        <div className="horizontal slide-container">
          <input
          className="slider"
          type="range"
          min='0'
          max='255'
          id="green"
        />
          <span className="slider-value">0</span>
        </div>
        <div className="horizontal slide-container">
        <input
          className="slider"
          type="range"
          min='0'
          max='255'
          id="blue"
        />
          <span className="slider-value">0</span>
        </div>
      </section>
      <button className="btn apply-btn">Apply</button>
    </section>
  )
}

export default ColorPicker;