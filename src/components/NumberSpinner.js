import { useContext } from 'react';
import { ComponentContext } from "../contexts/CanvasComponentContext";
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
      const displayValue = Math.round( ( comp.value + Number.EPSILON ) * 100 ) / 100;

      const SpinnerType = () => {
        console.log(comp.min);
        if(comp.style === "spinner") {
        return (
          <>
            <button
              style={{ background: 'none', border: 'none'}}
              onClick={() => value.updateComponent(id, -comp.increment)}
            >
              <i
                style={{
                  border: theme.border,
                  color: theme.primaryBg,
                  backgroundColor: theme.primaryContrast,
                }}
                className="icon-btn fa fa-minus"
              />
            </button>
            <span
              style={{
                border: theme.border,
                color: theme.primaryBg,
                backgroundColor: theme.primaryContrast,
              }}
              className="display"
              id="canvas-value"
            >
                  { displayValue }
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
                className="icon-btn fa fa-plus"
              />
            </button>
          </>
        )}
        if(comp.style === "slider" ) {
          return (
            <>
              <div className="slide-container">
              <span
                style={{
                  border: theme.border,
                  color: theme.primaryBg,
                  backgroundColor: theme.primaryContrast,
                }}
                className="display"
                id="canvas-value"
              >
                { displayValue }
              </span>

                <input type="range"
                       min={comp.min}
                       max={comp.max}
                       value={comp.value}
                       step={comp.increment}
                       className="slider"
                       id="myRange"
                       //onInput={() => value.updateComponent(id, comp.increment)}
                />
              </div>
            </>
          )
        }
        if(comp.style === "color") {
          console.log(comp.colors)
          return (
            <>
              <h1 style={{color: theme.primaryPop}}>Coming Soon</h1>
            </>
          )
        }
        return <h1 style={{color: theme.primaryPop}}>Error</h1>
      }

      return (
        <div
          className="number-spinner"
          style={{
            border: theme.border,
            background: theme.altBg,
            color: theme.primaryContrast,
          }}
        >
          <label
            style={{ color: theme.primaryContrast }}
            className="banner"
          >
            { comp.banner }
          </label>


          <section className="counter">
            { <SpinnerType /> }
          </section>
        </div>
      )}}
    </ComponentContext.Consumer>
  )
}


export default NumberSpinner;