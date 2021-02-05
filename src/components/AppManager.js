import React, { useContext } from "react"
//import ThemeContext from "./contexts/ThemeContext"
import { ComponentContext} from "../contexts/CanvasComponentContext"
import Spinner from "../components/NumberSpinner"

const AppManager = props => {

  //const theme = useContext(ThemeContext);
  const state = useContext(ComponentContext);

  const spinners = []
  //const reports = []

  state.components.forEach(c => {
    //reports.push(<div>{c.value}</div>)
    spinners.push(<Spinner id={c.id}/>)
  });

  return (
    <>
      {spinners}
      {/*{reports}*/}
    </>
  )
}

export default AppManager;