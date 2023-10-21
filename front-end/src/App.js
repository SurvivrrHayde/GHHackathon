import "./App.css";
import { useEffect } from 'react';

function App() {



  return (
    <div className="App">
      <button onClick={window.init}>
        start
      </button>
      <div id="webcam-container"></div>
      <div id="label-container"></div>
    </div>
  );
}

export default App;
