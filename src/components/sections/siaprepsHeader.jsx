// import 'animate.css';
import React from "react";
// import cardume from "../../imgs/cardume.png";
import siaprepsNome from "../../imgs/NomeSiapreps.svg";
import siapresqPc from "../../imgs/siapresqPc.svg";
import '../../style/siapreps/siapreps_Header/Header.css';
import Header from "../layouts/header";

export default function SectionHeader() {
    return (
        <>
            <section className="headerContainer siaprepsContainer">
                {/* <img
                    src={cardume}
                    alt="Imagem de fundo"
                    className="cardume animate__animated animate__fadeIn animate__delay-0.0.1s"
                    id="cardume"
                /> */}
                <Header />
                <article className="articleHeaderContainer">

                    <h1 id="siapreps" className="animate__animated animate__zoomIn">
                        <img src={siaprepsNome} alt="SIAPREPS" id="imgsiapreps" />
                    </h1>

                    <div>
                        <p id="textosiapreps" className="animate__animated animate__fadeIn">
                            A plataforma SIAPREPS disponibiliza aos usuários mapas que permitem
                            localizar e monitorar os cardumes com maior facilidade e precisão.
                        </p>
                    </div>

                    <div>
                        <img
                            id="notesiapreps"
                            src={siapresqPc}
                            alt="Imagem de um notebook da siapreps"
                            className="animate__animated animate__slideInUp"
                        />
                    </div>
                    
                    <button className="fundoInvinsivel"> <a href="https://github.com/siapesq/siapreps-release-mirror/releases/download/1.0.21/SIAPREPS.Setup.1.0.21.exe" target="_blank" rel="noopener noreferrer">Baixar Software</a></button>
                    <p style={{ fontSize: '12px' }}>Versão 2.0.1 <br></br> Disponível para: <b>Windows 10 e 11</b></p>


                </article>
            </section>
        </>
    );
}
