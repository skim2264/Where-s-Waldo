import './App.scss';
import React, { useEffect } from "react";
import GameImage from './components/GameImage';
import StartPage from './components/StartPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<StartPage/>}></Route>
          <Route path="/game" element={<GameImage isActive={true}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
