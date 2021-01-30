import '../src/styles/App.css';
import './styles/Canvas.css';
import './styles/ColorPicker.css'
import './styles/index.css'
import '../src/styles/NumberSpinner.css';
import ContentBody from './ContentBody';
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ContentBody />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
