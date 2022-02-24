import React, { useState, useEffect } from "react";

export default () => {
  const [statefulVariable, setStatefulVariable] = useState("Hello World!");

  useEffect( () => {
    setStatefulVariable("Goodbye Moon!");
  }, []);
  return (
    <>
    <h1>Chrome Debugger VS Code React testing</h1>
    <p>{statefulVariable}</p>
  </>
  );
}