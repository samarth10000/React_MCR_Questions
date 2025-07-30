import { useState } from "react";

const CharcterCounter = () => {
  const [Chractercount, setChractercount] = useState(1);
  return (
    <>
      <input
        type="text"
        placeholder="enter the chracter"
        value={Chractercount}
        onChange={(e) => setChractercount(e.target.value)}
        style={{ margin: "10px" }}
      />
      <p>{Chractercount.length} / 50</p>
      <button
        disabled={Chractercount.length > 50}
        onClick={() =>
          alert(
            Chractercount.length > 50
              ? "your chracter are more than 50 reduce it "
              : `perfect your chracters are submitted:\n ${Chractercount} `
          )
        }
      >
        Submit
      </button>
    </>
  );
};

export default CharcterCounter;
