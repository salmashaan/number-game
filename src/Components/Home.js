import React from "react";
import logo from "./game-logo2.png";

function Head() {
  return (
    <div>
      <br />
      <img class="game-logo" src={logo} alt="logo" />
      <h1> High or Low</h1>
      <h4>Ready to play?</h4>
      <p>
        <br /> How to play? Let me explain...
        <br />
        <br /> All you have you do it guess a number between 1 and 10. And let
        us do the rest. <br /> <br />
        That's it! Come on, START!
      </p>
      <br />
    </div>
  );
}

export default Head;
