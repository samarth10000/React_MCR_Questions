import { useEffect } from "react";

const Welcomealert = () => {
  useEffect(() => {
    setTimeout(() => {
      alert("Welcome Back Your Component is mounted after 3 Seconds");
    }, 3000);
  }, []);

  return (
    <>
      <h1>Wait Alert is On the Way </h1>
    </>
  );
};

export default Welcomealert;
