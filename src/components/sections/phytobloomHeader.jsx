import React from "react";
import Header from "../layouts/header";
import hidro from "../../imgs/hidro.png";
import '../../style/phytobloom/header.css';


export default function SectionHeader(){

    
    return(
        <>
         <section className="headerContainer">
                <img src={hidro} alt="Imagem de fundo" className="hidro"/>
                <Header/>
                <article className="article-header-container">
                <h1 id="phytobloom" >
                PHYTOBLOOM
                </h1>
                    <p id="textophytobloom">
                    Com PHYTOBLOOM VISION é possível identificar a proliferação de plantas aquáticas garantindo uma gestão eficiente e oportuna da vegetação.
                     </p>
                     <button className="fundoInvinsivel"> Começar Agora</button> 
                </article>
            </section>
   
        </>
      )
    }