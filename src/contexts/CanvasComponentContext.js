import React, { useState } from "react";
import { GenerateKey } from '../components/Tools';

const defaults = {
  components: [
    {
      banner: "Angle",
      id: "inputAngle",
      value: 0,
      increment: 1,
      min: -20,
      max: 20,
      location: "left-menu",
      key: GenerateKey(),
    },
    {
      banner: "Stroke Length",
      id: "strokeLength",
      value: 150,
      increment: 5,
      min: 0,
      max: 200,
      key: GenerateKey(),
      location: "left-menu",
    },
    {
      banner: "Stroke Width",
      id: "strokeWidth",
      value: 2,
      increment: 1,
      min: 1,
      max: 25,
      key: GenerateKey(),
      location: "left-menu",
    },
    {
      banner: "Rotate",
      id: "rotate",
      value: 300,
      increment: 10,
      min: 30,
      max: 2000,
      key: GenerateKey(),
      location: "left-menu",
    },
    {
      banner: "Recursion",
      id: "recursionExit",
      value: 10,
      initValue: 10,
      increment: 1,
      min: 2,
      max: 25,
      key: GenerateKey(),
      location: "left-menu",
    },
    {
      banner: "Adjust Canvas",
      id: "adjustCanvasY",
      value: 1,
      initValue: 1,
      increment: 0.1,
      min: 1,
      max: 2,
      key: GenerateKey(),
      type: "canvas",
    },
    {
      banner: "Adjust Canvas",
      id: "adjustCanvasX",
      value: 2,
      initValue: 1,
      increment: 0.1,
      min: 1.5,
      max: 2.5,
      key: GenerateKey(),
      type: "canvas",
    },
    {
      banner: "Branch Density L",
      id: "branchDensityLeft",
      value: 0.8,
      initValue: 0.8,
      increment: 0.01,
      min: 0.5,
      max: 1.5,
      key: GenerateKey(),
      location: "right-menu",
    },
    {
      banner: "Branch Density R",
      id: "branchDensityRight",
      value: 0.8,
      initValue: 0.8,
      increment: 0.01,
      min: 0.5,
      max: 1.5,
      key: GenerateKey(),
      location: "right-menu",
    },
    {
      banner: "Branch Angle L ",
      id: "degreesLeft",
      value: 30,
      degreesLeft: 30,
      initValue: 30,
      increment: 1,
      min: 20,
      max: 50,
      key: GenerateKey(),
      location: "right-menu",
    },
    {
      banner: "Branch Angle R",
      id: "degreesRight",
      value: -30,
      degreesRight: -30,
      initValue: 30,
      increment: 1,
      min: 20,
      max: 50,
      key: GenerateKey(),
      location: "right-menu",
    },
    {
      banner: "Fill Style",
      id: "fillStyle",
      value: "(rgba(0, 0, 0, 0, 0.9))",
      key: GenerateKey(),
      type: "color",
      location: "right-menu",
    },
    {
      banner: "Opacity",
      id: "opacity",
      value: 0.07,
      initValue: 0.07,
      increment: 0.01,
      min: 0,
      max: 1,
      key: GenerateKey(),
      location: "left-menu",
    },
    {
      banner: "Shadow Blur",
      id: "shadowBlur",
      value: 0,
      initValue: 0,
      increment: 0.1,
      min: 0,
      max: 1,
      key: GenerateKey(),
      location: "undecided-menu",
    },
    {
      banner: "Shadow Color",
      id: "shadowColor",
      value: "(rgba(0,0,0,0.8))",
      key: GenerateKey(),
      location: "undecided-menu",
    },
    {
      banner: "Stroke Color",
      id: "strokeColor",
      value: '#000',
      key: GenerateKey(),
      location: "right-menu",
    },
  ]
}

export const ComponentContext = React.createContext({
  components: [],
  updateComponent: () => {}
});

export const ComponentContextProvider = (props) => {

  const updateComponent = (id, increment) => {
    let localComponents = state.components;

    localComponents.forEach(c => {
      if (c.id === id) {
        c.value += increment
      }
    });

    setState({...state, components: localComponents})
  }

  const initState = {
    components: defaults.components,
    updateComponent: updateComponent
  }

  const [state, setState] = useState(initState);

  return (
    <ComponentContext.Provider value={state}>
      {props.children}
    </ComponentContext.Provider>
  )
}