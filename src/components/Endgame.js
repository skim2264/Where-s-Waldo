import React from "react";
import styles from "./Endgame.module.scss";
import HighscoreBoard from "./HighscoreBoard"; 
import { collection, doc, getDoc, addDoc } from 'firebase/firestore';

const Endgame = (props) => {
    const {db} = props;

    const addToBoard = async (e) => {
        e.preventDefault();
        console.log("submitted");
        const nameInput = e.target.elements.name.value;
        try {
            const timeDone = await (await getDoc(doc(db, "currTime", "currTime"))).data().currTime;
            try {
                await addDoc(collection(db, "Leaderboard"), {
                    name: nameInput, 
                    time: timeDone
                });
            } catch(error) {
                console.error("Could not update data in Firestore", error)
            }    
        } catch(error) {
            console.error("Could not retrieve data from Firestore", error)
        }
    }

    return (
        <div className={styles.endgameDiv}>
            <h1>Congratulations! You have found all the characters.</h1>
            <p>You finish time is: </p>
            <form onSubmit={addToBoard}>
                <input name="name" placeholder="name..." id="name"></input>
                <button type="submit">Submit</button>
            </form>
            <HighscoreBoard db={db}></HighscoreBoard>
        </div>
    )
}

export default Endgame;