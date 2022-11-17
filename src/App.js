import { useState } from "react";
import "./App.css";
import ImageLinkForm from "./components/image-link-form/ImageLinkForm";
import Logo from "./components/logo/Logo";
import Navigation from "./components/navigation/Navigation";
import Rank from "./components/rank/Rank";

import ParticlesBg from "particles-bg";

function App() {
  let [input, setInput] = useState("");

  const onInputChange = (e) => {
    console.log(e.target.value);
  };

  const onButtonSubmit = () => {
    console.log("click");
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
      {/*
     
      <FaceRecognition/> */}
    </div>
  );
}

export default App;
