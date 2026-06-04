import styles from './Contact.module.scss'
import common from '../styles/common.module.scss'

function Contact() {
    return (
        <div className={`${styles.contact} ${common.section}`} id="contact">
            <div className={common.sec__container}>
                <div className={common.sec__title}>
                    <p className={common.sec__title__idx}>03</p>
                    <h2 className={common.sec__title__text}>お問い合わせ</h2>
                    <p className={common.sec__title__subtext}>Web制作・フロントエンド開発の<br />ご相談をお待ちしております。</p>
                </div>

                <div className={styles.content}>
                    <a href="mailto:sekimitsu0511@gmail.com" className={styles.content__link}>sekimitsu0511@gmail.com</a>
                    <a href="https://www.instagram.com/sekimitsu0511/" className={styles.content__link__other}>Instagram</a>
                    <a href="https://www.threads.com/@sekimitsu_masaki?igshid=NTc4MTIwNjQ2YQ==" className={styles.content__link__other}>Threads</a>
                </div>
            </div>
        </div>
    )
}

export default Contact