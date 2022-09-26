import { useState } from "react";

const IsTriangle = () => {
  const [angle1, setAngle1] = useState("");
  const [angle2, setAngle2] = useState("");
  const [angle3, setAngle3] = useState("");
  const [output, setOutput] = useState("");

  function checkIsTriangle(angle1, angle2, angle3) {
    if (angle1 + angle2 + angle3 === 180) {
      setOutput("These angles forms a Triangle!");
    } else {
      setOutput("These angles does not form a Triangle!");
    }
  }

  function setAngleOne(event) {
    setAngle1(Number(event.target.value));
  }
  function setAngleTwo(event) {
    setAngle2(Number(event.target.value));
  }
  function setAngleThree(event) {
    setAngle3(Number(event.target.value));
  }

  return (
    <div className="container">
      <h1>Angles of Triangle</h1>
      
      <label htmlFor="angle-1" className="label">Angle 1</label>
      <input type="number" id="angle-1" className="input" onChange={setAngleOne}></input>
      <label htmlFor="angle-2" className="label">Angle 2</label>
      <input type="number" id="angle-2" className="input" onChange={setAngleTwo}></input>
      <label htmlFor="angle-3" className="label">Angle 3</label>
      <input type="number" id="angle-3" className="input" onChange={setAngleThree}></input>
      <button style={{marginTop:"15px"}}
        id="check-btn"
        onClick={() => checkIsTriangle(angle1, angle2, angle3)}
      >
        Is Triangle?
      </button>
      <div id="output" >{output}</div>
    </div>
  );
};

export default IsTriangle;
