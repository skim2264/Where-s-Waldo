import React from "react";
import styles from "./Characters.module.scss";

const Characters = (props) => {
    const { images } = props;

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