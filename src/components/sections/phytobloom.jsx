import React from "react";
import phytobloom from "../../imgs/Phytobloom.svg";
import '../../style/phytobloom/PhytoBloom.css';
import iconChecked from "../../imgs/iconChecked.png";
import { NavLink } from "react-router-dom";


export default function SectionPhytobloom() {


  return (
    <>
      <div className="container">
        <header className="header">
          <div className="header-text">
            <ul>
              <li>
                <img className="iconChecked" src={iconChecked} width={60} alt="check" />
                Monitoramento de Reservatórios Continentais</li>
              <li>
                <img className="iconChecked" src={iconChecked} width={60} alt="check" />
                Detecção de Desregulações Ambientais</li>
              <li>
                <img className="iconChecked" src={iconChecked} width={60} alt="check" />
                Predição de Blooms de Microalga e Plantas Aquáticas</li>
            </ul>
          </div>
          <div className="logo">
            <div>
              <img src={phytobloom} alt="PhytoBloom Logo" />
            </div>
          </div>
        </header>
        <main>
          <p>
            A plataforma PhytoBloom disponibiliza aos usuários mapas que permitem
            monitorar a qualidade de corpos d águas continentais, prever eventos críticos
            de desregulação ambiental e subsidiar o manejo Socio-Ambiental
          </p>
          <NavLink to={"/phytobloom"} className="saiba-mais" onClick={() =>
                            window.scroll(0,0)
                        }>Saiba mais</NavLink>
        </main>
      </div>
    </>
  )
}
