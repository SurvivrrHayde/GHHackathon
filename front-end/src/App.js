import "./App.css";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.init();
  }, []);

  return (
    <div className="App">
      <div id="webcam-container"></div>
      <div id="label-container"></div>
    </div>
  );
}

export default App;
