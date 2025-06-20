import React from "react";
// import barcopesca from "../../imgs/barcopesca.svg";
// import textobarco from "../../imgs/textoBarco.svg";
// import bordabarco from "../../imgs/bordabarco.svg";
// import mar from "../../imgs/marBarco.jpg";
// import onda from "../../videos/agua.MOV";
import '../../style/siapreps/siapreps_barco/barco.css';


export default function SectionBarco() {


  return (
    <>
      <div className="containerPesca">
        {/* <div>
            <center>
            <video id="video" src={onda}  width="100%" height="300" controls="controls" autoplay="true" loop />
            </center>
          </div> */}
        {/* <img src={barcopesca} alt="barco" className="barcoPesca" /> */}
        {/* <iframe id="tresd" src='https://my.spline.design/untitled-addd9cd5fae5d36c9a045b4b365c04ed/' frameborder='0' width='100%' height='1400px' title="Barco-3d"></iframe> */}
        {/* <div className="textoPesca"> */}


        <p className="textoPesca">Localização do Pescado</p>

        {/* MUDANDO O LUGAR DO iframe */}
        <div className="divBarco">
          <div>
            <iframe src='https://my.spline.design/untitled-7aCS5RiUVzkhHTX8DIpWP4pS/' frameborder='0' width='110%' height="500px" title="Modelo 3D do barco" style={{zIndex: 1000}}></iframe>
          </div>
        </div>

        <div className="divInfos">
          <div>
            <h2>60%</h2>
            <p>Redução do Custo no Processo de Procura do Pescado</p>
          </div>
          <div>
            <h2>60%</h2>
            <p>Redução da Emissão de Gases Estufas para a Atmosfera</p>
          </div>
          <div>
            <h2>70%</h2>
            <p>Otimização do Tempo das Pescarias</p>
          </div>
        </div>


        {/* </div> */}
        {/* <div className="porcentagem">
          <img src={bordabarco} alt="" id="borda" />
          <img src={textobarco} alt="" id="textoBarco" /> */}
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
        {/* </div> */}
      </div>

    </>
  )
}