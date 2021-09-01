import React from "react";

const Counter = ({ id, value, name, onDecrement, onIncrement, onDelete }) => {
  const formValue = () => {
    return value === 0 ? "Ноль" : value;
  };
  const getBageClasses = () => {
    let classes = "badge m-2 bg-";
    classes += value === 0 ? "danger" : "primary";
    return classes;
  };

  return (
    <>
      <h5>{name}</h5>
      <div>
        <span className={getBageClasses()}>{formValue()}</span>
        <button
          onClick={() => {
            onIncrement(id);
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => {
            onDecrement(id);
          }}
          className="btn btn-secondary btn-sm"
          disabled={value === 0}
        >
          Decrement
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Counter;
