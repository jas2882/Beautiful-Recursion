import { Render } from './Draw';

const LeftMenu = () => {
  let minValue, max, handleChange, step;
  minValue = 0;
  max = 255;
  
  return (
    <div className="side-menu-left" id="side-menu">
       
      <div className="numOfBranches">
        <button className="btn decrement">
          <i className="fa fa-minus-square" ></i>
        </button>
          <span className="display">2</span>
        <button className=" btn increment">
          <i className="fa fa-plus-square"></i>
        </button>
      </div>
      <input
        type="range"
        //value={value}
        min={minValue}
        max={max}
        onInput={handleChange}
        name="mySlider"
        step={step}
      >
      </input>
      <input
        type="range"
        //value={value}
        //min={minValue}
        //max={max}
        //onInput={handleChange}
        name="mySlider"
        //step={step}
      >
       </input>
        <button className="btn render-btn" onClick={() => Render()}>
          Render
      </button>
    </div>
  )
}
export default LeftMenu;