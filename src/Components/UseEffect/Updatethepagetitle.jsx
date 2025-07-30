import React, { useEffect, useState } from "react";

const Updatethepagetitle = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Counter is ${count}`;
  }, [count]);
  return (
    <div>
      <h1>See the Title It holds Some values not like your Ex 😂😂😂</h1>
      <button
        style={{
          width: "70px",
          height: "30px",
          color: "white",
          backgroundColor: "black",
        }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Updatethepagetitle;
