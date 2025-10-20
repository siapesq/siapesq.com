//import 'animate.css';
import React from "react";
// import cardume from "../../imgs/cardume.png";
import siaprepsNome from "../../imgs/NomeSiapreps.svg";
import siapresqPc from "../../imgs/siapresqPc.svg";
import "../../style/siapreps/siapreps_Header/Header.css";
import Header from "../layouts/header";

export default function SectionHeader() {
  return (
    <div className="siaprepsHeaderContainer">
      <Header logoCor={false} />
      <section className="siaprepsContainer">
        <div className="content">
          <div className="title">
            <img
              src={siaprepsNome}
              alt="Logotipo da siapreps com fonte estilizada"
            />
          </div>
          <div className="text">
            <p>
              A plataforma SIAPREPS disponibiliza mapas de localização dos
              cardumes, o que possibilita uma pesca mais rápida, eficiente e
              sustentável!
            </p>
          </div>
          <div>
            <button>Comece agora</button>
          </div>
        </div>
        <div className="siaprepsPc">
          <img
            src={siapresqPc}
            alt="Imagem de um computador portátil executando a aplicação do siapreps"
          />
        </div>
      </section>
    </div>
  );
}
