import React from "react";
import texto from "../../imgs/textoverde.svg"
import '../../style/phytobloom/plataforma.css';


export default function SectionPlataforma() {


  return (
    <>
      <section className="plataforma">
        <article >
          <img id="phytobloom" src="phytonbloom.png" alt="magem de platforma phytonbloom" />
          {/* modelo antigo
           <img id="phytobloom" src={phytobloom} alt="Imagem de platforma phytonbloom" /> */}
          {/* <h1 id="verde">A plataforma PHYTOBLOOM VISION proporciona mapas detalhados e em tempo real, permitindo o monitoramento contínuo e a previsão da proliferação de plantas aquáticas. Nossos mapas facilitam a tomada de decisões e o planejamento de intervenções de maneira eficiente.</h1> */}
          <img src={texto} alt="texto" id="textoverde" />

          <div className="textoverde">
          Inteligência Artificial e Modelagem Ecológica aplicadas para monitorar a Qualidade Ambiental de Reservatórios Hídricos, Localizando e Prevendo Eventos de Desregulação como Eutrofização, Replicação de MicroAlgas e de Plantas Aquáticas
          </div>
          {/* <button className="botaoPhytobloom"> <a href="https://wa.me/555399503671" target="_blank" rel="noopener noreferrer">Começar Agora</a></button> */}
          {/* <div>
            <p>A plataforma SIAPREPS disponibiliza aos usuários mapas que permitem localizar e monitorar os cardumes em tempo real, mostrando as áreas com maior produtividade para diferentes espécies de pescado.</p>
          </div> */}
        </article>
      </section>
    </>
  )
}
