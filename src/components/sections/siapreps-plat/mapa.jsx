import React from "react";
import Reveal from "../../common/Reveal";
import mapaSiapreps from "../../../imgs/siapreps.svg";
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
    texto: "Veja onde o pescado se concentra, direto na carta do oceano.",
    icone: (
      <svg {...svgProps}>
        <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0 1 18 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    texto: "Identifique as áreas com espécies protegidas e planeje para evitá-las.",
    icone: (
      <svg {...svgProps}>
        <path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    texto: "Trace a rota mais curta e econômica até o cardume certo.",
    icone: (
      <svg {...svgProps}>
        <circle cx="6" cy="19" r="2" />
        <circle cx="18" cy="5" r="2" />
        <path d="M8 19h6a4 4 0 0 0 0-8H10a4 4 0 0 1 0-8h6" />
      </svg>
    ),
  },
];

export default function SectionMapaSiapreps() {
  return (
    <section className="plat_mapa">
      <img
        className="plat_mapa_fundo"
        src={mapaSiapreps}
        alt="Mapa de satélite do SIAPREPS com a localização do pescado"
      />

      <div className="plat_wrap">
        <Reveal className="plat_mapa_painel plat_mapa_painel--full">
          <p className="plat_rotulo">O que você vê no mapa</p>
          <h2 className="plat_titulo_seccao">
            O oceano lido por satélite, em tempo real
          </h2>
          <p className="plat_mapa_painel_desc">
            A leitura de satélite revela onde as condições favorecem o pescado e
            destaca as áreas sensíveis. Assim você sai do porto já sabendo para
            onde ir e o que evitar, economizando tempo e combustível e reduzindo
            capturas indesejadas.
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
