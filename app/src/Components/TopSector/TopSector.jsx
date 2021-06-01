import React from 'react';
import modstyles from './TopSector.module.css';
import logo from '../../images/logo.png';


{/*
    CSS MODULES: easier to change CSS in the future, better CSS code management 
    - it is used in the className
    - it is imported with styles, with: "./filename.module.css" as a javascript object

*/}

const Header = () => {
    return (
        <header className={modstyles.header}>

        <div className={modstyles.logoContain}>
            <img src={logo} class={modstyles.logo}/>
            <span>Basic Stock Dashboard</span>
        </div>

        <div className={modstyles.userContain}>
            <div className={modstyles.user}>R</div>
            <span>Remi</span>
        </div>

    </header>
    )
}

export default Header;