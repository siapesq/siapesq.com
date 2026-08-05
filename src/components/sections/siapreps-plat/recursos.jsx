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
    titulo: "Cardumes por satélite",
    texto:
      "Imagens de satélite com inteligência artificial apontam onde o pescado está antes de você zarpar.",
    icone: (
      <svg {...svgProps}>
        <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0 1 18 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    titulo: "Menos capturas indesejadas",
    texto:
      "Saiba onde estão as espécies protegidas e planeje seus lances para evitar a captura incidental.",
    icone: (
      <svg {...svgProps}>
        <path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    titulo: "Mais economia a bordo",
    texto:
      "Vá direto ao ponto certo: menos horas de procura, menos combustível e menos emissões.",
    icone: (
      <svg {...svgProps}>
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
];

export default function SectionRecursosSiapreps() {
  return (
    <section className="plat_recursos">
      <div className="plat_wrap">
        <Reveal stagger>
          <p className="plat_rotulo">Principais recursos</p>
          <h2 className="plat_titulo_seccao">
            Tudo para uma pesca mais certeira
          </h2>
          <p className="plat_intro">
            O SIAPREPS junta, num só app, a leitura do oceano por satélite, o
            alerta de espécies protegidas e a rota mais econômica até o pescado.
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
