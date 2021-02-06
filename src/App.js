import './styles/App.css';
import './styles/NumberSpinner.css';
import Canvas from './components/Canvas';
import { ComponentContextProvider } from "./contexts/CanvasComponentContext";
import LeftMenu from './components/LeftMenu';
import React from "react";
import RightMenu from './components/RightMenu';
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App" >
      <ThemeContextProvider>
        <ComponentContextProvider>
          <div className="content-body">
            <LeftMenu />
            <Canvas />
            <RightMenu />
          </div>
        </ComponentContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;