import styles from './Works.module.scss'
import common from '../styles/common.module.scss'
import Image from 'next/image'
import { worksData } from './WorksData'
import Link from 'next/link'

function Works() {
    return (
        <div className={`${styles.works} ${common.section}`} id="works">
            <div className={common.sec__container}>
                <div className={common.sec__title}>
                    <p className={common.sec__title__idx}>01</p>
                    <h2 className={common.sec__title__text}>制作実績</h2>
                    <p className={common.sec__title__subtext}>受託・自主制作から抜粋。設計から実装、公開後の運用までを一人称で。</p>
                </div>

                <div className={`${styles.content} ${common.section__content}`}>
                    {worksData.map((work, index) => (
                        <Link href={work.single ? `/works/${work.slug}` : work.url} target={work.single ? '_self' : '_blank'} rel="noopener noreferrer" className={styles.content__item} key={index}>
                            <div className={styles.content__item__image__container}>
                                <Image className={styles.content__item__image} src={work.image[0]} alt={work.title} width={1000} height={1000} />
                            </div>
                            <div className={styles.content__item__inner}>
                                <h3 className={styles.content__item__type}>{work.type}</h3>
                                <h3 className={styles.content__item__title} dangerouslySetInnerHTML={{ __html: work.title }}></h3>
                                <p className={styles.content__item__text}>{work.text}</p>
                                <ul className={styles.content__item__skills}>
                                    {work.skills.map((skill, index) => (
                                        <li className={styles.content__item__skills__item} key={index}>{skill}</li>
                                    ))}
                                </ul>
                                {/* <p className={styles.content__item__link}>URL: <a href={work.url} target="_blank" rel="noopener noreferrer">{work.url}</a></p> */}
                                {work.single ? (
                                    <p className={styles.content__item__link}>
                                        <Link href={`/works/${work.slug}`}>
                                            詳細を見る
                                        </Link>
                                    </p>
                                ) : (
                                    <p className={styles.content__item__link}>
                                        URL:
                                        <span
                                            rel="noopener noreferrer"
                                        >
                                            {work.url}
                                        </span>
                                    </p>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Works