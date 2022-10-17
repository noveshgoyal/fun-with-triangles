import { useState } from "react";

function Area(){
    const [output, setOutput] = useState("");
    const [base, setB] = useState("");
    const [height, setH] = useState("");

    function setBase(event){
        setB(Number(event.target.value));
    }

    function setHeight(event){
        setH(Number(event.target.value));
    }

    function calculateArea(base, height){
        const area = 1/2 * base * height;
        setOutput(`The area of the triangle is: ${area}`)
    }
    return(
        <div className="container">
        <h1>Area of Triangle</h1>
        <label htmlFor="base" className="label">Base</label>
        <input id="base" type="number" className="input" min={0} onChange={setBase}/>
        <label htmlFor="height" className="label">Height</label>
        <input id="height" type="number" className="input" min={0} onChange={setHeight}/>
        <button onClick={() => calculateArea(base, height)}>Calculate</button>
        <p className="output">{output}</p>
        </div>
    );
}

export default Area;