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
    setOutput(hypotenuse);
  }
  return (
    <>
      <h1>Hypotenuse of a Triangle</h1>
      <label htmlFor="side-1">Enter side one</label>
      <input type="number" className="side" onChange={setSideOne} />
      <label htmlFor="side-2">Enter side two</label>
      <input type="number" className="side" onChange={setSideTwo} />
      <button onClick={() => calculateHypotenuse(side1, side2)}>
        Check Hypotenuse
      </button>
      <div id="output">{output}</div>
    </>
  );
}

export default Hypotenuse;
