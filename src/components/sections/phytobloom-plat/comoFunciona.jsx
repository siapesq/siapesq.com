import React from "react";
import Reveal from "../../common/Reveal";
import Lightbox from "../../common/Lightbox";
import "../../../style/plataforma/pagina.css";
import passo1 from "../../../imgs/comoFuncionaReservatorio.jpeg";
import passo2 from "../../../imgs/comoFuncionaAnalise.jpeg";
import passo3 from "../../../imgs/comoFuncionaCamadas.jpeg";
import passo4 from "../../../imgs/comoFuncionaAlerta.jpeg";

const etapas = [
  {
    titulo: "Adicione o reservatório",
    img: passo1,
    texto: "Desenhe a área do reservatório no mapa para começar a monitorá-lo.",
  },
  {
    titulo: "Escolha a data da análise",
    img: passo2,
    texto:
      "Selecione o dia e veja a imagem de satélite processada daquele período.",
  },
  {
    titulo: "Veja as camadas",
    img: passo3,
    texto:
      "Ative produtividade primária, cianobactérias, macrófitas ou classificação ambiental sobre o mapa.",
  },
  {
    titulo: "Crie áreas de alerta",
    img: passo4,
    texto:
      "Marque os pontos críticos e receba um aviso automático quando o limite for ultrapassado.",
  },
];

export default function SectionComoFuncionaPhytobloom() {
  return (
    <section className="plat_fluxo plat_fluxo--telas">
      <div className="plat_wrap">
        <Reveal stagger>
          <p className="plat_rotulo">Como funciona</p>
          <h2 className="plat_titulo_seccao">
            Do reservatório ao alerta, em quatro passos
          </h2>
          <p className="plat_intro">
            O caminho é direto: você cadastra o reservatório, escolhe a data
            da análise e o mapa de calor mostra onde agir antes que vire
            crise.
          </p>

          <div className="plat_fluxo_grid">
            {etapas.map((etapa, indice) => (
              <article className="plat_fluxo_item" key={etapa.titulo}>
                <Lightbox src={etapa.img} alt={`Tela do PhytoBloom: ${etapa.titulo}`}>
                  <div className="plat_fluxo_shot">
                    <img
                      src={etapa.img}
                      alt={`Tela do PhytoBloom: ${etapa.titulo}`}
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
