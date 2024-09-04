import React from "react";
import barcopesca from "../../imgs/barcopesca.svg";
import textobarco from "../../imgs/textoBarco.svg";
import bordabarco from "../../imgs/bordabarco.svg";
import '../../style/siapreps/siapreps_barco/barco.css';


export default function SectionBarco(){

    
    return(
        <>
 <div className="containerPesca">
      <img src={barcopesca} alt="barco" className="barcoPesca" />
      <div className="textoPesca">
        <p>Localização do Pescado</p>
        </div>
        <div className="porcentagem">
          <img src={bordabarco} alt="" id="borda"/>
          <img src={textobarco} alt="" id="textoBarco" />
          {/* <div className="textoporcentagem">
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
          </div> */}
        </div>
      </div>
        </>
    )
}