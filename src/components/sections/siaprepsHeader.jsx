//import 'animate.css';
import React, { useState, useEffect } from "react";
// import cardume from "../../imgs/cardume.png";
import siaprepsNome from "../../imgs/NomeSiapreps.svg";
import siapresqPc from "../../imgs/siapresqPc.svg";
import '../../style/siapreps/siapreps_Header/Header.css';
import Header from "../layouts/header";

export default function SectionHeader() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768);
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <section className="headerContainer siaprepsContainer">
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

                    <div className="botaoContainer">
                        <button id="botao">
                            <a
                                id="corbotao"
                                href={
                                    isMobile
                                        ? "https://api.whatsapp.com/send?phone=5553999503671&text=Quero%20baixar%20o%20SIAPREPS"
                                        : "https://github.com/siapesq/siapreps-release-mirror/releases/download/1.0.21/SIAPREPS.Setup.1.0.21."
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {isMobile ? "Baixar agora" : "Baixar Software"}
                            </a>
                        </button>

                        <p className="versaoSiapreps">
                            Versão 1.0.20 <br /> Disponível para: Windows 10 e 11
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

                </article>
            </section>
        </>
    );
}
