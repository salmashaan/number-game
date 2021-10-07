import "./App.css";
import Home from "./Components/Home";
// import Bar from "./Components/Bar";
// import Guess from "./Components/Guess";
import Bar from "./Components/Bar";
// import Attempts from "./Components/Attempts";

function App() {
  let randomNumber = Math.round(Math.random() * 10);

  return (
    <div className="App">
      <Home />
      <Bar randomNumber={randomNumber} />
    </div>
  );
}

export default App;
