import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

const App = () => {
  const initialState = [
    { value: 1, id: 1, name: "Ложка" },
    { value: 2, id: 2, name: "Вилка" },
    { value: 3, id: 3, name: "Тарелка" },
    { value: 4, id: 4, name: "Ненужные вещи" },
    { value: 5, id: 5, name: "Стартовый наб" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handelDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id !== counterId);
    setCounters(newCounters);
  };

  const handelIncrement = (productId) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === productId) {
        counter.value += 1;
      }
      return counter;
    });
    setCounters(newCounters);
  };
  const handelDecrement = (productId) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === productId) {
        counter.value -= 1;
      }
      return counter;
    });
    setCounters(newCounters);
  };

  const handelReset = () => setCounters(initialState);
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, b) => a + b.value, 0)} />
        <Counters
          onDelete={handelDelete}
          onIncrement={handelIncrement}
          onDecrement={handelDecrement}
          onReset={handelReset}
          counters={counters}
        />
      </main>
    </div>
  );
};

export default App;
