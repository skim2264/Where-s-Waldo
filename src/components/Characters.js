import React, {useState, useEffect} from "react";
import patrick_1 from "../assets/patrick_1.png";
import stewie_1 from "../assets/stewie_1.png"
import tom_1 from "../assets/tom_1.png";
import styles from "./Characters.module.scss";

const Characters = () => {
    const [images, setImages] = useState([
        {link:patrick_1, alt: "Patrick Star from Spongebob", found: false, id:"patrickImg"},
        {link:stewie_1, alt: "Stewie from Family Guy", found: false, id:"stewieImg"},
        {link:tom_1, alt: "Tom from Tom and Jerry", found: false, id:"tomImg"}
    ]);

    return (
        <div className = {styles.charactersDiv}>
            <p>Left to find:</p>
            <div className={styles.characters}>
                {images.map((image) => {
                    return <img className={styles.characterImg} src={image.link} alt={image.alt} id={image.id} key={image.id}></img>
                })}
            </div>
        </div>
    )
}

export default Characters;