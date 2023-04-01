import React from "react";
import styles from "./SobreMim.module.css";
import PostModelo from "components/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim.jpg";
export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo={"Sobre mim"}>
      <h3 className={styles.subtitulo}>Olá sou Marcos</h3>
      <img src={fotoSobreMim} alt="" className={styles.fotoSobreMim} />
      <p className={styles.paragrafo}>
        Lorem ipsum phasellus vel aliquet ipsum etiam fusce nisi gravida, litora
        amet luctus auctor et fames ullamcorper senectus cursus senectus, donec
        quis sodales aptent imperdiet adipiscing a nullam. bibendum congue odio
        dui ipsum ullamcorper tortor ante duis justo sociosqu orci vulputate
        ante, potenti praesent quam commodo at torquent nibh phasellus vitae
        nisl tincidunt. interdum cubilia ipsum curabitur elit suspendisse rutrum
        donec tempor ornare, etiam nisl lacinia lobortis netus cubilia aliquam
        luctus. blandit auctor ultrices senectus pretium sem praesent lectus
        maecenas, porttitor tempus erat cursus porta fermentum diam suscipit,
        aptent sem metus nulla quam ullamcorper nibh.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum phasellus vel aliquet ipsum etiam fusce nisi gravida, litora
        amet luctus auctor et fames ullamcorper senectus cursus senectus, donec
        quis sodales aptent imperdiet adipiscing a nullam. bibendum congue odio
        dui ipsum ullamcorper tortor ante duis justo sociosqu orci vulputate
        ante, potenti praesent quam commodo at torquent nibh phasellus vitae
        nisl tincidunt. interdum cubilia ipsum curabitur elit suspendisse rutrum
        donec tempor ornare, etiam nisl lacinia lobortis netus cubilia aliquam
        luctus. blandit auctor ultrices senectus pretium sem praesent lectus
        maecenas, porttitor tempus erat cursus porta fermentum diam suscipit,
        aptent sem metus nulla quam ullamcorper nibh.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum phasellus vel aliquet ipsum etiam fusce nisi gravida, litora
        amet luctus auctor et fames ullamcorper senectus cursus senectus, donec
        quis sodales aptent imperdiet adipiscing a nullam. bibendum congue odio
        dui ipsum ullamcorper tortor ante duis justo sociosqu orci vulputate
        ante, potenti praesent quam commodo at torquent nibh phasellus vitae
        nisl tincidunt. interdum cubilia ipsum curabitur elit suspendisse rutrum
        donec tempor ornare, etiam nisl lacinia lobortis netus cubilia aliquam
        luctus. blandit auctor ultrices senectus pretium sem praesent lectus
        maecenas, porttitor tempus erat cursus porta fermentum diam suscipit,
        aptent sem metus nulla quam ullamcorper nibh.
      </p>
    </PostModelo>
  );
}
