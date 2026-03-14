import styles from './Footer.module.scss'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__container}>
                <p className={styles.footer__copyright}>©2026 Sekimitsu Masaki</p>
            </div>
        </div>
    )
}

export default Footer