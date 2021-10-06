import React from "react";
import { useState } from "react";

let randomNumber = Math.round(Math.random() * 10);

const GuessTheNumber = () => {
  const [value, setValue] = useState("");
  let results = "";

  const GuessButton = () => {
    const userGuess = value;
    if (userGuess === "") return null;
    if (userGuess === randomNumber)
      return <p className="alert alert-success">Correct!</p>;
    if (userGuess > randomNumber)
      return <p className="alert alert-warning">Too high, guess again</p>;
    if (userGuess < randomNumber)
      return <p className="alert alert-warning">Too low, guess again</p>;
  };

  results = GuessButton(setValue);

  return (
    <>
      <input value={value} type="number" />
      <button type="submit" onClick={GuessButton}>
        GUESS
      </button>
      <br />
      <br />
      {results}
    </>
  );
};

export default GuessTheNumber;
