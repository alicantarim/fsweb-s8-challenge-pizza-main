import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import workintech from '/workintech.svg'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>Pokemon Card Game</h1>
      </div>
    </>
  );
}

export default App;
