import Image from 'next/image'
import styles from './About.module.scss'
import common from '../styles/common.module.scss'

function About() {
    return (
        <div className={`${styles.about} ${common.section}`} id="about">
            <div className={common.sec__container}>
                <h2 className={common.sec__title}>ABOUT</h2>
                <div className={`${styles.content} ${common.section__content}`}>
                    <h3 className={styles.content__title}>Profile</h3>
                    <div className={styles.content__profile}>
                        <Image className={styles.content__profile__image} src="/profile.JPG" alt="about1" width={1000} height={1000} />
                        <p>
                            フロントエンドエンジニアとして、HTML / CSS / JavaScript / WordPress を中心に開発を行っています。<br />
                            デザインの意図を正しく汲み取り、再現性と拡張性を意識した実装を心がけています。<br />
                            <br />
                            保守性の高いコード設計を大切にし、美しさと機能性を両立したユーザー体験を追求しています。<br />
                            現在は React / Next.js などのモダンフレームワークにも取り組み、より高度で応用力のあるフロントエンド開発力を磨いています。
                        </p>
                    </div>
                    <h3 className={styles.content__title}>Strength</h3>
                        <ul className={styles.content__strength}>
                            <li>デザイン意図を汲み取った忠実な実装</li>
                            <li>保守性の高いコード設計</li>
                            <li>WordPressを用いたオリジナルテーマ開発</li>
                            <li>React / Next.js を用いたモダン開発への対応</li>
                            <li>継続的な技術アップデート</li>
                        </ul>
                    <h3 className={styles.content__title}>What I Can Do</h3>
                    <div className={styles.content__what}>
                        <div className={styles.content__what__item}>
                            <div className={styles.content__what__item__image__container}>
                                <Image className={styles.content__what__item__image} src="/what_image1.jpg" alt="html" fill />
                            </div>
                            <div className={styles.content__what__item__inner}>
                                <h4 className={styles.content__what__item__title}>HP/LP制作</h4>
                                <p className={styles.content__what__item__description}>
                                    HTML/CSS/JavaScriptを用いたウェブサイトの制作を行っています。
                                </p>
                            </div>
                        </div>
                        <div className={styles.content__what__item}>
                            <div className={styles.content__what__item__image__container}>
                                <Image className={styles.content__what__item__image} src="/what_image2.jpg" alt="html" fill />
                            </div>
                            <div className={styles.content__what__item__inner}>
                                <h4 className={styles.content__what__item__title}>WordPressテーマ開発</h4>
                                <p className={styles.content__what__item__description}>
                                    WordPress自作テーマでの開発により、機能的かつオリジナルのデザインを実現します。
                                </p>
                            </div>
                        </div>
                        <div className={styles.content__what__item}>
                            <div className={styles.content__what__item__image__container}>
                                <Image className={styles.content__what__item__image} src="/what_image3.jpg" alt="html" fill />
                            </div>
                            <div className={styles.content__what__item__inner}>
                                <h4 className={styles.content__what__item__title}>レスポンシブ対応</h4>
                                <p className={styles.content__what__item__description}>
                                    あらゆるデバイスで最適に表示されるよう、柔軟なレイアウト設計を行います。
                                </p>
                            </div>
                        </div>
                        <div className={styles.content__what__item}>
                            <div className={styles.content__what__item__image__container}>
                                <Image className={styles.content__what__item__image} src="/what_image4.jpg" alt="html" fill />
                            </div>
                            <div className={styles.content__what__item__inner}>
                                <h4 className={styles.content__what__item__title}>React / Next.js 開発</h4>
                                <p className={styles.content__what__item__description}>
                                    React・Next.jsを用いたアプリケーション開発に取り組んでいます。<br />
                                    Todo管理アプリなどの制作を通じて、コンポーネント設計や状態管理、ルーティングの理解を深めています。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About