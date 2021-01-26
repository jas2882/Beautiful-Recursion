import React from 'react'

class NumberSpinner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      min: props.min,
      max: props.max,
      banner: props.banner,
      increment: parseFloat(props.increment),
      value: parseFloat(props.initValue)
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  render() { 
    return (
      <div className="themed number-spinner-container">
        <label className="banner">{this.state.banner}</label>
        <section className="counter">
          <button className="icon-btn" onClick={() => this.updateValue(-this.state.increment)}>
            <i className="tool-icon fa fa-minus" />
          </button>

          <input className="display" value={this.state.value} id={this.state.id} onChange={this.handleChange}/>

          <button className="icon-btn" onClick={() => this.updateValue(this.state.increment)}>
            <i className="tool-icon fa fa-plus" />
          </button>
        </section>
      </div>
    )
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value});
    console.log(this.state.value)
  }

  updateValue = (increment) => {
     
    this.setState({value: (this.state.value+increment).toFixed(2) * 1});

  }
}

// constructor(props) {
//     super(props);
//     this.state = {
//       id: props.id,
//       min: props.min,
//       max: props.max,
//       banner: props.banner,
//       increment: parseFloat(props.increment),
//       value: parseFloat(props.initValue)
//     };

// export function NumberSpinner1(props) {

//   co

//   const [ id, setId ] = useState(props);
//   const [ min, setMin ] = useState(props);
//   const [ max, setMax ] = useState(props);
//   const [ banner, setBanner ] = useState(props);
//   const [ increment, setIncrement ] = useState(props);
//   const [ value, setValue ] = useState(initValue);

//   const checkCount = () => {
//     if(value >= max || value <= min) {
//       console.log('exceeded params')
//       return
//     }
//     setValue(value)
//   }
//   checkCount();

// return (
//   <div className="tool-container">
//       <label className="banner">{setBanner(banner)}</label>
//       <section className="counter">
//          <button className="btn tool-btn left" onClick={() => setValue(value -increment)}>
//           <i className="fa fa-minus-square" ></i>
//         </button>

//         <input className="display" value={value} id={setId(id)}>{value}</input>

//         <button className="btn tool-button right" onClick={() => setValue(value + increment)}>
//           <i className="fa fa-plus-square"></i>
//         </button>
//       </section>
//     </div>
// )
// } 
 
export default NumberSpinner;

// const NumberSpinner = (props) => {
//   const {id, min ,max, increment, initValue, banner} = props;
//   const [value, setValue] = useState(initValue);
  
//   const handleChange= (e) => setValue(e.target.value);

//   const handleChange = (v) => {
//     console.log(v.target.innerText)
//     value = v
//   };

//   return (
//     <div className="tool-container">
//       <label className="label">{banner}</label>
//       <section className="counter">
//         <button className="btn tool-btn left" onClick={() => SetValue(id, min, max, -increment)}>
//           <i className="fa fa-minus-square" ></i>
//         </button>
//         <span className="display" id={id} onChange={handleChange}>{ value }</span>
//         <button className="btn tool-button right" onClick={() => SetValue(id, min, max, increment)}>
//           <i className="fa fa-plus-square"></i>
//         </button>
//       </section>
//     </div>
//   )
// }

// export default NumberSpinner