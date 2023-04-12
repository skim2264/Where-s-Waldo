import React from "react";
import Timer from "./Timer";
import Logo from "./Logo";
import Characters from "./Characters";
import styles from "./Header.module.scss";

const Header = (props) => {
    const {isActive, images, db} = props;
    return (
        <div className={styles.headerDiv} id="header">
            <Logo/>
            <Characters images={images}/>
            <Timer isActive={isActive} db={db}/>
        </div>
    )
}

export default Header;