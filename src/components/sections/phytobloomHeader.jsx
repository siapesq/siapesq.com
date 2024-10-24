import React from "react";
import Header from "../layouts/header";
import hidro from "../../imgs/hidro.png";
import Phytobloom from "../../imgs/PhytobloomNome.svg"
import '../../style/phytobloom/header.css';


export default function SectionHeader(){

    
    return(
        <>
         <section className="headerContainer">
                <img src={hidro} alt="Imagem de fundo" className="hidro"/>
                <Header/>
                <article className="article-header-container">
                <img src={Phytobloom} alt="a" id="phytobloom"  />
                {/* <iframe src='https://my.spline.design/untitled-0db1be3080710c809a983f6ac647274f/' frameborder='0' width='100%' height='100%'></iframe> */}
            
                    <p id="textophytobloom">
                    Com a PHYTOBLOOM VISION identificamos Desregulações Ambientais em Reservatórios Hídricos, propiciando o Manejo Ambiental para Evitar Eventos Críticos!
                     </p>
                     <button className="fundoInvinsivel"> <a href="https://wa.me/555399503671" target="_blank" rel="noopener noreferrer">Começar Agora</a></button> 
                </article>
            </section>
   
        </>
      )
    }