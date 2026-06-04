import styles from './Mv.module.scss'

function Mv() {

    return (
        <div className={styles.mv}>
            <div className={styles.mv__container}>
                <div className={styles.mv__container__inner}>
                    <p className={styles.mv__subtitle}>PORTFOLIO / 2026</p>
                    <h2 className={styles.mv__title}>
                        手で組む、<br />
                        その先の<span className={styles.mv__title__web}>Web</span>へ。
                    </h2>
                    <p className={styles.mv__description}>
                        <span className={styles.mv__description__strong}>WordPress</span>のオリジナルテーマ制作を軸に、HTML / CSS / JavaScript で 速くて壊れにくいサイトをつくっています。次は <span className={styles.mv__description__strong}>Next.js・TypeScript</span> で、 設計から手触りまで一貫したものづくりへ。
                    </p>
                </div>
                <div className={styles.mv__container__info}>
                    <p className={styles.mv__container__info__name}>関光 正輝</p>
                    <p className={styles.mv__container__info__job}>Front-End Engineer</p>
                    <p className={styles.mv__container__info__experience}>Web歴 3年</p>
                    <p className={styles.mv__container__info__location}>Based in Japan</p>
                    <span className={styles.mv__container__info__scroll}>
                        scroll
                        <span className={styles.mv__container__info__scroll__line}></span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Mv