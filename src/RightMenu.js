import { ColorPicker } from './ColorPicker';
import { NumberSpinner } from './NumberSpinner';
import { Reset } from './Draw';

const RightMenu = () => {
  return (
    <div className="side-menu-right" id="side-menu">
      
      {/* Increment values min max etc... values are commented in Draw.js with the variable declarations */}
      <ColorPicker
        banner="Color Picker"
        id="colorPicker"
        min={0}
        max={255}
        increment="1"
        initValue={0}
      />

      <NumberSpinner
        banner="Length"
        id="branchLength"
        min={70}
        max={250}
        increment="5"
        initValue={70}
      />
      <NumberSpinner
        banner="Adjust Canvas"
        id="adjustCanvas"
        min={10}
        max={20}
        increment="1"
        initValue={10}
      />

      <button className="btn reset-btn" onClick={() => Reset()}>
        Reset
      </button>
    </div>
  )
}
export default RightMenu;