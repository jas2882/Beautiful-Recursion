import {  createContext } from 'react';
import { GenerateKey } from '../components/Tools';

let defaultValue;

defaultValue = [
  {
    banner: "angle",
    id: "inputAngle",
    value: 1,
    initValue: 1,
    increment: 0.1,
    currentValue: null,
    min: 0.2,
    max: 2,
    key: GenerateKey(),
    type: "stroke"
  },
  {
    banner: "Stroke Length",
    id: "strokeLength",
    value: 150,
    initValue: 150,
    increment: 5,
    currentValue: null,
    min: 100,
    max: 250,
    key: GenerateKey(),
    type: "stroke"
  },
  {
    banner: "Stroke Width",
    id: "strokeWidth",
    value: 2,
    initValue: 1,
    increment: 0.1,
    currentValue: null,
    min: 0.5,
    max: 10,
    key: GenerateKey(),
    type: "stroke"
  },
  {
    banner: "Rotate",
    id: "rotate",
    value: 180,
    initValue: 180,
    increment: 0.1,
    currentValue: null,
    min: 0,
    max: 1,
    key: GenerateKey(),
    type: "stroke"
  },
  {
    banner: "Recursion",
    id: "recursionExit",
    value: 10,
    initValue: 10,
    increment: 0.1,
    currentValue: null,
    min: 8,
    max: 11,
    key: GenerateKey(),
    type: "stroke"
  },
  {
    banner: "Adjust Canvas Y",
    id: "adjustCanvasY",
    value: 1,
    initValue: 1,
    increment: 0.1,
    currentValue: null,
    min: 1,
    max: 2,
    key: GenerateKey(),
    type: "stroke"
  },
  {
    banner: "Adjust Canvas X",
    id: "adjustCanvasX",
    value: 2,
    initValue: 1,
    increment: 0.1,
    currentValue: null,
    min: 1.5,
    max: 2.5,
    key: GenerateKey(),
    type: "stroke"
  },
  {
    banner: "Branch Density Left",
    id: "branchDensityLeft",
    value: 0.8,
    initValue: 0.8,
    increment: 0.05,
    currentValue: null,
    min: 0.5,
    max: 1.5,
    key: GenerateKey(),
    type: "stroke"
  },
  {
    banner: "Branch Density Right",
    id: "branchDensityRight",
    value: 0.8,
    initValue: 0.8,
    increment: 0.05,
    currentValue: null,
    min: 0.5,
    max: 1.5,
    key: GenerateKey(),
    type: "stroke"
  },
  {
    banner: "Needs One Left",
    id: "degreesLeft",
    value: 30,
    degreesLeft: 30,
    initValue: 30,
    increment: 1,
    currentValue: null,
    min: 20,
    max: 50,
    key: GenerateKey(),
    type: "stroke"
  },
  {
    banner: "Needs One Right",
    id: "degreesRight",
    value: -30,
    degreesRight: -30,
    initValue: 30,
    increment: 1,
    currentValue: null,
    min: 20,
    max: 50,
    key: GenerateKey(),
    type: "stroke"
  },
  {
    banner: "Fill Style",
    id: "fillStyle",
    value: "(rgba(0, 0, 0, 0, 0.9))",
    key: GenerateKey(),
    type: "color"
  },
  {
    banner: "Opacity",
    id: "opacity",
    value: 0.07,
    initValue: 0.07,
    increment: 0.01,
    currentValue: null,
    min: 0,
    max: 1,
    key: GenerateKey(),
    type: "color"
  },
  {
    banner: "Shadow Blur",
    id: "shadowBlur",
    value: 0,
    initValue: 0,
    increment: 0.1,
    currentValue: null,
    min: 0,
    max: 1,
    key: GenerateKey(),
    type: "color"
  },
  {
    banner: "Shadow Color",
    id: "shadowColor",
    value: "(rgba(0,0,0,0.8))",
    key: GenerateKey(),
    type: "color"
  },
  {
    banner: "Stroke Color",
    id: "strokeColor",
    value: '#000',
    key: GenerateKey(),
    type: "color"
  }
];

const CanvasContext = createContext(defaultValue);

export default CanvasContext;