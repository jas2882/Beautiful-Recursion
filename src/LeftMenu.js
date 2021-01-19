
// export const SliderValues = () => {
  
//   return(
//     sliderValues {
//     }
//   )
// }
const LeftMenu = () => {
  let value, min, max, handleChange, step;

  min = 0;
  max = 255;
  value = 10;

  return (
    <div className="side-menu-left" id="side-menu">
      <div className="numOfBranches">
        <button className="btn decrement">
          <i class="fa fa-minus-square"></i>
        </button>
          <span className="display">2</span>
        <button className=" btn increment">
          <i class="fa fa-plus-square"></i>
        </button>
      </div>
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
    </div>
  )
}
export default LeftMenu;