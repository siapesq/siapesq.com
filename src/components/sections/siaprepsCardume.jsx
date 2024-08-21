import React from "react";
import cardume from "../../imgs/cardume2.png";
import '../../style/siapreps/siapreps_cardume/cardume.css';


export default function SectionCardume(){

    
    return(
        
        <div className="cards">
        <h1>Veja as principais espécies rastreáveis</h1>
        <p>Tenha praticidade e eficiência para atividade pesqueira. Te mostramos a localização do peixe.</p>
        <div className="card-container">
          <div className="card">
            <h2>Tainha</h2>
            <img src={cardume} alt="Tainha" />
            <p>Especies especies</p>
          </div>
          <div className="card">
            <h2>Bagre</h2>
            <img src={cardume} alt="Bagre" />
            <p>Especies especies</p>
          </div>
          <div className="card">
            <h2>Salmão</h2>
            <img src={cardume} alt="Salmão" />
            <p>Especies especies</p>
          </div>
          <div className="card">
            <h2>Peixe lua</h2>
            <img src={cardume} alt="Peixe lua" />
            <p>Especies especies</p>
          </div>
        </div>
        <p className="obs">Obs: Nós filtramos áreas com menor probabilidade de haver animais proibidos de pesca, como tubarões, baleias, e tartarugas</p>
      </div> 
  );
}
