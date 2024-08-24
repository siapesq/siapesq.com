import React from "react";
import Header from "../layouts/header";
import hidro from "../../imgs/hidro.png";
import '../../style/phytobloom/header.css';


export default function SectionHeader(){

    
    return(
        <>
         <section className="header_container">
                <img src={hidro} alt="Imagem de fundo" className="cardume"/>
                <Header/>
                <article className="article_header_container">
                <h1 id="siapreps" >
                PHYTOBLOOM
                </h1>
                    <p id="textosiapreps">
                    Com PHYTOBLOOM VISION é possível identificar a proliferação de plantas aquáticas garantindo uma gestão eficiente e oportuna da vegetação.
                     </p>
                     <button className="fundoInvinsivel"> Começar Agora</button> 
                </article>
            </section>
   
        </>
      )
    }