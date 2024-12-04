import React from "react";
import styles from './Footer.module.css';

function Footer() {
    console.log('Footer elements');

    return (
        <footer className={styles.footer}>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sed ad debitis quos eius! Quasi aspernatur dignissimos repudiandae eligendi?
            </p>
        </footer>
    )
}

export default Footer