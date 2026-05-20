import { useEffect, useState } from 'react';
import styles from './Mv.module.scss'
import Image from "next/image";

function Mv() {

    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);
    const [radius, setRadius] = useState(0);
    const [opacity, setOpacity] = useState(1);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = 500;
            const progress = Math.min(scrollY / maxScroll, 1);
            const newWidth = 100 - (50 * progress);
            const newHeight = 100 - (50 * progress);
            const newRadius = 100 * progress;
            const opacity = 1 - progress;
            setOpacity(opacity);
            setWidth(newWidth);
            setHeight(newHeight);
            setRadius(newRadius);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.mv}>
            <div
                className={styles.bg__wrap}
                style={{
                    width: `${width}dvw`,
                    height: `${height}dvh`,
                    borderRadius: `${radius}vw`,
                    opacity,
                }}
            >
                <Image
                    className={styles.bg__image}
                    src="/bg.jpg"
                    alt=""
                    fill
                    sizes="100vw"
                    priority
                />
            </div>
            <div className={styles.mv__container} style={{ opacity: opacity }}>
                <h2 className={styles.mv__title}>
                    SEKIMITSU<br />
                    MASAKI
                </h2>
                <p className={styles.mv__subtitle}>WEB DEVELOPER</p>
            </div>
        </div>
    )
}

export default Mv