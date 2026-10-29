import React from "react";
import Reveal from "../../../components/common/Reveal";
import Lightbox from "../../../components/common/Lightbox";
import "../../../style/plataforma/pagina.css";
import passo1 from "../../../imgs/tutorial-siapreps/login.png";
import passo2 from "../../../imgs/tutorial-siapreps/home.png";
import passo3 from "../../../imgs/tutorial-siapreps/map-analise.png";
import passo4 from "../../../imgs/tutorial-siapreps/map-lance.png";

const etapas = [
  {
    titulo: "Baixe o software",
    img: passo1,
    texto:
      "Instale o SIAPREPS no seu computador Windows em poucos minutos, sem complicação.",
  },
  {
    titulo: "Configure a pescaria",
    img: passo2,
    texto:
      "Informe a embarcação, o porto de saída, o tipo de pesca e a espécie-alvo do lance.",
  },
  {
    titulo: "Veja os cardumes no mapa",
    img: passo3,
    texto:
      "O mapa de satélite mostra onde o pescado se concentra e as áreas que você deve evitar.",
  },
  {
    titulo: "Pesque e registre o lance",
    img: passo4,
    texto:
      "Vá direto ao ponto certo e registre suas capturas e descartes direto no aplicativo.",
  },
];

export default function SectionComoFuncionaSiapreps() {
  return (
    <section className="plat_fluxo plat_fluxo--telas">
      <div className="plat_wrap">
        <Reveal stagger>
          <p className="plat_rotulo">Como funciona</p>
          <h2 className="plat_titulo_seccao">
            Do download ao lance, em quatro passos
          </h2>
          <p className="plat_intro">
            O caminho é direto: você instala o app, configura a pescaria e o
            mapa de satélite mostra o rumo certo e as áreas a evitar.
          </p>

          <div className="plat_fluxo_grid">
            {etapas.map((etapa, indice) => (
              <article className="plat_fluxo_item" key={etapa.titulo}>
                <Lightbox src={etapa.img} alt={`Tela do SIAPREPS: ${etapa.titulo}`}>
                  <div className="plat_fluxo_shot">
                    <img
                      src={etapa.img}
                      alt={`Tela do SIAPREPS: ${etapa.titulo}`}
                      loading="lazy"
                    />
                    <span className="plat_fluxo_num">{indice + 1}</span>
                  </div>
                </Lightbox>
                <h3>{etapa.titulo}</h3>
                <p>{etapa.texto}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
