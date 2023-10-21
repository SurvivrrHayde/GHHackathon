import "./App.css";

function App() {

  return (
    <div className="App">
      <button onClick={window.init}>
        start
      </button>
      <div id="webcam-container"></div>
      <div id="label-container"></div>
      <button onClick={window.requestAnimationFrame(window.translate)}> Start Translating </button>
      <div id="translated-word"></div>
    </div>
  );
}

export default App;
