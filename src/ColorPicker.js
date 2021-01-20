//import { AdjustValue } from './Draw';

export const ColorPicker = (props) => {

  const { banner, current } = props;
  const min = 0;
  const max = 255;
  return (
    <div className="tool-container">
        <label className="color-display-label">{banner}</label>
      <section className="color-tool-display">
        <span className="color-display"></span>
      </section>
      {/* 
        surround color display with opacity slide
        box shadow, gradient and background-stroke color toggle 
        remove the banner
        dynamic box-shadow on tool components
        maybe frame canvas
      */}
      <section className="slide-counter">
        <span className="slide-container">{min}<input type="range" min={min} max={max} value={current} className="slider" id="red"/>{max}</span>
        <span className="slide-container">{min}<input type="range" min={min} max={max} value={current} className="slider" id="green"/>{max}</span>
        <span className="slide-container">{min}<input type="range" min={min} max={max} value={current} className="slider" id="blue"/>{max}</span>
      </section>
    </div>
  )
}