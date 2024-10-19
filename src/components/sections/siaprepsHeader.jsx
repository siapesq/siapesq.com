import React from "react";
import Header from "../layouts/header";
import cardume from "../../imgs/cardume.png";
import siapresqPc from "../../imgs/siapresqPc.svg";
import siaprepsNome from "../../imgs/NomeSiapreps.svg"
import '../../style/siapreps/siapreps_Header/Header.css';


export default function SectionHeader(){

    
    return(
        <>
         <section className="headerContainer">
                <img src={cardume} alt="Imagem de fundo" className="cardume" id="cardume"/>
                <Header/>
                <article className="articleHeaderContainer">
                <h1 id="siapreps" >
                        <img src={siaprepsNome} alt="" id="imgsiapreps" />
                </h1>
                    <p id="textosiapreps">
                    A plataforma SIAPREPS disponibiliza aos usuários mapas que  permitem localizar  e monitorar os cardumes com maior facilidade e precisão
                     </p>
                    <img id="notesiapreps" src={siapresqPc} alt="Imagem de um notebook da siapreps" />
                     <button className="botaoSiapreps"> <a href="https://wa.me/555399503671" target="_blank" rel="noopener noreferrer"> Começar Agora </a></button>
                </article>
            </section>
   
        </>
      )
    }