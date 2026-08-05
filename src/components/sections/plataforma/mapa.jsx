import React from "react";
import Reveal from "../../common/Reveal";
import mapaPlataforma from "../../../imgs/mapaReal.jpg";
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
      "Veja onde cada espécie se concentra, num mapa de calor fácil de entender.",
    icone: (
      <svg {...svgProps}>
        <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0 1 18 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    texto: "Com base em dados científicos reais de observação das espécies.",
    icone: (
      <svg {...svgProps}>
        <path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    texto:
      "Compare a distribuição de hoje com as projeções para 2050 e 2100.",
    icone: (
      <svg {...svgProps}>
        <path d="m3 17 6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </svg>
    ),
  },
];

export default function SectionMapa() {
  return (
    <section className="plat_mapa">
      <img
        className="plat_mapa_fundo"
        src={mapaPlataforma}
        alt="Mapa de distribuição de espécies da plataforma SIAPESQ"
      />

      <div className="plat_wrap">
        <Reveal className="plat_mapa_painel plat_mapa_painel--full">
          <p className="plat_rotulo">O que você vê no mapa</p>
          <h2 className="plat_titulo_seccao">
            A distribuição das espécies, visível de relance
          </h2>
          <p className="plat_mapa_painel_desc">
            As cores do mapa mostram a intensidade da presença da espécie:
            quanto mais quente a cor, maior a concentração registrada naquela
            região. Assim dá para identificar rapidamente onde ela vive hoje e
            como esse cenário tende a mudar nas próximas décadas.
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
