import './App.scss';
import React, { useState } from "react";
import GameImage from './components/GameImage';
import StartPage from './components/StartPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import patrick_1 from "./assets/patrick_1.png";
import stewie_1 from "./assets/stewie_1.png";
import tom_1 from "./assets/tom_1.png";
import Endgame from './components/Endgame';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFirebaseConfig } from './firebase-config';


function App() {
  const firebaseAppConfig = getFirebaseConfig();
  const app = initializeApp(firebaseAppConfig);
  const db = getFirestore(app);

  const [images, setImages] = useState([
    {link:patrick_1, alt: "Patrick Star from Spongebob", id:"patrickImg", name: "Patrick", coords:["0.647","0.784"]},
    {link:stewie_1, alt: "Stewie from Family Guy", id:"stewieImg", name: "Stewie", coords:["0.913", "0.778"]},
    {link:tom_1, alt: "Tom from Tom and Jerry", id:"tomImg", name:"Tom", coords:["0.836", "0.957"]}
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<StartPage/>}></Route>
          <Route path="/game" element={<GameImage images={images} setImages={setImages} db={db}/>}></Route>
          <Route path="/endgame" element={<Endgame db={db}></Endgame>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
