import { ThemeContext } from './';
import CanvasContext from "./CanvasContext";

//https://www.sohamkamani.com/blog/react/2018-07-26-combining-react-context/

export const DuelContextProvider = ({canvasValues, themeData, children}) => (
  <CanvasContext.Provider value={canvasValues}>
    <ThemeContext.Provider value={themeData}>{ children }</ThemeContext.Provider>
  </CanvasContext.Provider>
);

export const DuelContextConsumer = ({ children }) => (
  <CanvasContext.Consumer>
    {(canvasValues) => (
      <ThemeContext.Consumer>{(themeData) => children({ canvasValues, themeData }) }</ThemeContext.Consumer>
    )}
  </CanvasContext.Consumer>
);

console.log(DuelContextProvider, DuelContextConsumer);