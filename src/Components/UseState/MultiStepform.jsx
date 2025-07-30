import { useState } from "react";

const MultiStepform = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <>
      <div
        style={{ border: "2px solid black ", height: "350px", width: "250px" }}
      >
        <h1>Current Step {currentStep}</h1>
        <div style={{ padding: "15px" }}>
          {currentStep === 1 && (
            <div>
              <p>Name</p>
              <input
                type="text"
                placeholder="Type your name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <p>Email</p>
              <input
                type="email"
                placeholder="Type your email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <p>Password</p>
              <input
                type="password"
                placeholder="Type your password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          )}
        </div>
        <div style={{ padding: "15px" }}>
          <button
            onClick={() => {
              setCurrentStep(currentStep - 1);
            }}
            disabled={currentStep <= 1}
          >
            Back
          </button>
          <button
            onClick={() => {
              setCurrentStep(currentStep + 1);
            }}
            disabled={currentStep >= 3}
          >
            Next
          </button>
        </div>

        <div style={{ padding: "15px" }}>
          {currentStep === 3 && (
            <button
              onClick={() =>
                alert(
                  `congratulations you are finally submitted the form \n Name : ${Name} , Email : ${Email} ,password :  ${Password}`
                )
              }
            >
              Final Submit
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default MultiStepform;
