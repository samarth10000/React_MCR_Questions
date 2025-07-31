import React, { useEffect, useState } from "react";

const LiveSearchDebounce = () => {
  const [liveSearch, setLiveSearch] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log("Debouncing Search :", liveSearch);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [liveSearch]);

  return (
    <div>
      <h1>Type Your Name... here</h1>
      <input
        type="text"
        placeholder="Search"
        value={liveSearch}
        onChange={(e) => setLiveSearch(e.target.value)}
      />
    </div>
  );
};

export default LiveSearchDebounce;
