import { useContext } from 'react';
import {ComponentContext} from "../contexts/CanvasComponentContext";
import { GenerateKey } from './Tools';
import { ThemeContext } from "../contexts/ThemeContext";

const NumberSpinner = props => {

  let theme = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  theme = isLightTheme ? light : dark;

  const id = props.id;

  return (
    <ComponentContext.Consumer >
      { value => {

        const comp = value.components.filter(c => c.id === id)[0];

        return (
          <div
            className="number-spinner"
            key={ GenerateKey }
            style={{
              border: theme.border,
              background: theme.altBg,
              color: theme.primaryContrast,
            }}
          >
            <div className="spinner">
              <label
                style={{ color: theme.primaryContrast }}
                //id={ banner }
                className="banner"
              >
                { id }
              </label>
              <section className="counter">
              <button
                style={{ background: 'none', border: 'none'}}
                // className="btn"
                onClick={() => value.updateComponent(id, -comp.increment)}
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
          { comp.value }
        </span>
              <button
                style={{ background: 'none', border: 'none'}}
                onClick={() => value.updateComponent(id, comp.increment)}
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
          </div>

        )}}
    </ComponentContext.Consumer>
  )
}


export default NumberSpinner;