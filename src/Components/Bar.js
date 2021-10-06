import React from "react";
import { useState } from "react";

function Bar({ randomNumber }) {
  const [guess, setGuess] = useState(0);
  const [result, setResult] = useState("");
  let results = "";

  const guessButton = () => {
    if (+guess === randomNumber) {
      setResult(<p className="success">Correct!</p>);
    } else if (guess > randomNumber) {
      setResult(<p className="high">Too high, guess again</p>);
    } else if (guess < randomNumber && guess !== "") {
      setResult(<p className="low">Too low, guess again</p>);
    } else {
      setResult("");
    }
    console.log(results);
  };

  return (
    <div>
      {randomNumber}
      <input
        type="number"
        onChange={(e) => {
          setGuess(e.target.value);
        }}
      />
      <button onClick={guessButton}>GUESS</button>
      {result}
      {console.log(guess)}
    </div>
  );
}

// <p> {randomNumber} </p> //
export default Bar;
