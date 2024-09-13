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
                    Com PHYTOBLOOM VISION é possível identificar a proliferação de plantas aquáticas garantindo uma gestão eficiente e oportuna da vegetação.
                     </p>
                     <button className="fundoInvinsivel"> Começar Agora</button> 
                </article>
            </section>
   
        </>
      )
    }