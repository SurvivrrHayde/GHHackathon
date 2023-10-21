import logo from "./logo.svg";
import "./App.css";
import * as ml5 from "ml5";
import Webcam from "react-webcam"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App">
          <Webcam />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
