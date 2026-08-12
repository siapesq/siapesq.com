import React from "react";
import Reveal from "../../common/Reveal";
import Lightbox from "../../common/Lightbox";
import "../../../style/plataforma/pagina.css";
import passo1 from "../../../imgs/passo1.jpg";
import passo2 from "../../../imgs/passo2.jpg";
import passo3 from "../../../imgs/passo3.jpg";
import passo4 from "../../../imgs/passo4.jpg";

const etapas = [
  {
    titulo: "Categorias",
    img: passo1,
    texto:
      "Comece escolhendo um grupo de espécies: aves, peixes, plantas, mamíferos, répteis e outros.",
  },
  {
    titulo: "Espécies",
    img: passo2,
    texto:
      "Dentro da categoria, selecione a espécie que quer acompanhar e veja sua ficha científica.",
  },
  {
    titulo: "Localização no mapa",
    img: passo3,
    texto:
      "Abra o mapa da espécie e veja onde ela se concentra no território.",
  },
  {
    titulo: "Análises",
    img: passo4,
    texto:
      "Escolha a análise: anual, mensal ou as projeções para 2050 e 2100.",
  },
];

export default function SectionComoFunciona() {
  return (
    <section className="plat_fluxo">
      <div className="plat_wrap">
        <Reveal stagger>
          <p className="plat_rotulo">Como funciona</p>
          <h2 className="plat_titulo_seccao">Quatro passos até a análise</h2>
          <p className="plat_intro">
            O caminho é sempre o mesmo, do geral ao específico: você parte de um
            grupo de espécies e chega até a projeção de distribuição daquela
            espécie no território.
          </p>

          <div className="plat_fluxo_grid">
          {etapas.map((etapa, indice) => (
            <article className="plat_fluxo_item" key={etapa.titulo}>
              <Lightbox src={etapa.img} alt={`Tela da plataforma: ${etapa.titulo}`}>
                <div className="plat_fluxo_shot">
                  <img
                    src={etapa.img}
                    alt={`Tela da plataforma: ${etapa.titulo}`}
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
