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
    return <div className="tool-container">
      <label className="banner">{this.state.banner}</label>
      <section className="counter">
         <button className="btn tool-btn left" onClick={() => this.updateValue(-this.state.increment)}>
          <i className="fa fa-minus-square" ></i>
        </button>

        <input className="display" value={this.state.value} id={this.state.id} onChange={this.handleChange}/>

        <button className="btn tool-button right" onClick={() => this.updateValue(this.state.increment)}>
          <i className="fa fa-plus-square"></i>
        </button>
      </section>
    </div>
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value});
    console.log(this.state.value)
  }

  updateValue = (increment) => {
     
    this.setState({value: (this.state.value+increment).toFixed(2) * 1});

  }
}
 
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