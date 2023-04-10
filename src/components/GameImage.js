import React, { useState, useEffect } from "react";
import Header from "./Header";
import background1 from "../assets/background1.jpg";

const GameImage = () => {
    const openDropdown = () => {

    }

    const closeDropdown = () => {

    }

    return (
        <div className="gameDiv">
            <Header/>
            <img src={background1} alt="Cyberpunk City"></img>
        </div>
    )
}

export default GameImage;