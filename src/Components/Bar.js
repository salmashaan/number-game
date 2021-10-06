import React from "react";
import { useState } from "react";

let randomNumber = Math.round(Math.random() * 10);

function Bar() {
  const [value, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);
  let results = "";

  const onClick = () => {
    const userGuess = value;

    if (userGuess === randomNumber) {
      return <p className="success">Correct!</p>;
    } else if (userGuess > randomNumber) {
      return <p className="high">Too high, guess again</p>;
    } else if (userGuess < randomNumber && userGuess !== "") {
      return <p className="low">Too low, guess again</p>;
    } else {
      return "";
    }
  };

  results = onClick(value);
  return (
    <div>
      <input value={value} type="number" onChange={onChange} />
      <button onClick={onClick} type="submit">
        GUESS
      </button>
      {results}
    </div>
  );
}

export default Bar;
