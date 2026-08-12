import React from "react";
import Reveal from "../../common/Reveal";
import "../../../style/plataforma/pagina.css";

const svgProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const recursos = [
  {
    titulo: "Mapa de calor por satélite",
    texto:
      "Camadas de produtividade primária, cianobactérias, macrófitas e classificação ambiental sobre a imagem de satélite do seu reservatório.",
    icone: (
      <svg {...svgProps}>
        <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0 1 18 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    titulo: "Alertas por área",
    texto:
      "Marque áreas de alerta dentro do reservatório e receba um aviso assim que a concentração ultrapassar o limite seguro.",
    icone: (
      <svg {...svgProps}>
        <path d="M12 3v6" />
        <path d="M12 21a8 8 0 0 0 8-8V9a8 8 0 1 0-16 0v4a8 8 0 0 0 8 8Z" />
        <path d="M9 21h6" />
      </svg>
    ),
  },
  {
    titulo: "Análises e relatórios",
    texto:
      "Escolha a data da análise, acompanhe a evolução do reservatório ao longo do tempo e baixe o relatório completo.",
    icone: (
      <svg {...svgProps}>
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
];

export default function SectionRecursosPhytobloom() {
  return (
    <section className="plat_recursos">
      <div className="plat_wrap">
        <Reveal stagger>
          <p className="plat_rotulo">Principais recursos</p>
          <h2 className="plat_titulo_seccao">
            Tudo para antecipar crises ambientais
          </h2>
          <p className="plat_intro">
            O PhytoBloom junta, num só app, a leitura do reservatório por
            satélite, o alerta automático por área e o histórico completo de
            cada monitoramento.
          </p>

          <div className="plat_recursos_grid">
            {recursos.map((recurso) => (
              <article className="plat_recursos_item" key={recurso.titulo}>
                <div className="plat_recursos_icone">{recurso.icone}</div>
                <div>
                  <h3>{recurso.titulo}</h3>
                  <p>{recurso.texto}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
