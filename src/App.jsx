import "./App.css";

import CharcterCounter from "./Components/ChracterCounter";
import CounterUseState from "./Components/CounterUseState";
import MultiStepform from "./Components/Multistepform";
import TogglePassword from "./Components/TogglePassword";
// import WelcomeAlert from "./Components/WelcomeAlert";
// import AutoCounter from "./Components/AutoCounter";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",

        flexDirection: "column",
      }}
    >
      <h1>Samarth Saxena</h1>
      <CounterUseState />
      <TogglePassword />
      <CharcterCounter />
      <MultiStepform />
      {/* <WelcomeAlert />
      <AutoCounter /> */}
    </div>
  );
}

export default App;
