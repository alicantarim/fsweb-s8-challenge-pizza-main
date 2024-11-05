import { useState } from "react";
import reactLogo from "./assets/react.svg";
import workintech from "/workintech.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <div className="container-lg">Tenknoloji Yemekler</div>
      </header>
    </div>
  );
}

export default App;
