import React, { useState, useEffect } from "react";
import styles from "./Dropdown.module.scss";

const Dropdown = (props) => {
    const { coords, images, visible } = props;
    const [divStyle, setDivStyle] = useState({});

    useEffect(() => {
        moveDropdown();
    },[visible]);

    const validateChoice = () => {

    }

    //set coordinates of dropdown box to display
    const moveDropdown = () => {
        if (coords[0] > window.innerWidth-150) {
            setDivStyle({
                left: coords[0] -173,
                top: coords[1] -25
            });
        } else {
            setDivStyle({
                left: coords[0]+26,
                top: coords[1] -25
            });
        }
    }
    
    if(visible) {
        return(
            <div className={styles.dropdownDiv} style={divStyle}>
                {images.map((image) => {
                    return (
                    <div className={styles.character} key={image.id}>
                        <img className={styles.characterImg} src={image.link} alt={image.alt} id={image.id}></img>
                        <p>{image.name}</p>
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default Dropdown;