import { useState } from "react";

const CounterUseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const resetCount = () => setCount(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}> + </button>
      <button onClick={decrement} disabled={count === 0}>
        {" "}
        -
      </button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default CounterUseState;
