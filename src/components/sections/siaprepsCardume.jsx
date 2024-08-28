// import React from "react";
// import cardume from "../../imgs/cardume2.png";
// import '../../style/siapreps/siapreps_cardume/cardume.css';


// export default function SectionCardume(){

    
//     return(
        
//         <div className="cards">
//         <h1 id="h1cardume">Veja as principais espécies rastreáveis</h1>
//        <p id="peixetextinho">Tenha praticidade e eficiência para atividade pesqueira. Te mostramos a localização do peixe.</p>
//         <div className="card-container">
//           <div className="card">
//             <h2 className="textopeixe">Tainha</h2>
//             <img className="imgpeixe" src={cardume} alt="Tainha" />
//            <p className="textinho">Especies especies</p>
//           </div>
//           <div className="card">
//             <h2 className="textopeixe">Bagre</h2>
//             <img className="imgpeixe" src={cardume} alt="Bagre" />
//            <p className="textinho">Especies especies</p>
//           </div>
//           <div className="card">
//             <h2 className="textopeixe">Salmão</h2>
//             <img className="imgpeixe" src={cardume} alt="Salmão" />
//            <p className="textinho">Especies especies</p>
//           </div>
//           <div className="card">
//             <h2 className="textopeixe">Peixe lua</h2>
//             <img className="imgpeixe" src={cardume} alt="Peixe lua" />
//            <p className="textinho">Especies especies</p>
//           </div>
//         </div>
//         <p className="obs">Obs: Nós filtramos áreas com menor probabilidade de haver animais proibidos de pesca, como tubarões, baleias, e tartarugas</p>
//       </div> 
//   );
// }


import React, { useState } from 'react';
import meka from "../../imgs/Meka.png";
import atumoludo from "../../imgs/Atum Olhudo BAT.png";
import atumalbacora from "../../imgs/Atum Albacora.png";
import atumyellowfin from "../../imgs/Atum YellowFin.png";
import bonito from "../../imgs/Bonito Listrado.png";
import pescada from "../../imgs/Pescada.png";
import anchova from "../../imgs/Anchova .png";
import corvina from "../../imgs/Corvina .png";
import abrotea from "../../imgs/Abrótea.png";
import merluza from "../../imgs/Merluza.png";
import tainha from "../../imgs/Tainha.png";
import sardinha from "../../imgs/Sardinha.png";
import '../../style/siapreps/siapreps_cardume/Carrossel.css';

const Carrossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const equipe = [
    // { nome: 'Meka', nomeCientifico: 'Xiphias gladius', imagem: {peixe} }, 
    { nome: 'Meka', nomeCientifico: 'Xiphias gladius', imagem:meka },
    { nome: 'Atum Olhudo BAT', nomeCientifico: 'Thunnus obesus', imagem: atumoludo },
    { nome: 'Atum Albacora', nomeCientifico: 'Thunnus alalunga', imagem: atumalbacora },
    { nome: 'Atum YellowFin', nomeCientifico: 'Thunnus alalunga', imagem: atumyellowfin },
    { nome: 'Bonito Listrado', nomeCientifico: 'Katsuwonus pelamis', imagem: bonito },
    { nome: 'Pescada', nomeCientifico: 'Merluccius merluccius', imagem: pescada },
    { nome: 'Anchova', nomeCientifico: 'Pomatomus Saltatrix', imagem: anchova },
    { nome: 'Corvina ', nomeCientifico: 'Micropogonias funieri', imagem: corvina },
    { nome: 'Abrótea', nomeCientifico: 'Urophycis brasiliensis', imagem: abrotea },
    { nome: 'Merluza', nomeCientifico: 'merluccius hubbsi', imagem: merluza },
    { nome: 'Tainha', nomeCientifico: 'Mugil liza', imagem: tainha },
    { nome: 'Sardinha', nomeCientifico: 'Sardinella brasiliensis', imagem: sardinha },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % equipe.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? equipe.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrossel-container">
      <h2 className="cardumeh2">Veja as principais espécies rastreáveis</h2>
      <h2 className="cardumeh2">Tenha praticidade e eficiencia para atividade pesqueira. Te mostramos a localização do peixe.</h2>
      <div className="carrossel">
        <button className="arrow left" onClick={prevSlide}>
          &#8249;
        </button>
        <div className="slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {equipe.map((membro, index) => (
            <div className="membro" key={index}>
              <img src={membro.imagem} alt={membro.nome} />
              <p className='cardumep'>{membro.nome}</p>
              <p className='cardumep'>{membro.nomeCientifico}</p>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
      <div>
    </div>
      <h2 className="cardumeh2">Obs: Nós filtramos áreas com menor probabilidade de haver animais proibidos de pesca, como tubarões, baleias, e tartarugas</h2>
      <h2 className='cardumeh2'>Nossas indicações levam em consideração a restrição de áreas de capturas onde habitam:</h2>
      </div>
  );
};

export default Carrossel;
