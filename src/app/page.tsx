'use client'

import styles from "./page.module.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Mv from "./Mv/Mv";
import Works from "./Works/Works";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";

export default function Home() {

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <Mv />
                <Works />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
