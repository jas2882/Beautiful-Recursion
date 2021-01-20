import { Render } from './Draw';
import { NumberSpinner } from './NumberSpinner';

const LeftMenu = () => {
  
  return (
    <div className="side-menu-left" id="side-menu">

      <NumberSpinner
        banner="Branch Thickness"
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