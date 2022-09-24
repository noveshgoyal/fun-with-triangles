import { useState } from "react";

const IsTriangle = () => {
  const [angle1, setAngle1] = useState("");
  const [angle2, setAngle2] = useState("");
  const [angle3, setAngle3] = useState("");
  const [output, setOutput] = useState("");

  function check(angle1, angle2, angle3) {
    if (angle1 + angle2 + angle3 === 180) {
      setOutput("It is a triangle!");
    } else {
      setOutput("No it is not!");
    }
  }

  function getAngle1(event) {
    setAngle1(Number(event.target.value));
  }
  function getAngle2(event) {
    setAngle2(Number(event.target.value));
  }
  function getAngle3(event) {
    setAngle3(Number(event.target.value));
  }

  return (
    <>
      <label htmlFor="angle-1">Enter the value for angle-1</label>
      <input
        type="number"
        id="angle-1"
        onChange={getAngle1}
      ></input>
      <label htmlFor="angle-2">Enter the value for angle-2</label>
      <input
        type="number"
        id="angle-2"
        onChange={getAngle2}
      ></input>
      <label htmlFor="angle-3">Enter the value for angle-3</label>
      <input
        type="number"
        id="angle-3"
        onChange={getAngle3}
      ></input>
      <button id="check-btn" onClick={() => check(angle1, angle2, angle3)}>
        check
      </button>
      <div id="output">{output}</div>
    </>
  );
};

export default IsTriangle;
