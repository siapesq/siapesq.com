import React from "react";
import phytobloom from "../../imgs/phytonbloom.svg";
import texto from "../../imgs/textoverde.svg"
import '../../style/phytobloom/plataforma.css';


export default function SectionPlataforma() {


  return (
    <>
      <section className="plataforma">
        <article >
          <img id="phytobloom" src={phytobloom} alt="Imagem de platforma phytonbloom" />
          {/* <h1 id="verde">A plataforma PHYTOBLOOM VISION proporciona mapas detalhados e em tempo real, permitindo o monitoramento contínuo e a previsão da proliferação de plantas aquáticas. Nossos mapas facilitam a tomada de decisões e o planejamento de intervenções de maneira eficiente.</h1> */}
          <img src={texto} alt="texto" id="textoverde" />

          <div className="textoverde">
            A plataforma PHYTOBLOOM VISION proporciona mapas detalhados e em tempo real, permitindo o monitoramento contínuo das condições ambientais e a previsão da proliferação de plantas aquáticas. Nossos mapas facilitam a tomada de decisões e o planejamento de intervenções de maneira eficiente.
          </div>
          <button className="botaoPhytobloom"> Começar Agora</button>
          {/* <div>
            <p>A plataforma SIAPREPS disponibiliza aos usuários mapas que permitem localizar e monitorar os cardumes em tempo real, mostrando as áreas com maior produtividade para diferentes espécies de pescado.</p>
          </div> */}
        </article>
      </section>
    </>
  )
}
