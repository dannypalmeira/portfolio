import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    UX/UI Designer con oltre due decenni di viaggio creativo nella progettazione digitale e grafica. Trasformo la complessità in semplicità attraverso esperienze utente intuitive che catturano e mantengono l'attenzione. La mia passione? Dare vita alle idee mediante ricerca approfondita, prototipazione strategica e design iterativo. Navigo tra Figma, test di usabilità e sviluppo front-end per costruire soluzioni che non solo rispondono alle esigenze degli utenti, ma amplificano l'engagement e guidano concretamente i risultati aziendali. Ogni pixel ha uno scopo, ogni interazione racconta una storia.
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt="Foto Danielle Palmeira"
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Antônio Evaldo sorrindo"
                />
            </div>
        </div>
    )
}
