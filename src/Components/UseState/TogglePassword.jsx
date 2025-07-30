import { useState } from "react";

const TogglePassword = () => {
  const [isvisible, setIsvisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div
      style={{
        border: "2px solid black",
        height: "300px",
        width: "30%",
        padding: "10px",
      }}
    >
      <div style={{ marginBottom: "10px" }}>
        <p>Enter the Email</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <p>Enter your password</p>
        <input
          type={isvisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <button
          onClick={() => setIsvisible((prev) => !prev)}
          style={{ marginLeft: "10px" }}
        >
          {isvisible ? "Hide" : "See"}
        </button>
      </div>

      <button
        onClick={handleSubmit}
        disabled={email === "" || password === ""}
        style={{
          cursor: email === "" || password === "" ? "not-allowed" : "pointer",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default TogglePassword;
