import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from "./Features.module.css";
import playlists from "../assets/playlists.png";
import ia from "../assets/ia.png";
import semAnuncio from "../assets/sem_anuncio.png";
import { useState, useRef, useEffect } from 'react';

function Features() {
    const [number, setNumber] = useState(0);
    const parallaxRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setNumber((prev) => {
                const next = (prev + 1) % 3;
                if (parallaxRef.current && typeof parallaxRef.current.scrollTo === "function") {
                    parallaxRef.current.scrollTo(next);
                }
                return next;
            });
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const alignCenter = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    const baseStyleContainer = {
        width: "100%",
        height: "100%",
        overflow: "hidden",
    };

    return (
        <section className={styles.container}>
            <Parallax
                ref={parallaxRef}
                pages={3}
                horizontal
                className={styles.layer_container}
                style={baseStyleContainer}
            >
                <ParallaxLayer offset={0} speed={0.8} style={alignCenter}>
                    <div className={styles.slide}>
                        <img src={playlists} alt="Playlists Inteligentes" />
                        <h2>Playlists Inteligentes</h2>
                        <p>Descubra músicas feitas sob medida para o seu humor.</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.8} style={alignCenter}>
                    <div className={styles.slide}>
                        <img src={ia} alt="IA de Recomendação" />
                        <h2>IA de Recomendação</h2>
                        <p>Deixe nossa IA surpreender você com novas descobertas.</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={0.8} style={alignCenter}>
                    <div className={styles.slide}>
                        <img src={semAnuncio} alt="Sem anúncios" />
                        <h2>Sem anúncios</h2>
                        <p>Curta suas músicas sem interrupções, do começo ao fim.</p>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </section>
    );
}

export default Features;
