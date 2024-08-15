import React from "react";
import siapesq from "../imgs/siapesq.png";
import equipe from "../imgs/equipe.png"; 
import talles from "../imgs/talles.png";
import Header from "../components/layouts/header";


export default function About() {
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
                
                <div className="cards">
                    <div className="card1">
                        <img src={talles} alt="talles" />
                        <p>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                    </div>

                    <div className="card2">
                        <p>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                        <img src={talles} alt="talles" />
                    </div>
                </div>
                
            
           </div>
                
        </>
    );
}
