import React from "react";
import { useState } from "react";

function Bar({ randomNumber }) {
  const [guess, setGuess] = useState(0);
  const [result, setResult] = useState("");
  let results = "";
  let guesses = [];
  let previousGuess = 0;

  const updatePreviousGuess = function () {
    previousGuess = guesses[guesses.length - 1];
  };

  //   const resetInput = () => {};

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
    </div>
  );
}

// <p> {randomNumber} </p> // {randomNumber}
export default Bar;
