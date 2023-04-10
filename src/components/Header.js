import React from "react";
import Timer from "./Timer";
import Logo from "./Logo";
import Characters from "./Characters";
import styles from "./Header.module.scss";

const Header = (props) => {
    const {isActive, images} = props;
    return (
        <div className={styles.headerDiv}>
            <Logo/>
            <Characters images={images}/>
            <Timer isActive={isActive}/>
        </div>
    )
}

export default Header;