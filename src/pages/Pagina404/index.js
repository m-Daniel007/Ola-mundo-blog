import styles from "./Pagina404.module.css";
import React from "react";
import erro404 from "assets/erro_404.png";
import BotaoPrincipal from "components/BotaPrincipal";
import { useNavigate } from "react-router-dom";

export default function Pagina404() {
  const navegar = useNavigate()

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Opss, página não encontrada.</h1>
        <p className={styles.paragrafo}>
          Tem certeza que era isso que estava procurando?
        </p>
        <p className={styles.paragrafo}>
          Aguarde um instante ou recarregue a página.
        </p>
        <div className={styles.botaoContainer}
          onClick={()=>navegar(-1)}
        >
         <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
        </div>
        <img className={styles.imagemCachorro} src={erro404} alt="" />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
}
