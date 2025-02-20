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
                    UX/UI Designer con oltre 20 anni di esperienza nella progettazione e sviluppo web e grafico. Appassionato nel creare esperienze utente intuitive e coinvolgenti attraverso ricerca, prototipazione e design iterativo. Specializzato in Figma, test di usabilità e sviluppo front-end, trasformo idee in soluzioni efficaci che ottimizzano l'engagement e supportano gli obiettivi aziendali. :)
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
