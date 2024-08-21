import React from "react";
import siapreps from "../../imgs/siapreps.svg";
import '../../style/siapreps/siapreps_plataforma/plataforma.css';


export default function SectionPlataforma(){

    
    return(
        <>
          <section className="plataforma">
                <article >
                <img id="plataforma" src={siapreps} alt="Imagem de platforma siapreps" />
                <h1 id="azulzinha">A plataforma SIAPREPS disponibiliza aos usuários mapas que  permitem localizar  e monitorar os cardumes com maior facilidade e precisão.</h1>
                <button className="fundoInvinsivel"> Começar Agora</button> 
                </article>
                </section>
        </>
      )
    }