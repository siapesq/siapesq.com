import React from "react";
import Header from "../../layouts/header";
import wordmark from "../../../imgs/PhytobloomNome.svg";
import "../../../style/plataforma/pagina.css";

export const URL_DOWNLOAD_PHYTOBLOOM =
  "https://github.com/siapesq/phybloom-release-mirror/releases/latest";

export default function SectionHeroPhytobloom() {
  return (
    <section className="plat_hero">
      <div className="plat_hero_foto" aria-hidden="true" />
      <Header />

      <div className="plat_hero_conteudo">
        <div className="plat_hero_marca">
          <img src={wordmark} alt="PhytoBloom" />
        </div>

        <h1 className="plat_hero_titulo">
          Monitore reservatórios e identifique riscos
          <span>antes que virem crise</span>
        </h1>

        <p className="plat_hero_desc">
          Identifique desregulações ambientais e evite eventos críticos com o
          PhytoBloom Vision.
        </p>

        <div>
          <a
            href={URL_DOWNLOAD_PHYTOBLOOM}
            className="plat_btn plat_btn_claro"
            target="_blank"
            rel="noopener noreferrer"
          >
            Baixar Software
          </a>
          <p className="plat_hero_meta">Versão 2.0.2 · Windows 10 e 11</p>
        </div>
      </div>
    </section>
  );
}
