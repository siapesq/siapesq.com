import React from "react";
import Reveal from "../../common/Reveal";
import mapaPhytobloom from "../../../imgs/phytobloom.webp";
import "../../../style/plataforma/pagina.css";

const svgProps = {
  width: 17,
  height: 17,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const capacidades = [
  {
    texto:
      "Veja a concentração de algas e cianobactérias por área do reservatório, num mapa de calor fácil de entender.",
    icone: (
      <svg {...svgProps}>
        <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0 1 18 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    texto:
      "Receba um alerta automático assim que algum ponto ultrapassar o limite seguro.",
    icone: (
      <svg {...svgProps}>
        <path d="M12 3v6" />
        <path d="M12 21a8 8 0 0 0 8-8V9a8 8 0 1 0-16 0v4a8 8 0 0 0 8 8Z" />
        <path d="M9 21h6" />
      </svg>
    ),
  },
  {
    texto: "Compare a análise de hoje com o histórico de monitoramentos anteriores.",
    icone: (
      <svg {...svgProps}>
        <path d="m3 17 6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </svg>
    ),
  },
];

export default function SectionMapaPhytobloom() {
  return (
    <section className="plat_mapa">
      <img
        className="plat_mapa_fundo"
        src={mapaPhytobloom}
        alt="Tela do PhytoBloom analisando um reservatório, com o mapa de calor de produtividade primária"
      />

      <div className="plat_wrap">
        <Reveal className="plat_mapa_painel plat_mapa_painel--full">
          <p className="plat_rotulo">O que você vê no mapa</p>
          <h2 className="plat_titulo_seccao">
            O reservatório, monitorado ponto a ponto
          </h2>
          <p className="plat_mapa_painel_desc">
            As cores do mapa mostram a concentração de algas em cada parte do
            reservatório: quanto mais quente a cor, maior a concentração
            detectada pelas imagens de satélite daquele trecho.
          </p>

          <ul>
            {capacidades.map((capacidade) => (
              <li key={capacidade.texto}>
                <span className="plat_mapa_bolinha">{capacidade.icone}</span>
                <span>{capacidade.texto}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
