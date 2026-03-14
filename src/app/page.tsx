'use client'

import styles from "./page.module.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useEffect, useState } from "react";
import Mv from "./Mv/Mv";
import About from "./About/About";
import Works from "./Works/Works";
import Skills from "./Skills/Skills";


export default function Home() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [opacity, setOpacity] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = 1000;
            const progress = Math.min(scrollY / maxScroll, 1);
            const opacity = progress;
            setOpacity(opacity);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <Mv />
                <About />
                <Skills />
                <Works />
                <span className={styles.bg__line} style={{ opacity: opacity }}></span>
            </main>
            <Footer />
        </div>
    );
}
