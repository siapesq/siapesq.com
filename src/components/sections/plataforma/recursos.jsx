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
    titulo: "Análise inteligente",
    texto:
      "Acompanhe estatísticas, tendências e a evolução das espécies no tempo.",
    icone: (
      <svg {...svgProps}>
        <path d="M3 3v18h18" />
        <path d="M7 16v-4" />
        <path d="M12 16V8" />
        <path d="M17 16v-6" />
      </svg>
    ),
  },
  {
    titulo: "Catálogo de espécies",
    texto:
      "Navegue por categorias de espécies e acesse fichas científicas detalhadas.",
    icone: (
      <svg {...svgProps}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8" />
        <path d="M8 12h8" />
        <path d="M8 16h5" />
      </svg>
    ),
  },
  {
    titulo: "Exportação de dados",
    texto: "Baixe predições e relatórios prontos para análise e pesquisa.",
    icone: (
      <svg {...svgProps}>
        <path d="M12 3v12" />
        <path d="m7 11 5 5 5-5" />
        <path d="M4 20h16" />
      </svg>
    ),
  },
];

export default function SectionRecursos() {
  return (
    <section className="plat_recursos">
      <div className="plat_wrap">
        <Reveal stagger>
          <p className="plat_rotulo">Principais recursos</p>
          <h2 className="plat_titulo_seccao">
            Tudo o que você precisa para monitorar espécies
          </h2>
          <p className="plat_intro">
            A plataforma reúne, num só lugar, a consulta às espécies, a leitura
            geográfica da sua distribuição e a exportação dos dados para o seu
            próprio trabalho.
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
