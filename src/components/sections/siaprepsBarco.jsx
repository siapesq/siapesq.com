import React from "react";
import naviocarga from "../../imgs/barcocontainer.svg";
import '../../style/siapreps/siapreps_barco/barco.css';


export default function SectionBarco(){

    
    return(
        <>
 <div className="container">
      <img src={naviocarga} alt="barco" className="barco" />
      <div className="texto">
        <h1>O problema</h1>
        </div>
        <div className="porcentagem">
          <div className="textoporcentagem">
            <h2>3%</h2>
            <p>do total de Gases de Efeito Estufa (GEEs) emitidos globalmente</p>
          </div>
          <div className="textoporcentagem">
            <h2>50%</h2>
            <p>das ações fiscais elacionadas a grandes empresas</p>
          </div>
          <div className="textoporcentagem">
            <h2>Maior</h2>
            <p>Parte do impacto do setor de navegação é atribuído a grandes empresas</p>
          </div>
        </div>
      </div>
        </>
    )
}