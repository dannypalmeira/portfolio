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

      <p className={styles.paragrafo}>Ciao, sono Danielle — una designer e sviluppatrice web con radici brasiliane e spirito nomade. La mia carriera e la mia vita mi hanno portata a esplorare il mondo, dall’Irlanda all’Italia, coltivando un profondo amore per le culture, l’adattabilità e i nuovi modi di pensare, vivere e creare.</p>

 <p className={styles.paragrafo}Il mio approccio al design nasce da una curiosità instancabile e da una visione umana della tecnologia. Amo progettare soluzioni che siano funzionali, ma anche capaci di raccontare storie e generare connessioni autentiche.</p>

 <p className={styles.paragrafo}>Fuori dallo schermo, mi troverai spesso con un libro in mano, tra un corso di cucina e uno di UX design, oppure a ballare per ricaricare le energie. Mi piace mettere le mani in pasta – a volte anche in senso letterale – e collaboro ogni tanto con amici nel settore gastronomico, dove design e gusto si incontrano in modo sorprendente.</p>     

 <p className={styles.paragrafo}>La natura è il mio rifugio creativo: che siano i sentieri di montagna, la sabbia sotto i piedi o semplicemente un parco cittadino, mi aiuta a ritrovare equilibrio e ispirazione. E mentre lavoro o leggo, c’è sempre Mia – la mia gatta osservatrice e compagna fedele – a tenermi compagnia, magari durante l’ennesimo episodio di una serie coreana.</p>
    </PostModelo>
  );
}
