import React from "react";
import Header from "../layouts/header";
import siapesq from "../../imgs/siapesqq.svg";
import equipe from "../../imgs/equipe.svg";
import '../../style/about/header.css';

export default function SectionHead() {
    return (
        <>
            <div className="headersobre">
                <Header/>
                <div className="imagemsiapesq">
                    <img className="sistema-img" src={siapesq} alt="Sistema" />
                    <div className="textoSobrenos">
                        <p>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                    </div>
                </div>
                <div className="equipe">
                <img className="imagem-equipe" src={equipe} alt="equipe" />
                    <h1>Conheça nossa equipe</h1>
                </div>
           </div>
                
        </>
    );
}
