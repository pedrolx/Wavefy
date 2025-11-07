import styles from "./Testimonials.module.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import testimonials from "../data/testimonials.js";

function Testimonials() {
    return (
        <section className={styles.container}>
            <div className={styles.title_div}>
                <h2>O que estão dizendo sobre o Wavefy</h2>
            </div>
            <Parallax
                pages={testimonials.length}
                className={styles.layer_container}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "5rem 0",
                }}
                config={{ tension: 200, friction: 40 }}
            >

                {testimonials.map((testimonial, index) => (
                    <ParallaxLayer
                        offset={index}
                        speed={0.5}
                        key={index}
                        className={styles.layer}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div className={styles.card} style={{
                            marginTop: "-15vh"
                        }}>
                            <h3>{testimonial.name}</h3>
                            <h4>{testimonial.nickname}</h4>
                            <p>{testimonial.testimonial}</p>
                        </div>
                    </ParallaxLayer>
                ))}
            </Parallax>
        </section>

    )
}

export default Testimonials;