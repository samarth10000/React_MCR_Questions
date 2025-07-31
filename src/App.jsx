import "./App.css";

import CharcterCounter from "./Components/UseState/ChracterCounter";
import CounterUseState from "./Components/UseState/CounterUseState";
import MultiStepform from "./Components/UseState/MultiStepform";
import TogglePassword from "./Components/UseState/TogglePassword";
import Welcomealert from "./Components/UseEffect/WelcomeAlert";
import Updatethepagetitle from "./Components/UseEffect/Updatethepagetitle";
import AutoIncrementCounter from "./Components/UseEffect/AutoIncrementCounter";
import FetchUserdataapi from "./Components/UseEffect/fetchUserDataApi";
import LiveSearchDebounce from "./Components/UseEffect/LiveSearchDebounce";

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
      <Welcomealert />
      <Updatethepagetitle />
      <AutoIncrementCounter />
      <FetchUserdataapi />
      {/* <AutoCounter />  */}
      <LiveSearchDebounce />
    </div>
  );
}

export default App;
