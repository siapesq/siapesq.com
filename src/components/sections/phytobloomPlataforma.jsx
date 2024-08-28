import React from "react";
import phytobloom from "../../imgs/phytonbloom.svg";
import '../../style/phytobloom/plataforma.css';


export default function SectionPlataforma(){

    
    return(
        <>
          <section className="plataforma">
                <article >
                <img id="phytobloom" src={phytobloom} alt="Imagem de platforma phytonbloom" />
                <h1 id="verde">A plataforma PHYTOBLOOM VISION proporciona mapas detalhados e em tempo real, permitindo o monitoramento contínuo e a previsão da proliferação de plantas aquáticas. Nossos mapas facilitam a tomada de decisões e o planejamento de intervenções de maneira eficiente.</h1>
                <button className="fundoInvinsivel"> Começar Agora</button> 
                </article>
                </section>
        </>
      )
    }
