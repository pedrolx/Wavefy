import styles from "./Footer.module.css";

function Footer() {

    return(
    <ul className={styles.container}>
        <li className={styles.logo}>
            <p>Desenvolvido por <a href="https://github.com/pedrolx">@pedrolx</a></p>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/pedro-lucas-xavier/">Linkedin</a>
        </li>
        <li className={styles.buttonContainer}>
            <p>Email: <a>pedrolucas.xs@gmail.com</a></p>
        </li>
    </ul>
    );
};

export default Footer;