import React, {useState, useEffect} from "react";
import styles from "./Timer.module.scss";
import { updateDoc, doc } from 'firebase/firestore';

const Timer = (props) => {
    const {isActive, db} = props;
    const [seconds, setSeconds] = useState(0);
    const [time, setTime] = useState(null);

    useEffect(() => {
        let timer = null;
        if(isActive){
            timer = setInterval(async () => {
                setSeconds((seconds) => seconds+1);
                await updateDoc(doc(db, "currTime", "currTime"), {
                    currTime: seconds
                })
                formatTimer();
            },1000);
        }
        return () => {
            clearInterval(timer);
        }
    })

    const formatTimer = () => {
        const min = Math.floor(seconds/60);
        const sec = seconds % 60;
        const minFormat = min.toString().padStart(2,'0');
        const secFormat = sec.toString().padStart(2,'0');

        setTime(`${minFormat}:${secFormat}`);
    }

    return (
        <div className={styles.timerDiv}>
            {time}
        </div>
    )
}

export default Timer;