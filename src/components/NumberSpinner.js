//import CanvasContext from '../contexts/CanvasContext'
import React from 'react';
// { useState, useContext }

const NumberSpinner = (props) => {

  //let data = props.values;

  const { banner, currentValue, id, increment, initValue,  min, max, value } = props;

  console.log(banner, currentValue, id, increment, initValue,  min, max, value );

  let clickHandler;

  return (
    <div className="themed number-spinner-container">
      <label id="display" className="{banner}">{banner}</label>
      <section className="counter">
        <button className="icon-btn" onClick={() => clickHandler}>
          <i className="tool-icon fa fa-minus" />
        </button>

        {/*<input className="display" value={data.value} id={data.id} onChange={handleChange}>{data.value}</input>*/}
        <span className="display">{value}</span>
        <button className="icon-btn" onClick={() => clickHandler}>
          <i className="tool-icon fa fa-plus" />
        </button>
      </section>
    </div>
  )
}

export default NumberSpinner;
// return (
//   <div className="themed number-spinner-container">
//     <label className="banner">{this.state.banner}</label>
//     <section className="counter">
//       <button className="icon-btn" onClick={() => this.updateValue(-this.state.increment)}>
//         <i className="tool-icon fa fa-minus" />
//       </button>
//
//       <input className="display" value={this.state.value} id={this.state.id} onChange={this.handleChange}/>
//
//       <button className="icon-btn" onClick={() => this.updateValue(this.state.increment)}>
//         <i className="tool-icon fa fa-plus" />
//       </button>
//     </section>
//   </div>
//)