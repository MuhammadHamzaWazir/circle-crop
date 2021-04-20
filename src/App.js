import React from "react";
import ImageCropper from "./components/imageCroper";
import Hamza from "./hamza.jpg";

function App() {
  return (
    <div>
      <ImageCropper src={Hamza}></ImageCropper>
    </div>
  );
}

export default App;
