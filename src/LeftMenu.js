import { Render } from './Draw';
import { NumberSpinner } from './NumberSpinner';

const LeftMenu = () => {

  return (

    <div className="side-menu-left" id="side-menu">

    {/* Increment values min max etc... values are commented in Draw.js with the variable declarations */}

      <NumberSpinner
        banner="Branch Thickness"
        id="lineWidth"
        min={0.05}
        max={10}
        increment="0.25"
        initValue={1}
      />
      <NumberSpinner
        banner="Rotation&#176;"
        id="rotateSpinner"
        min={30}
        max={200}
        increment="10"
        initValue={180}
      />
      <button className="btn render-btn" onClick={() => Render()}>
        Render
      </button>
    </div>
  )
}
export default LeftMenu;