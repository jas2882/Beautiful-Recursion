import { SetValue } from './Draw';

export const NumberSpinner = (props) => {
  const {id, min ,max, increment, initValue, banner} = props;

  return (
    <div className="tool-container">
      <label className="label">{banner}</label>
      <section className="counter">
        <button className="btn decrement" onClick={() => SetValue(id, min, max, -increment)}>
          <i className="fa fa-minus-square" ></i>
        </button>
        <span className="display" id={id}>{ initValue }</span>
        <button className="btn increment" onClick={() => SetValue(id, min, max, increment)}>
          <i className="fa fa-plus-square"></i>
        </button>
      </section>
    </div>
  )
}