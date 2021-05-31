import React from 'react';
import styles from './Header.module.css';
import logo from '../../images/logo.png';


{/*
    CSS MODULES: easier to change CSS in the future, better CSS code management 
    - it is used in the className
    - it is imported with styles, with: "./filename.module.css" as a javascript object

*/}

const Header = () => {
    return (
        <header className={styles.header}>

        <div className={styles.logoContainer}>
            <img src={logo} class={styles.logo}/>
            <span>Basic Stock Dashboard</span>
        </div>

        <div className={styles.userContainer}>
            <div className={styles.user}>R</div>
            <span>Remi</span>
        </div>

    </header>
    )
}

export default Header;