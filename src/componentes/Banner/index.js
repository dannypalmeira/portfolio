import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Ciao, sono Danielle</h1>
                <p className={styles.paragrafo}>UX/UI Designer con una mente curiosa e un approccio umano al digitale.</p>
                <p className={styles.paragrafo}>Con oltre 20 anni di esperienza, creo interfacce semplici e funzionali, dal concept alla prototipazione fino allo sviluppo front-end.</p>
                <p className={styles.paragrafo}>Uso strumenti come Figma e test di usabilità per progettare esperienze che rispondano ai bisogni delle persone e ai requisiti dei brand.</p>
                <p className={styles.paragrafo}>Credo in un design che risolve problemi, racconta storie e guida risultati.</p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt="ico circle"
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto Danielle Palmeira"
                />
            </div>
        </div>
    )
}
