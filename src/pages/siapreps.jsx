import React from "react";
import Header from "../components/layouts/header";
import cardume from "../imgs/cardume.png";
// import cardume2 from "../imgs/cardume2.png";
// import peixes from "../imgs/peixes.png";
import siapresqPc from "../imgs/siapresqPc.svg";
// import siapreps from "../imgs/siapreps.svg";
// import logo from "../imgs/logo.svg";
import SectionBarco from "../components/sections/siaprepsBarco";
import SectionPlataforma from "../components/sections/siaprepsPlataforma";
import SectionCardume from "../components/sections/siaprepsCardume";
import SectionformS from "../components/sections/siaprepsFormS";
import SectionFooter from "../components/sections/siaprepsFooter";
import '../style/siapreps/siapreps.css';


export default function Index(){

    
    return(
        <>
            <section className="header_container">
                <img src={cardume} alt="Imagem de fundo" className="bg_img"/>
                <Header/>
                <article className="article_header_container">
                <h1>
                    SIAPREPS
                </h1>
                    <p>
                    A plataforma SIAPREPS disponibiliza aos usuários mapas que  permitem localizar  e monitorar os cardumes com maior facilidade e precisão
                     </p>
                    <img src={siapresqPc} alt="Imagem de um notebook da siapreps" />
                     <button className="fundoInvinsivel"> Começar Agora</button> 
                </article>
            </section>
                <div >
                <SectionBarco />
                </div>

                <div >
                <SectionPlataforma />
                </div>

                <div >
                <SectionCardume />
                </div>

                <div >
                <SectionformS />
                </div>
                     
                <div >
                <SectionFooter />
                </div>
        </>
    )
}