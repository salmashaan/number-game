import React from "react";
import { useState } from "react";

function Bar({ randomNumber }) {
  const [guess, setGuess] = useState(0);
  const [result, setResult] = useState("");
  const [attempts, setAttempts] = useState(5);

  let results = "";
  let attempt = 5;

  const guessButton = () => {
    if (+guess === randomNumber) {
      setResult(
        <p className="correct fade-in">Landed on target, well done!!</p>
      );
    } else if (guess > randomNumber) {
      setResult(<p className="comment fade-in">Ow, you bumped your head!</p>);
    } else if (guess < randomNumber && guess !== "") {
      setResult(
        <p className="comment fade-in">Not even close, jump a bit higher..</p>
      );
    } else {
      setResult("");
    }
    console.log(results);
  };

  function playAgain() {
    document.location.reload();
  }

  function getAttempts() {
    setAttempts(attempt - 1);
    console.log(attempt);
  }

  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          setGuess(e.target.value);
        }}
      />
      <br /> <br />
      <button onClick={guessButton}>THIS HIGH</button>
      <br />
      <br />
      {result}
      <br />
      <button onClick={playAgain}>RESTART</button>
      {console.log(guess)}
      <br />
      <br />
      <p> Jumps Remaining: {attempts} </p>
    </div>
  );
}

// <p> {randomNumber} </p> // {randomNumber}
export default Bar;

// what i need to do: figure out how to get attempts when onclick
