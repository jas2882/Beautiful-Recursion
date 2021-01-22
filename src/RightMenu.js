import { ColorPicker } from './ColorPicker';
import { Render, Clear, Random } from './ContentBody';

const RightMenu = (props) => {
  
  const{shadowBlur, shadowColor, strokeColor, opacity, fillStyle,  } = props;

  console.log(shadowBlur, shadowColor, strokeColor, opacity, fillStyle,);

  return (
    <div className="side-menu-right" id="side-menu">
      
      {/* Increment values min max etc... values are commented in Draw.js with the variable declarations */}
      <ColorPicker />
      <section className="update-canvas">
        <button className="btn random-btn tool-container" onClick={() => Random()}>
          Random
        </button>
        <button className="btn clear-btn tool-container" onClick={() => Clear()}>
          Clear
        </button>
         <button className="btn render-btn tool-container" onClick={() => Render()}>
          Render
        </button>
      </section>
    </div>
  )
}
export default RightMenu;