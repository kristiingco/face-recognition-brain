import { useState } from "react";
import "./App.css";
import ImageLinkForm from "./components/image-link-form/ImageLinkForm";
import Logo from "./components/logo/Logo";
import Navigation from "./components/navigation/Navigation";
import Rank from "./components/rank/Rank";

import ParticlesBg from "particles-bg";
import FaceRecognition from "./components/face-recognition/FaceRecognition";

function App() {
  let [input, setInput] = useState("");
  let [imageUrl, setImageUrl] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onButtonSubmit = () => {
    setImageUrl(input);
  };
  return (
    <div className='App'>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      <ParticlesBg type='cobweb' bg={true} color={"#ffffff"} />
      <FaceRecognition imageUrl={imageUrl} />
    </div>
  );
}

export default App;
