import React, { useState, useEffect } from "react";
import Header from "./Header";
import background1 from "../assets/background1.jpg";

const GameImage = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(true);
    },[]);

    const openDropdown = () => {

    };

    const closeDropdown = () => {

    };

    return (
        <div className="gameDiv">
            <Header isActive={isActive}/>
            <img src={background1} alt="Cyberpunk City"></img>
        </div>
    )
}

export default GameImage;