import React from "react";
import Header from "../layouts/header";
import cardume from "../../imgs/cardume.png";
import siapresqPc from "../../imgs/siapresqPc.svg";
import '../../style/siapreps/siapreps_Header/Header.css';


export default function SectionHeader(){

    
    return(
        <>
         <section className="headerContainer">
                <img src={cardume} alt="Imagem de fundo" className="cardume"/>
                <Header/>
                <article className="articleHeaderContainer">
                <h1 id="siapreps" >
                    SIAPREPS
                </h1>
                    <p id="textosiapreps">
                    A plataforma SIAPREPS disponibiliza aos usuários mapas que  permitem localizar  e monitorar os cardumes com maior facilidade e precisão
                     </p>
                    <img id="notesiapreps" src={siapresqPc} alt="Imagem de um notebook da siapreps" />
                     {/* <button className="fundoInvinsivel"> Começar Agora</button>  */}
                </article>
            </section>
   
        </>
      )
    }