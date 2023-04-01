import styles from "./Banner.module.css";
import React from "react";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from 'assets/foto-capa.jpg'
export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá mundo!</h1>
        <p className={styles.parafrafo}>
          Boas vindas ao meu espaço, sou
          <b>
            <i> Marcos Santos </i>
          </b>
          desenvolvedor
          <b>
            <i>Front End</i>
          </b>
          .
        </p>
      </div>

      <div className={styles.imagens}>
        <img  className={styles.circuloColorido} src={circuloColorido} alt="" aria-hidden={true} />
        <img className={styles.minhaFoto} src={minhaFoto} alt=""/>
      </div>
    </div>
  );
}
