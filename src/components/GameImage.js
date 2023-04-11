import React, { useState, useEffect } from "react";
import Header from "./Header";
import background1 from "../assets/background1.jpg";
import styles from "./GameImage.module.scss";
import Dropdown from "./Dropdown";
import Alertbox from "./Alertbox";

const GameImage = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [dropdownOpen, setdropdownOpen] = useState(false);
    const [coords, setCoords] = useState([0,0]);
    const [clickboxStyle, setClickboxStyle] = useState({});
    const [msg, setMsg] = useState("");
    let alertBoxFnc = null;

    const {images, setImages} = props;

    const assignPassFnc = (passedFunc) => {
        alertBoxFnc = passedFunc;
    }

    useEffect(() => {
        setIsActive(true);
    },[]);

    //toggle dropdown box on click
    const toggleDropdown = (e) => {
        e.preventDefault();
        setdropdownOpen(!dropdownOpen);
        const coordx = e.pageX;
        const coordy = e.pageY;

        setCoords([coordx, coordy]);

        //display box where image was clicked
        setClickboxStyle({
            display: "block",
            left: coordx-40,
            top: coordy-40
        })
    };

    return (
        <div className={styles.gameDiv} id="gameDiv">
            <Header isActive={isActive} images={images}/>
            <Alertbox msg={msg}></Alertbox>
            <div className={styles.gameImgDiv}>
                <img className={styles.gameImg} id="gameBackgroundImg" src={background1} alt="Cyberpunk City" onClick={toggleDropdown}></img>
                <div className={styles.clickbox} id="clickbox" style={clickboxStyle} onClick={toggleDropdown}></div>
                <Dropdown passFnc={assignPassFnc} setMsg={setMsg} coords={coords} images={images} setImages={setImages} visible={dropdownOpen}></Dropdown>
            </div>
        </div>
    )
}

export default GameImage;