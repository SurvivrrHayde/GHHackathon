import "./App.css";

function App() {
  return (
    <div className="App">
      <button type="button" onclick="init()">
        Start
      </button>
      <div id="webcam-container"></div>
      <div id="label-container"></div>
    </div>
  );
}

export default App;
