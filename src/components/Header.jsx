import React from "react";
import styles from './Header.module.css';

function Header() {
    // console.log('Header components');

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Il mio Blog</h1>
        </header>
    );
}



export default Header;