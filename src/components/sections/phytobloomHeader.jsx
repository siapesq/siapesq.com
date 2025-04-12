import React from "react";
import hidro from "../../imgs/hidro.png";
import Phytobloom from "../../imgs/PhytobloomNome.svg";
import '../../style/phytobloom/header.css';
import Header from "../layouts/header";


export default function SectionHeader() {

    return (
        <>
            <section className="headerContainer">
            
                <img 
                src={hidro} alt="Imagem de fundo" 
                className="cardume animate__animated animate__fadeIn animate__delay-0.0.1s" 
                id="cardume"
                />
                
                <Header />
                <article className="article-header-container">
                    <h2 id="siapreps" className="animate__animated animate__zoomIn">
                    <img src={Phytobloom} alt="a" id="phytobloom" />
                    </h2>
                    {/* <iframe src='https://my.spline.design/untitled-0db1be3080710c809a983f6ac647274f/' frameborder='0' width='100%' height='100%'></iframe> */}

                    <p id="textophytobloom">
                        Com a PHYTOBLOOM VISION identificamos Desregulações Ambientais em Reservatórios Hídricos, propiciando o Manejo Ambiental para Evitar Eventos Críticos!
                    </p>
                    <button className="fundoInvinsivel  animate__animated animate__bounceIn"> <a href="https://github.com/siapesq/phybloom-release-mirror/releases/download/v2.0.1/phytobloom-Setup-2.0.1.exe" 
                    target="_blank" 
                    rel="noopener noreferrer">Baixar Software</a>
                    </button>
                    
                    <p style={{ fontSize: '12px' }}>Versão 2.0.1 <br></br> Disponível para: <b>Windows 10 e 11</b></p>

                </article>
            </section >

        </>
    )
}