import React from "react";
import Header from "../../layouts/header";
import wordmark from "../../../imgs/NomeSiapreps.svg";
import "../../../style/plataforma/pagina.css";

export const URL_DOWNLOAD_SIAPREPS =
  "https://github.com/siapesq/siapreps-release-mirror/releases/latest";

export default function SectionHeroSiapreps() {
  return (
    <section className="plat_hero">
      <div className="plat_hero_foto" aria-hidden="true" />
      <Header />

      <div className="plat_hero_conteudo">
        <div className="plat_hero_marca">
          <img src={wordmark} alt="SIAPREPS" />
        </div>

        <h1 className="plat_hero_titulo">
          Encontre os cardumes e pesque com precisão
          <span>em tempo real</span>
        </h1>

        <p className="plat_hero_desc">
          Mapas de satélite com inteligência artificial para localizar o
          pescado, evitar espécies protegidas e reduzir custos e emissões.
        </p>

        <div>
          <a
            href={URL_DOWNLOAD_SIAPREPS}
            className="plat_btn plat_btn_claro"
            target="_blank"
            rel="noopener noreferrer"
          >
            Baixar Software
          </a>
          <p className="plat_hero_meta">Versão 1.0.21 · Windows 10 e 11</p>
        </div>
      </div>
    </section>
  );
}
