import React, { useState } from 'react'


// const NumberSpinner2 = (props) => {
//
//   const [ id, setId ] = useState(props);
//   const [ min, setMin ] = useState(props);
//   const [ max, setMax ] = useState(props);
//   const [ banner, setBanner ] = useState(props);
//   const [ increment, setIncrement ] = useState(props);
//   const [ value, setValue ] = useState(initValue);
//
//   return (
//     <div className="themed number-spinner-container">
//       <label className="banner">{this.state.banner}</label>
//       <section className="counter">
//         <button className="icon-btn" onClick={() => this.updateValue(-this.state.increment)}>
//           <i className="tool-icon fa fa-minus" />
//         </button>
//
//         <input className="display" value={this.state.value} id={this.state.id} onChange={this.handleChange}/>
//
//         <button className="icon-btn" onClick={() => this.updateValue(this.state.increment)}>
//           <i className="tool-icon fa fa-plus" />
//         </button>
//       </section>
//     </div>
//   )
// }

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
 
export default NumberSpinner;