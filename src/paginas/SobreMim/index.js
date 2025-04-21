import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="About Me">

      <img
        src={fotoSobreMim}
        alt="Foto da Danielle Palmeira sorrindo"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>Ciao, sono Danielle — designer e sviluppatrice web con radici brasiliane e spirito nomade.</p>

      <p className={styles.paragrafo}>Con oltre 20 anni di esperienza, creo interfacce semplici e funzionali, dal concept alla prototipazione fino allo sviluppo front-end.</p>
                <p className={styles.paragrafo}>Uso strumenti come Figma e test di usabilità per progettare esperienze che rispondano ai bisogni delle persone e ai requisiti dei brand.</p>

      <p className={styles.paragrafo}>Negli anni, il mio percorso mi ha portata dall'Irlanda all'Italia, intrecciando esperienze, culture e nuovi modi di pensare, vivere e creare. Questo background internazionale è diventato parte integrante del mio modo di lavorare: aperto, adattivo, curioso.</p>

      <p className={styles.paragrafo}>Il mio approccio al design è guidato da una visione profondamente umana della tecnologia. Credo che un buon progetto non debba solo funzionare, ma anche comunicare, emozionare, generare connessioni reali. Per questo ogni interfaccia che creo è pensata per essere chiara, utile e significativa.</p>

      <p className={styles.paragrafo}>Quando non sono davanti a uno schermo, mi trovi spesso con un libro in mano, tra un corso di cucina e uno di UX design — oppure a ballare per ricaricare le energie. Amo “mettere le mani in pasta”, anche in senso letterale: collaboro ogni tanto con amici del settore gastronomico, dove design e gusto si incontrano in modi sorprendenti.</p>

      <p className={styles.paragrafo}>La natura è il mio equilibrio: dai sentieri di montagna alla sabbia sotto i piedi, passando per i parchi cittadini. È lì che le idee prendono forma, lontano dal digitale. E mentre lavoro, leggo o creo, c'è sempre Mia accanto a me — la mia gatta osservatrice, silenziosa e fedele, magari durante l'ennesimo episodio di una serie coreana.</p>

      <p className={styles.paragrafo}>Se vuoi conoscermi meglio o collaborare,  <a href="mailto:danny.palmeira.ux@gmail.com">scrivimi!</a></p>
    </PostModelo>
  );
}
