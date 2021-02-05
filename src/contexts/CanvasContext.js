import {  createContext } from 'react';
import { GenerateKey } from '../components/Tools';

const CanvasKey = () => {

  // const Increase = (props) => {
  //   const { initValue, increment, max } = props
  //   const [ value, setValue ] = useState(initValue);
  //
  //   if (value < max) {
  //     setValue(currentValue => currentValue + increment);
  //   }
  //   return value.toFixed(2);
  // }

  // const Decrease = (props) => {
  //   const { initValue, increment, min } = props;
  //
  //   const [ value, setValue ] = useState(initValue);
  //
  //   if(value > min) {
  //     setValue(currentValue => currentValue - increment);
  //   }
  //   return value.toFixed(2);
  // }
  // const Save = (bannerName, newValue) => {
  //
  //   const [ value, setValue ] = useState({value: 'value'});
  //
  //   console.log(value, setValue);
  //
  // }
  // const saveInput = (e) => {
  //   console.log(e.target.value);
  // };

  // let contextDetails = {
  //   Save,
  //   Values: defaultValues
  // }
  const hi = () => console.log('hi');
  const Update = () => {
    //console.log(value);
  }
  const CanvasObj = (props) => {

    const { banner, id, value, initValue, increment, min, max, location } = props

    this.banner = banner;
    this.id = id;
    this.value = value;
    this.initValue = initValue;
    this.increment = increment;
    this.min = min;
    this.max = max;
    this.location = location;
    this.key = GenerateKey();
  }
  let defaultValues = [
    {
      banner: "Angle",
      id: "inputAngle",
      value: 1,
      initValue: 1,
      increment: 0.1,
      min: 0.2,
      max: 2,
      location: "left-menu",
      key: GenerateKey(),
      Update: Update(),
      greet: hi(),
    },
    {
      banner: "Stroke Length",
      id: "strokeLength",
      value: 150,
      initValue: 150,
      increment: 5,
      min: 100,
      max: 250,
      key: GenerateKey(),
      location: "left-menu",
      //increase: Increase(),
      //decrease: Decrease()
    },
    {
      banner: "Stroke Width",
      id: "strokeWidth",
      value: 2,
      initValue: 1,
      increment: 0.1,
      min: 0.5,
      max: 10,
      key: GenerateKey(),
      location: "left-menu",
    },
    {
      banner: "Rotate",
      id: "rotate",
      value: 180,
      initValue: 180,
      increment: 0.1,
      min: 0,
      max: 1,
      key: GenerateKey(),
      location: "left-menu",
    },
    {
      banner: "Recursion",
      id: "recursionExit",
      value: 10,
      initValue: 10,
      increment: 0.1,
      min: 8,
      max: 11,
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
      increment: 0.05,
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
      increment: 0.05,
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
  ];

  let x = defaultValues.filter((obj)=> obj.id === 'strokeLength')
  console.log(x);

  return (
    defaultValues
  )
}

const CanvasContext = createContext(CanvasKey());

export default CanvasContext;
