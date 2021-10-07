import React from "react";
import logo from "./game-logo2.png";

function Head() {
  return (
    <div>
      <br />
      <img class="game-logo" src={logo} alt="logo" />
      <h1> When I say jump:</h1>
      <h1 className="h1-2">you say how high?</h1>
      <div className="rule">
        {" "}
        <p>
          {" "}
          <br /> How to play? Let me explain...{" "}
        </p>{" "}
      </div>
      <br />
      <br />
      <p>
        {" "}
        All you have you do it guess the correct height, between 0 and 10, to
        reach the target. <br /> <br />
        That's it! Come on, start JUMPING!
      </p>
      <br />
    </div>
  );
}

export default Head;
