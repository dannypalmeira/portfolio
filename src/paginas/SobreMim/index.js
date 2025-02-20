import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>Ola, eu sou a Danielle Palmeira!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto da Danielle Palmeira sorrindo"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>Ciao! Sono Danielle, brasiliana, designer e sviluppatrice web, ma anche una persona curiosa e sempre in movimento. Ho vissuto e lavorato in diversi posti, tra cui l’Irlanda e l’Italia, e mi piace immergermi nelle culture, adattarmi ai nuovi ambienti e scoprire modi diversi di vivere e lavorare.</p>

 <p className={styles.paragrafo}>Amo ballare, leggere e frequentare corsi per imparare sempre qualcosa di nuovo – che sia design, tecnologia o anche cucina! Parlare di cucina mi ricorda che ogni tanto do una mano a un amico nel settore gastronomico, un’esperienza che unisce la mia passione per il cibo e la voglia di sperimentare.</p>
        <p className={styles.paragrafo}>Quando posso, scappo nella natura: adoro camminare tra le montagne, lungo la spiaggia o semplicemente in un bel parco. Preferisco le mezze stagioni, quando l’aria è fresca ma non troppo fredda, perfetta per godersi il tempo all’aperto.</p>

 <p className={styles.paragrafo}>La mia compagna di avventure è Mia, la mia gatta, che ama stare seduta accanto a me mentre leggo libri di ogni genere, dai gialli alla sociologia o neuroscienze. È la mia piccola spettatrice anche quando mi immergo nelle mie serie TV coreane preferite! 😊</p>
    </PostModelo>
  );
}
