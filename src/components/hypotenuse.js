import { useState } from "react";

function Hypotenuse() {
  const [side1, setSide1] = useState("");
  const [side2, setSide2] = useState("");
  const [output, setOutput] = useState("");

  function setSideOne(event) {
    setSide1(Number(event.target.value));
  }
  function setSideTwo(event) {
    setSide2(Number(event.target.value));
  }

  function calculateHypotenuse(sideOne, sideTwo) {
    // function for the calculation of hypotenuse
    const sumOfSquares = sideOne * sideOne + sideTwo * sideTwo;
    const hypotenuse = Math.sqrt(sumOfSquares);
    setOutput(`The length of the hypotenuse is ${hypotenuse}`);
  }
  return (
    <div className="container">
      <h1>Hypotenuse of a Triangle</h1>
      <label htmlFor="side-1" className="label">Enter side one</label>
      <input type="number" className="input" min={0} onChange={setSideOne} />
      <label htmlFor="side-2" className="label">Enter side two</label>
      <input type="number" className="input" min={0} onChange={setSideTwo} />
      <button onClick={() => calculateHypotenuse(side1, side2)}>
        Hypotenuse
      </button>
      <p className="output">{output}</p>
    </div>
  );
}

export default Hypotenuse;
