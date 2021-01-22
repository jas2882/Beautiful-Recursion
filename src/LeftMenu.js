import { NumberSpinner } from './NumberSpinner';

const LeftMenu = (props) => {

  const { strokeWidth, setLength, rotation, canvasPosition } = props;

  console.log(strokeWidth, setLength, rotation, canvasPosition);

  return (

    <div className="side-menu-left" id="side-menu">

    {/* Increment values min max etc... values are commented in Draw() of ContentBody with the variable declarations */}

      <NumberSpinner
        banner=" Stroke Length"
        id="lineWidth"
        min={0.05}
        max={10}
        increment="0.25"
        initValue={setLength}
        />
      <NumberSpinner
        banner="Stroke Width"
        id="lineWidth"
        min={0.05}
        max={10}
        increment="0.25"
        initValue={strokeWidth}
        />
      <NumberSpinner
        banner="Rotation&#176;"
        id="rotateSpinner"
        min={30}
        max={200}
        increment="10"
        initValue={rotation}
      />
      <NumberSpinner
        banner="Adjust Canvas"
        id="adjustCanvas"
        min={1}
        max={2}
        increment="0.1"
        initValue={canvasPosition}
      />
    </div>
  )
}
export default LeftMenu;