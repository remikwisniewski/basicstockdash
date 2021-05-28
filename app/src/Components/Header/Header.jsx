import React from 'react';
import styles from './Header.module.css';

{/*
    CSS MODULES: easier to change CSS in the future, better CSS code management 
    - it is used in the className
    - it is imported with styles, with: "./filename.module.css"

*/}

const Header = () => {
    return <header className={styles.header}> test</header>
}

export default Header;