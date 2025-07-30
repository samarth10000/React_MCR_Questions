import React, { useEffect, useState } from "react";

const AutoIncrementCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    // Stop the interval after 10 seconds (10000 ms)
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
    }, 10000);

    // Cleanup both interval and timeout if component unmounts early
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <h1>Counter: {counter}</h1>
    </div>
  );
};

export default AutoIncrementCounter;
