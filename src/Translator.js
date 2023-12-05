import "./App.css";
import * as tmImage from "@teachablemachine/image";
import { useEffect, useState } from "react";

function Translator() {
  const URL = "https://teachablemachine.withgoogle.com/models/kcVtMoS1Y/";
  let model, webcam, maxPredictions;
  const [translatedWord, setTranslatedWord] = useState("");
  const [predictedLetter, setPredictedLetter] = useState("");
  const [translating, setTranslating] = useState(false);

  async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(400, 400, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);
  }

  async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
  }

  async function predict() {
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(webcam.canvas);
    let best = 0;
    let bestIndex = 0;
    for (let i = 0; i < maxPredictions; i++) {
      if (prediction[i].probability > best) {
        best = prediction[i].probability;
        bestIndex = i;
      }
    }
    setPredictedLetter(prediction[bestIndex].className);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div
      className="d-flex text-center text-bg-dark"
      style={{ height: "100vh" }}
    >
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header style={{marginBottom: "100px"}}>
          <div>
            <h3 className="float-md-start mb-0">ASL Translator</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <a
                className="nav-link fw-bold py-1 px-0"
                aria-current="page"
                href="/"
              >
                Home
              </a>
              <a className="nav-link fw-bold py-1 px-0" href="/aboutUs">
                About Us
              </a>
              <a
                className="nav-link fw-bold py-1 px-0 active"
                href="/translator"
                aria-current="page"
              >
                Translator
              </a>
            </nav>
          </div>
        </header>
        <main className="px-3">
          <div id="webcam-container"></div>
          <p>The Current ASL Translation is: {predictedLetter}</p>
        </main>
      </div>
    </div>
  );
}

export default Translator;
