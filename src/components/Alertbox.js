import React, { useState, useEffect } from "react";
import styles from "./Alertbox.module.scss";

const Alertbox = (props) => {
    const { msg } = props;
    const [divStyle, setDivStyle]  = useState({});

    useEffect(() => {
        changeColor();
    },[msg]);

    const changeColor = () => {
        if (msg === "Try again") {
            setDivStyle({
                backgroundColor: "red"
            })
        } else {
            setDivStyle({
                backgroundColor: "green"
            })
        }
    }

    return (
        <div className={styles.alertboxDiv} style={divStyle}>
            <p>{msg}</p>
        </div>
    )
}

export default Alertbox;