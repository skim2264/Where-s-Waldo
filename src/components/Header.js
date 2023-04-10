import React, { useEffect } from "react";
import Timer from "./Timer";
import Logo from "./Logo";
import Characters from "./Characters";
import styles from "./Header.module.scss";

const Header = () => {
    
    return (
        <div className={styles.headerDiv}>
            <Logo/>
            <Characters/>
            <Timer/>
        </div>
    )
}

export default Header;