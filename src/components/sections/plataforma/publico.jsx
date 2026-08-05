import React from "react";
import Reveal from "../../common/Reveal";
import "../../../style/plataforma/pagina.css";

const svgProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const perfis = [
  {
    titulo: "Pesquisadores",
    texto:
      "Dados científicos organizados para embasar estudos e publicações.",
    icone: (
      <svg {...svgProps}>
        <path d="M12 4 2 9l10 5 10-5-10-5Z" />
        <path d="M6 11.5V16c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-4.5" />
        <path d="M22 9v4" />
      </svg>
    ),
  },
  {
    titulo: "Gestão pesqueira",
    texto:
      "Informação geográfica para apoiar decisões de manejo e produção.",
    icone: (
      <svg {...svgProps}>
        <path d="M3 12c2-3 5-4.5 8.5-4.5 3 0 5.5 1.3 7 3.5-1.5 2.2-4 3.5-7 3.5C8 14.5 5 13 3 12Z" />
        <path d="M18.5 10.5 21 9v6l-2.5-1.5" />
        <path d="M7 11h.01" />
      </svg>
    ),
  },
  {
    titulo: "Órgãos ambientais",
    texto:
      "Suporte técnico para fiscalização, licenciamento e políticas públicas.",
    icone: (
      <svg {...svgProps}>
        <path d="M12 3 5 6v5c0 4 3 6.5 7 8 4-1.5 7-4 7-8V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    titulo: "Setores produtivos (ESG)",
    texto:
      "Evidência ambiental para relatórios de sustentabilidade e adequação ESG.",
    icone: (
      <svg {...svgProps}>
        <path d="M4 20C3 13 8 5 20 4c1 10-4 16-13 16-1 0-2-.2-3-.5" />
        <path d="M4 20c2-4.5 5.5-7.5 10-9.5" />
      </svg>
    ),
  },
];

export default function SectionPublico() {
  return (
    <section className="plat_publico">
      <div className="plat_wrap">
        <Reveal stagger>
          <p className="plat_rotulo">Para quem é</p>
          <h2 className="plat_titulo_seccao">
            Feita para quem decide com base em dados
          </h2>
          <p className="plat_intro">
            A mesma informação geoespacial atende perfis diferentes, da pesquisa
            acadêmica à adequação ambiental de quem produz.
          </p>

          <div className="plat_publico_grid">
          {perfis.map((perfil) => (
            <article className="plat_publico_card" key={perfil.titulo}>
              <div className="plat_publico_icone">{perfil.icone}</div>
              <h3>{perfil.titulo}</h3>
              <p>{perfil.texto}</p>
            </article>
          ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
