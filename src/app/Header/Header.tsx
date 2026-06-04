import styles from './Header.module.scss'
import { useState, useEffect } from 'react';

function Header() {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setProgress(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <a href="#" className={styles.header__title}>Sekimitsu Masaki</a>
                <div className={styles.header__links}>
                    <a href="#works" className={styles.header__link}>Works</a>
                    <a href="#skills" className={styles.header__link}>Skills</a>
                    <a href="#contact" className={styles.header__link}>Contact</a>
                </div>
            </div>
            <div className={styles.header__progress}>
                <div className={styles.header__progress__bar} style={{ transform: `translateX(-${(1 - progress) * 100}%)` }}></div>
            </div>
        </div>
    )
}

export default Header