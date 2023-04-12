import React, {useEffect, useState} from "react";
import styles from "./HighscoreBoard.module.scss";
import { getDocs, collection, orderBy, query, limit } from 'firebase/firestore';

const HighscoreBoard = (props) => {
    const {db} = props;
    const [boardInfo, setBoardInfo] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getData();
    },[loaded]);

    const getData = async () => {
        try {
            const q = query(collection(db, "Leaderboard"), orderBy("time"), limit(10));
            const querySnapshot = await getDocs(q);
            const dataList = [];
            querySnapshot.forEach((doc) => {
                dataList.push([doc.id, doc.data()])
            })
            setBoardInfo(dataList);
            setLoaded(true);
        } catch(error) {
            console.error("Error retrieving data from cloud firestore.", error);
        }
        
    } 

    return(
        <div className={styles.boardDiv}>
            <div className={styles.headerDiv}>
                <div className={styles.rankHeaderDiv}>Rank</div>
                <div className={styles.nameDiv}>Name</div>
                <div className={styles.timeDiv}>Time</div>
            </div>
            {loaded? (boardInfo.map((info) => {
                    return (
                        <div className={styles.infoDiv} key={info[0]}>
                            <div className={styles.rankDiv}>
                                {boardInfo.indexOf(info)+1}
                            </div>
                            <div className={styles.nameDiv}>
                                {info[1].name}
                            </div>
                            <div className={styles.timeDiv}>
                                {info[1].time}
                            </div>
                        </div>
                    )
                })
            ): (
                <h1>Data Loading</h1>
            )}
        </div>
    )
}

export default HighscoreBoard;