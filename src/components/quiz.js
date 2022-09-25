import { useState } from "react";

const correctAnswers = ["90", "right"];

function getScores(){
    const formdata = new FormData(document.getElementById("form"));
    let score = 0; 
    let index = 0; 
    for( let value of formdata.values()){
      if(value === correctAnswers[index]){
        score = score + 1;
      }
      index = index+1;
    }
    return score;
}



function Quiz() {
    const [output, setOutput] = useState("");

    function displayOutput(){
      const score = getScores();
      setOutput(`Your Score is ${score}`);
    }
  return (
    <>
      <h1>Quiz on Triangles</h1>
      <form id="form">
        <p>
          {" "}
          <strong>Question1:</strong> What is the third angle for the triangle
          where angle1 = 45° and angle2 = 45°?
        </p>
        <label>
          <input name="que-1" type="radio" value="45"></input> 45°
        </label>
        <label>
          <input name="que-1" type="radio" value="90"></input> 90°
        </label>
        <label>
          <input name="que-1" type="radio" value="60"></input> 60°
        </label>

        <p>
          {" "}
          <strong>Question2:</strong> If a triangle has an angle of 90 degrees,
          what is it called?
        </p>
        <label>
          <input name="que-2" type="radio" value="obtuse"></input> obtuse
        </label>
        <label>
          <input name="que-2" type="radio" value="acute"></input> acute
        </label>
        <label>
          <input name="que-2" type="radio" value="right"></input> right angled
        </label>
      </form>
      <button onClick={displayOutput}>Check Scores</button>
      <div id = "output">{output}</div>
    </>
  );
}

export default Quiz;
