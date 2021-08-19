import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);
  // const tags = ["tag1", "tag2", "tag3"];
  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  };
  const getBageclasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const handelIncrement = (productId) => {
    setCount(count + 1);
  };
  const handelDecrement = (productId) => {
    setCount(count - 1);
  };

  return (
    <>
      <span className={getBageclasses()}>{formCount()}</span>
      <button
        onClick={() => handelIncrement({ id: 1 })}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => handelDecrement({ id: 2 })}
        className="btn btn-secondary btn-sm"
        disabled={count === 0}
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
