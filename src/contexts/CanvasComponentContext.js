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
      location: "undecided-menu",
      key: GenerateKey(),
      style: "slider"
    },
    {
      banner: "Stroke Length",
      id: "strokeLength",
      value: 150,
      increment: 5,
      min: 0,
      max: 300,
      key: GenerateKey(),
      location: "left-menu",
      style: "spinner"
    },
    {
      banner: "Stroke Width",
      id: "strokeWidth",
      value: 1,
      increment: 1,
      min: 1,
      max: 25,
      key: GenerateKey(),
      location: "left-menu",
      style: "spinner"
    },
    {
      banner: "Stroke Rotation",
      id: "rotate",
      value: 250,
      increment: 10,
      min: 30,
      max: 2000,
      key: GenerateKey(),
      location: "left-menu",
      style: "spinner"
    },
    {
      banner: "Exit Recursion",
      id: "recursionExit",
      value: 10,
      initValue: 10,
      increment: 1,
      min: 2,
      max: 25,
      key: GenerateKey(),
      location: "left-menu",
      style: "spinner"
    },
    {
      banner: "Branch Density L",
      id: "branchDensityLeft",
      value: 0.75,
      increment: 0.01,
      min: 0.5,
      max: 1.5,
      key: GenerateKey(),
      location: "left-menu",
      style: "spinner"
    },
    {
      banner: "Branch Density R",
      id: "branchDensityRight",
      value: 0.75,
      initValue: 0.8,
      increment: 0.01,
      min: 0.5,
      max: 1.5,
      key: GenerateKey(),
      location: "left-menu",
      style: "spinner"
    },
    {
      banner: "Branch Angle L ",
      id: "degreesLeft",
      value: 25,
      degreesLeft: 30,
      initValue: 30,
      increment: 1,
      min: 0,
      max: 100,
      key: GenerateKey(),
      location: "right-menu",
      style: "spinner"
    },
    {
      banner: "Branch Angle R",
      id: "degreesRight",
      value: -25,
      degreesRight: -30,
      increment: 1,
      min: -100,
      max: 0,
      key: GenerateKey(),
      location: "right-menu",
      style: "spinner"
    },
    {
      banner: "Opacity",
      id: "opacity",
      value: 0.2,
      increment: 0.025,
      min: 0,
      max: 1,
      key: GenerateKey(),
      location: "right-menu",
      style: "spinner"
    },
    {
      banner: "Stroke Color",
      id: "strokeColor",
      value: '#000',
      key: GenerateKey(),
      location: "right-menu",
      style: "color",
      colors: [
        "#FFF",
        "#000",
        "#F0F",
        "#0F0",
        "#00F",
        "#F00"
      ]
    },
    {
      banner: "Fill Style",
      id: "fillStyle",
      value: "(rgba(0, 0, 0, 0, 0.9))",
      key: GenerateKey(),
      type: "color",
      location: "right-menu",
      style: "color"
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
      style: "spinner"
    },
    {
      banner: "Shadow Color",
      id: "shadowColor",
      value: "(rgba(0,0,0,0.8))",
      key: GenerateKey(),
      location: "right-menu",
      style: "color"
    },
    {
      banner: "Adjust Y Axis",
      id: "adjustCanvasY",
      value: 1,
      initValue: 1,
      increment: 0.1,
      min: 1,
      max: 2,
      key: GenerateKey(),
      type: "canvas",
      location: "right-menu",
      style: "slider"
    },
    {
      banner: "Adjust X Axis",
      id: "adjustCanvasX",
      value: 2,
      increment: 0.1,
      min: 0,
      max: 3,
      key: GenerateKey(),
      type: "canvas",
      location: "left-menu",
      style: "slider"
    },
  ]
}
 //console.log(defaults.components[6].value);
export const ComponentContext = React.createContext({
  components: [],
  updateComponent: () => {}
});

export const ComponentContextProvider = (props) => {

  const updateComponent = (id, increment) => {
    let localComponents = state.components;

    localComponents.forEach(c => {
      if (c.id === id) {
        if((increment < 0 && c.value > c.min) || (increment > 0 && c.value < c.max)) {
           c.value += increment
      }}
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