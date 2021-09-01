import React from "react";
import Counter from "./counter";

const Counters = ({ onReset, counters, ...rest }) => {
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Сбросить
      </button>

      {counters.map((counter) => {
        return <Counter key={counter.id} {...rest} {...counter} />;
      })}
    </div>
  );
};

export default Counters;
