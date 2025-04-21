import styles from "./Rodape.module.css";
import { ReactComponent as MarcaRegistrada } from 'assets/copyright.svg';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />
            Sviluppato da Danny Palmeira
        </footer>
    )
}
