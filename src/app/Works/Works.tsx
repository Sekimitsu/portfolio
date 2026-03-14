import styles from './Works.module.scss'
import common from '../styles/common.module.scss'
import Image from 'next/image'
import { worksData } from './WorksData'

function Works() {
    return (
        <div className={`${styles.works} ${common.section}`} id="works">
            <div className={common.sec__container}>
                <h2 className={common.sec__title}>WORKS</h2>
                <div className={`${styles.content} ${common.section__content}`}>
                    {worksData.map((work, index) => (
                        <div className={styles.content__item} key={index}>
                            <div className={styles.content__item__image__container}>
                                <Image className={styles.content__item__image} src={work.image} alt={work.title} width={1000} height={1000} />
                            </div>
                            <div className={styles.content__item__inner}>
                                <h3 className={styles.content__item__type}>{work.type}</h3>
                                <h3 className={styles.content__item__title}>{work.title}</h3>
                                <p className={styles.content__item__skills}>{work.skills.join(' / ')}</p>
                                <p className={styles.content__item__link}>URL: <a href={work.url} target="_blank" rel="noopener noreferrer">{work.url}</a></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Works