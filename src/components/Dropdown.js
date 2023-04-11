import React, { useState, useEffect } from "react";
import styles from "./Dropdown.module.scss";

const Dropdown = (props) => {
    const { coords, images, visible } = props;
    const [divStyle, setDivStyle] = useState({});

    useEffect(() => {
        moveDropdown();
    },[visible]);

    const validateChoice = (imgCoord) => {
        //get height of header for calculations
        const headerHeight = document.getElementById("header").clientHeight;
        const backgroundImage = document.getElementById("gameBackgroundImg");
        const backgroundHeight = backgroundImage.height;
        const backgroundWidth = backgroundImage.width;

        const boxX = 60/backgroundWidth;
        const boxY = 60/backgroundHeight;

        //change clicked on coordinates to percentage of game image
        const percentageX = (coords[0]/backgroundWidth).toFixed(3);
        const percentageY = ((coords[1]-headerHeight)/backgroundHeight).toFixed(3);

        if (percentageX >= Number(imgCoord[0]) && percentageX <= Number(imgCoord[0])+boxX) {
            if (percentageY >= imgCoord[1] && percentageY <= Number(imgCoord[1])+boxY){
                console.log("found Him!", percentageX, percentageY);
            } else {
                console.log(percentageX, percentageY, imgCoord[0], imgCoord[1]);
            }
        } else {
            console.log("Not him", percentageX, percentageY, imgCoord[0], imgCoord[1]);
        }
    }

    //set coordinates of dropdown box to display
    const moveDropdown = () => {
        if (coords[0] > window.innerWidth-173) {
            setDivStyle({
                left: coords[0] -173,
                top: coords[1] -25
            });
        } else {
            setDivStyle({
                left: coords[0]+37,
                top: coords[1] -25
            });
        }
    }
    
    if(visible) {
        return(
            <div className={styles.dropdownDiv} style={divStyle}>
                {images.map((image) => {
                    return (
                    <div className={styles.character} onClick={() => validateChoice(image.coords)} key={image.id}>
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