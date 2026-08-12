import React from "react";
import Reveal from "../../common/Reveal";
import "../../../style/plataforma/pagina.css";
import "../../../style/plataforma/especies.css";
import "../../../style/plataforma/camadas.css";

const svgProps = {
  width: 36,
  height: 36,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const camadas = [
  {
    nome: "Imagem de satélite",
    desc: "Visão geral do reservatório captada por satélite.",
    icone: (
      <svg {...svgProps}>
        <path d="M13 7 7 13l4 4 6-6-4-4Z" />
        <path d="m5 21 2.5-2.5" />
        <path d="M17 3l1.5 1.5a3 3 0 0 1 0 4.24L17 10" />
        <path d="m14 4 6 6" />
      </svg>
    ),
  },
  {
    nome: "Produtividade primária",
    desc: "Concentração de biomassa e algas na água.",
    icone: (
      <svg {...svgProps}>
        <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0 1 18 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    nome: "Cianobactérias",
    desc: "Presença do principal risco de floração tóxica.",
    icone: (
      <svg {...svgProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3" />
        <path d="M12 18v3" />
        <path d="m5.6 5.6 2.1 2.1" />
        <path d="m16.3 16.3 2.1 2.1" />
        <path d="M3 12h3" />
        <path d="M18 12h3" />
        <path d="m5.6 18.4 2.1-2.1" />
        <path d="m16.3 7.7 2.1-2.1" />
      </svg>
    ),
  },
  {
    nome: "Macrófitas",
    desc: "Cobertura de plantas aquáticas na superfície.",
    icone: (
      <svg {...svgProps}>
        <path d="M12 21V9" />
        <path d="M12 12c0-4 -3-6-7-6 0 4 3 6 7 6Z" />
        <path d="M12 9c0-4 3-6 7-6 0 4-3 6-7 6Z" />
      </svg>
    ),
  },
  {
    nome: "Classificação ambiental",
    desc: "Classificação geral da qualidade do reservatório.",
    icone: (
      <svg {...svgProps}>
        <path d="M12 3 5 6v5c0 4 3 6.5 7 8 4-1.5 7-4 7-8V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function SectionCamadasPhytobloom() {
  // 4 cópias (não 2): com só 5 camadas, 2 cópias não enchem a largura da tela
  // e sobra um vão em branco antes do loop fechar. Ver comentário em camadas.css.
  const trilho = [...camadas, ...camadas, ...camadas, ...camadas];

  return (
    <section className="esp">
      <div className="plat_wrap esp_cabecalho">
        <Reveal stagger>
          <p className="plat_rotulo">Camadas de análise</p>
          <h2 className="plat_titulo_seccao">
            Cada reservatório, visto por vários ângulos
          </h2>
          <p className="plat_intro">
            O PhytoBloom cruza diferentes camadas de dados de satélite para
            montar um retrato completo da saúde do seu reservatório.
          </p>
        </Reveal>
      </div>

      <div className="esp_esteira">
        <ul className="esp_trilho esp_trilho--camadas">
          {trilho.map((c, i) => (
            <li
              className="esp_item esp_item--camada"
              key={i}
              aria-hidden={i >= camadas.length}
            >
              <div className="esp_camada_icone">{c.icone}</div>
              <p className="esp_camada_nome">{c.nome}</p>
              <p className="esp_camada_desc">{c.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
