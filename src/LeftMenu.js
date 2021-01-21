import { NumberSpinner } from './NumberSpinner';

const LeftMenu = () => {

  return (

    <div className="side-menu-left" id="side-menu">

    {/* Increment values min max etc... values are commented in Draw.js with the variable declarations */}

      <NumberSpinner
        banner=" Stroke Length"
        id="lineWidth"
        min={0.05}
        max={10}
        increment="0.25"
        initValue={1}
        />
      <NumberSpinner
        banner="Stroke Width"
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
        min={1}
        max={2}
        increment="0.1"
        initValue={1}
      />
    </div>
  )
}
export default LeftMenu;