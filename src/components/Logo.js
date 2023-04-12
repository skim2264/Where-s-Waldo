import React from "react";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

const Logo = () => {
    return(
        <div className={styles.logoDiv}>
            <Link className={styles.link} to="/">
                Search
            </Link>
        </div>
    )
}

export default Logo;