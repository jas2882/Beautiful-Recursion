//import CanvasContext, { CanvasAdjuster } from "../contexts/CanvasContext";
import React, { useContext } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";
//import { GenerateKey } from "./Tools";

const NumberSpinner = (props) => {

  let {banner, increment, min, max, value, hi } = props;

  let theme = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  theme = isLightTheme ? light : dark;

  //console.log(banner, increment,  min, max, value);

  //console.log(props.value);


  // const Update = (props) => {
  //   const values = props.value
  //   //const { banner, value } = props;
  //
  //   // let [ val, setVal ] = useState(value)
  //   // for (let each of values) {
  //     console.log([values.id] = values.value);
  //   // }
  //
  //   console.log(banner, value);
  //
  // }
  // Update(props);

  // const parsedData = {};
  // //console.log(data);
  // for (let each of data) {
  //   parsedData[each.id] = each.value;
  // }

  // const [ val, setVal ] = useState(value);
  // const Increase = () = {
  //
  // }
  return (
    <div
      style={{
        border: theme.border,
        background: theme.altBg,
        color: theme.primaryContrast,
      }}
      className="themed number-spinner"
    >
      <label
        style={{ color: theme.primaryContrast }}
        id={ banner }
        className="banner"
      >
        { banner }
      </label>
      <section className="counter">
        <button
          style={{
            background: "none",
            border: 'none'
          }}
          //onClick={ hi }
        >
          <i
            style={{
              border: theme.border,
              color: theme.primaryBg,
              backgroundColor: theme.primaryContrast,
            }}
            className="icon-btn fa fa-minus" />
        </button>
        <span
          style={{
            border: theme.border,
            color: theme.primaryBg,
            backgroundColor: theme.primaryContrast,
          }}
          className="display"
          id="canvas-value"
          onChange={ ()=>console.log(props.value) }
        >
          { value }
        </span>
        <button
          style={{
            background: "none",
            border: 'none'
          }}
          //onClick={   }
        >
          <i
            style={{
              border: theme.border,
              color: theme.primaryBg,
              backgroundColor: theme.primaryContrast,
            }}
            className="icon-btn fa fa-plus" />
        </button>
      </section>
    </div>
  )
}

export default NumberSpinner;

// New

// import {ComponentContext} from "./contexts/CanvasComponentContext"
//
// const Spinner = props => {
//
//   const id = props.id;
//
//   return (
//     <ComponentContext.Consumer >
//       { value => {
//
//         const comp = value.components.filter(c => c.id === id)[0];
//
//         return (
//           <div key={id}>
//             <div className="spinner">
//               <button  onClick={() => value.updateComponent(id, -comp.increment)}>-</button>
//               <span >{comp.value}</span>
//               <button  onClick={() => value.updateComponent(id, comp.increment)}>+</button>
//             </div>
//           </div>
//
//         )}}
//     </ComponentContext.Consumer>
//   )
// }
//
//
// export default Spinner;