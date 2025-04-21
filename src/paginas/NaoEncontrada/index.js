import BotaoPrincipal from "componentes/BotaoPrincipal";
import styles from "./NaoEncontrada.module.css";
import erro404 from "assets/erro_404.png";
import { useNavigate } from "react-router-dom";

export default function NaoEncontrada() {
  const navegar = useNavigate();

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>

        <h1 className={styles.titulo}>Oops! Pagina non trovata.</h1>

        <p className={styles.paragrafo}>
          Sei sicuro che sia questo che stavi cercando?
        </p>

        <p className={styles.paragrafo}>
          Attendi qualche istante e ricarica la pagina, oppura torna alla pagina principale.
        </p>

        <div className={styles.botaoContainer} onClick={() => navegar(-1)}>
          <BotaoPrincipal tamanho="lg">Torna indietro</BotaoPrincipal>
        </div>

        <img
          className={styles.imagemCachorro}
          src={erro404}
          alt="Cachorro de óculos e vestido como humano"
        />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
}
