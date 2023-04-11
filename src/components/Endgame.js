import React from "react";
import styles from "./Endgame.module.scss";
import HighscoreBoard from "./HighscoreBoard"; 

const Endgame = () => {
    return (
        <div className={styles.endgameDiv}>
            <h1>Congratulations! You have found all the characters.</h1>
            <p>You finish time is: </p>
            <input name="name" placeholder="name..." id="name"></input>
            <HighscoreBoard></HighscoreBoard>
        </div>
    )
}

export default Endgame;