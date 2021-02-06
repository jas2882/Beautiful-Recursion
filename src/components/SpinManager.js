import React, { useContext } from "react";
import { GenerateKey } from './Tools';
import { ComponentContext} from "../contexts/CanvasComponentContext";
import Spinner from "../components/NumberSpinner";

const SpinManager = props => {
  //passed in left and right menu on SpinManager
  const isLeft = props.isLeft;

  const state = useContext(ComponentContext);

  //build and store all <Spinners>
  const spinners = [];

  //spinner sort for aside menus
  const leftAsideSpin = [];
  const rightAsideSpin = [];

  //Spinners for future updates & log to remove never queried warning
  const undecidedSpin= [];
  console.log(undecidedSpin);

  state.components.forEach(c => {
    spinners.push(
      <Spinner
        id={c.id}
        key={GenerateKey()}
        location={c.location}
        banner={c.banner}
      />)
  });

  //filter left, right, and undecided spinners
  spinners.forEach(c => {
    if(c.props.location === 'left-menu') {
      leftAsideSpin.push(c);
    }
    if(c.props.location === 'right-menu') {
      rightAsideSpin.push(c);
    }
    if(c.props.location !== 'right-menu' && c.props.location !== 'left-menu' )
    undecidedSpin.push(c);
  });

  if(isLeft === true) {
    return <>{ leftAsideSpin }</>
  }
    return <>{ rightAsideSpin }</>
}

export default SpinManager;