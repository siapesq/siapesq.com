import React from "react";
import cardume from "../../imgs/cardume2.png";
import '../../style/siapreps/siapreps_cardume/cardume.css';


export default function SectionCardume(){

    
    return(
        
        <div className="cards">
        <h1 id="h1cardume">Veja as principais espécies rastreáveis</h1>
       <p id="peixetextinho">Tenha praticidade e eficiência para atividade pesqueira. Te mostramos a localização do peixe.</p>
        <div className="card-container">
          <div className="card">
            <h2 className="textopeixe">Tainha</h2>
            <img className="imgpeixe" src={cardume} alt="Tainha" />
           <p className="textinho">Especies especies</p>
          </div>
          <div className="card">
            <h2 className="textopeixe">Bagre</h2>
            <img className="imgpeixe" src={cardume} alt="Bagre" />
           <p className="textinho">Especies especies</p>
          </div>
          <div className="card">
            <h2 className="textopeixe">Salmão</h2>
            <img className="imgpeixe" src={cardume} alt="Salmão" />
           <p className="textinho">Especies especies</p>
          </div>
          <div className="card">
            <h2 className="textopeixe">Peixe lua</h2>
            <img className="imgpeixe" src={cardume} alt="Peixe lua" />
           <p className="textinho">Especies especies</p>
          </div>
        </div>
        <p className="obs">Obs: Nós filtramos áreas com menor probabilidade de haver animais proibidos de pesca, como tubarões, baleias, e tartarugas</p>
      </div> 
  );
}
