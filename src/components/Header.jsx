import styles from "./Header.module.css"

function Header(){
    return(
    <ul className={styles.container}>
        <li className={styles.logo}>
            <p>WaveFy</p>
        </li>
        <li>
            <p>“Sinta a música. Viva o som.”</p>
        </li>
        <li className={styles.buttonContainer}>
            <button className={styles.button}>Baixar Agora</button>
        </li>
    </ul>
    )
}

export default Header;