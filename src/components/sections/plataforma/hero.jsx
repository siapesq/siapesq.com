import React from "react";
import Header from "../../layouts/header";
import wordmark from "../../../imgs/NomeSiapesq.svg";
import "../../../style/plataforma/pagina.css";

// TODO: substituir pela URL real do sistema da plataforma SIAPESQ
export const URL_PLATAFORMA = "#";

export default function SectionHero() {
  return (
    <section className="plat_hero">
      <div className="plat_hero_foto" aria-hidden="true" />
      <Header />

      <div className="plat_hero_conteudo">
        <div className="plat_hero_marca">
          <img src={wordmark} alt="SIAPESQ" />
        </div>

        <h1 className="plat_hero_titulo">
          Monitoramento inteligente de espécies
          <span>em tempo real</span>
        </h1>

        <p className="plat_hero_desc">
          Visualize dados em mapas interativos, acompanhe estatísticas e analise
          cenários futuros com precisão científica.
        </p>

        <div>
          <a href={URL_PLATAFORMA} className="plat_btn plat_btn_claro">
            Acessar Plataforma
          </a>
        </div>
      </div>
    </section>
  );
}
