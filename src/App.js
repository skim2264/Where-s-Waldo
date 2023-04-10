import './App.scss';
import React, { useState } from "react";
import GameImage from './components/GameImage';
import StartPage from './components/StartPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import patrick_1 from "./assets/patrick_1.png";
import stewie_1 from "./assets/stewie_1.png";
import tom_1 from "./assets/tom_1.png";


function App() {
  const [images, setImages] = useState([
    {link:patrick_1, alt: "Patrick Star from Spongebob", found: false, id:"patrickImg", name: "Patrick"},
    {link:stewie_1, alt: "Stewie from Family Guy", found: false, id:"stewieImg", name: "Stewie"},
    {link:tom_1, alt: "Tom from Tom and Jerry", found: false, id:"tomImg", name:"Tom"}
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<StartPage/>}></Route>
          <Route path="/game" element={<GameImage images={images}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
