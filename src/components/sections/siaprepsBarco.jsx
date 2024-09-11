import React from "react";
// import barcopesca from "../../imgs/barcopesca.svg";
import textobarco from "../../imgs/textoBarco.svg";
import bordabarco from "../../imgs/bordabarco.svg";
// import mar from "../../imgs/marBarco.jpg";
import onda from "../../videos/agua.MOV";
import '../../style/siapreps/siapreps_barco/barco.css';


export default function SectionBarco(){

    
    return(
        <>
 <div className="containerPesca">
          {/* <div>
            <center>
            <video id="video" src={onda}  width="100%" height="300" controls="controls" autoplay="true" loop />
            </center>
          </div> */}
      {/* <img src={barcopesca} alt="barco" className="barcoPesca" /> */}
          <iframe id="tresd" src='https://my.spline.design/untitled-addd9cd5fae5d36c9a045b4b365c04ed/' frameborder='0' width='100%' height='1400px'></iframe>
      {/* <div className="textoPesca"> */}
         <p className="textoPesca">Localização do Pescado</p>
        {/* </div> */}
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