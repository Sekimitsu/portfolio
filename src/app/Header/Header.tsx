import styles from './Header.module.scss'

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <a href="#about" className={styles.header__link}>About</a>
                <a href="#skills" className={styles.header__link}>Skills</a>
                <a href="#works" className={styles.header__link}>Works</a>
            </div>
        </div>
    )
}

export default Header