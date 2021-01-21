import { SetValue } from './Draw';

export const NumberSpinner = (props) => {
  const {id, min ,max, increment, initValue, banner} = props;

  return (
    <div className="tool-container">
      <label className="label">{banner}</label>
      <section className="counter">
        <button className="btn tool-btn left" onClick={() => SetValue(id, min, max, -increment)}>
          <i className="fa fa-minus-square" ></i>
        </button>
        <span className="display">{ initValue }</span>
        <button className="btn tool-button right" onClick={() => SetValue(id, min, max, increment)}>
          <i className="fa fa-plus-square"></i>
        </button>
      </section>
    </div>
  )
}