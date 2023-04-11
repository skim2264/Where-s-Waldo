import React, { useState, useEffect } from "react";
import styles from "./Dropdown.module.scss";
import { Navigate, useNavigate } from "react-router-dom";

const Dropdown = (props) => {
    const { setMsg, coords, images, setImages, visible } = props;
    const [divStyle, setDivStyle] = useState({});
    const navigate = useNavigate();

    //move dropdown box location when its visibility is toggled
    useEffect(() => {
        moveDropdown();
    },[visible]);

    const validateChoice = (imgCoord, name) => {
        //get height of header and background image dimensions for calculations 
        const headerHeight = document.getElementById("header").clientHeight;
        const backgroundImage = document.getElementById("gameBackgroundImg");
        const backgroundHeight = backgroundImage.height;
        const backgroundWidth = backgroundImage.width;
        const marginLeft = (window.innerWidth - backgroundWidth)/2;

        //get width of the clickbox in percentages
        const boxX = 80/backgroundWidth;
        const boxY = 80/backgroundHeight;

        //change clicked on coordinates to percentage of game image
        const percentageX = ((coords[0]- marginLeft)/backgroundWidth).toFixed(3);
        const percentageY = ((coords[1]-headerHeight)/backgroundHeight).toFixed(3);

        //found character if in range of the clickbox
        if (percentageX >= Number(imgCoord[0]) && percentageX <= Number(imgCoord[0])+boxX) {
            if (percentageY >= imgCoord[1] && percentageY <= Number(imgCoord[1])+boxY){
                const newImages = images.filter((image) => image.name!==name);
                setImages(newImages);

                if(newImages.length === 0) {
                    navigate("/endgame");
                }

                return alertFnc(`Found ${name}, ${percentageX}, ${percentageY}, ${boxX}, ${boxY}`);
            }
        }
        alertFnc(`Try again, ${percentageX}, ${percentageY}, ${boxX}, ${boxY}, ${percentageX >= Number(imgCoord[0])}, ${percentageY >= imgCoord[1]}`);
    }

    const alertFnc = (msg) => {
        setMsg(msg);
    }

    props.passFnc(alertFnc);

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
                        <div className={styles.character} onClick={() => validateChoice(image.coords, image.name)} key={image.id}>
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