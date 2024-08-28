import React from "react";
import phytobloom from "../../imgs/Phytobloom.svg";
import '../../style/phytobloom/PhytoBloom.css';


export default function SectionPhytobloom(){

    
    return(
        <>
    <div className="container">
      <header className="header">
        <div className="header-text">
          <h1>Monitoramento de Reservatórios Continentais</h1>
          <h1>Detecção de Desregulações Ambientais</h1>
          <h1>Predição de Blooms de Microalga e Plantas Aquáticas</h1>
        </div>
        <div className="logo">
          <img src={phytobloom} alt="PhytoBloom Logo" />
        </div>
      </header>
      <main>
        <p>
          A plataforma PhytoBloom disponibiliza aos usuários mapas que permitem
          monitorar a qualidade de corpos d águas continentais, prever eventos críticos
          de desregulação ambiental e subsidiar o manejo Socio-Ambiental
        </p>
        <button className="saiba-mais">Saiba mais</button>
      </main>
    </div>
        </>
      )
    }
