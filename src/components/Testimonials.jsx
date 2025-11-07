import styles from "./Testimonials.module.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import testimonials from "../data/testimonials.js";

function Testimonials() {
    return (
        <section className={styles.container}>
            <h2>O que estão dizendo sobre o Wavefy</h2>
            <Parallax
                pages={testimonials.length}
                className={styles.layer_container}
                style={{
                    display: "flex", justifyContent:
                        "center", left: "40%", top: "10%", padding: "5rem"
                }}>
                {testimonials.map((testimonial, index) => (
                    <ParallaxLayer offset={index} speed={0.8} key={index}
                        className={styles.layer} style={{ width: "20rem", height: "20rem" }}>

                        <div className={styles.card}>
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