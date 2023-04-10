import React from "react";
import styles from './StartPage.module.scss';
import { Link } from "react-router-dom";

const StartPage = () => {
    return(
        <div className={styles.startPageDiv}>
            <Link to="/game">
                <button className={styles.startButton} type="button">Start Game</button>
            </Link>
        </div>
    )
}

export default StartPage;