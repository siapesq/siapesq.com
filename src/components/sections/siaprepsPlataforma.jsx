import React from "react";
import siapreps from "../../imgs/siapreps.svg";
import texto from "../../imgs/textoazul.svg"
import '../../style/siapreps/siapreps_plataforma/plataforma.css';


export default function SectionPlataforma(){

    
    return(
        <>
          <section className="plataforma">
                <article >
                <img id="plataforma" src={siapreps} alt="Imagem de platforma siapreps" />
                {/* <h1 id="azulzinha">A plataforma SIAPREPS disponibiliza aos usuários mapas que  permitem localizar  e monitorar os cardumes com maior facilidade e precisão.</h1> */}
                <img src={texto} alt="" id="textoazul" />
                {/* <button className="fundoInvinsivel2"> <a href="https://wa.me/555399503671" target="_blank" rel="noopener noreferrer">Começar Agora</a></button>  */}
                </article>
                </section>
        </>
      )
    }