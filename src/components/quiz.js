import { useState } from "react";

const correctAnswers = ["90", "right", "one", "equi", "85"];

function getScores(){
    const formdata = new FormData(document.getElementById("form"));
    let score = 0; 
    for( let value of formdata.values()){
      let index = correctAnswers.indexOf(value); 
      if(value === correctAnswers[index]){
        score = score + 1;
      }
    }
    return score;
}

function Quiz() {
    const [output, setOutput] = useState("");

    function displayOutput(){
      const score = getScores();
      setOutput(score);
    }
  return (
    <div className="container">
      <h1>Quiz on Triangles</h1>
      <form id="form">
        <p>
          {" "}
          <strong>Question1:</strong> What is the third angle for the triangle
          where angle1 = 45° and angle2 = 45°?
        </p>
        <label className="quiz-label">
          <input name="que-1" type="radio" value="45"></input> 45°
        </label>
        <label className="quiz-label">
          <input name="que-1" type="radio" value="90"></input> 90°
        </label>
        <label className="quiz-label">
          <input name="que-1" type="radio" value="60"></input> 60°
        </label>

        <p>
          {" "}
          <strong>Question2:</strong> If a triangle has an angle of 90 degrees,
          what is it called?
        </p>
        <label className="quiz-label">
          <input name="que-2" type="radio" value="obtuse"></input> obtuse
        </label>
        <label className="quiz-label">
          <input name="que-2" type="radio" value="acute"></input> acute
        </label>
        <label className="quiz-label">
          <input name="que-2" type="radio" value="right"></input> right angled
        </label>

        <p>
          {" "}
          <strong>Question3:</strong> A triangle can have
        </p>
        <label className="quiz-label">
          <input name="que-3" type="radio" value="one"></input>one right angle 
        </label>
        <label className="quiz-label">
          <input name="que-3" type="radio" value="two"></input> two right angles
        </label>

        <p>
          {" "}
          <strong>Question4:</strong> Which of the following triangles are always similar?
        </p>
        <label className="quiz-label">
          <input name="que-4" type="radio" value="equi"></input>Equilateral triangle 
        </label>
        <label className="quiz-label">
          <input name="que-4" type="radio" value="iso"></input> Isosceles triangle
        </label>

        <p>
          {" "}
          <strong>Question5:</strong> If one angle of a triangle is obtuse, then which one of the following is the possible measure of remaining angles?
        </p>
        <label className="quiz-label">
          <input name="que-5" type="radio" value="100"></input>100°
        </label>
        <label className="quiz-label">
          <input name="que-5" type="radio" value="85"></input>85°
        </label>
        
      </form>
      <button onClick={displayOutput}>Scores</button>
      <div id = "output-quiz">Your score is: {output}</div>
    </div>
  );
}

export default Quiz;
