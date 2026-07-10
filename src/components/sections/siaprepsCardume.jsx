import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import baleia from "../../imgs/baleia.svg";
import golfinho from "../../imgs/golfinho.svg";
import tartaruga from "../../imgs/tartaruga.svg";
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
import '../../style/siapreps/siapreps_cardume/cardume.css';

const Carrossel = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const peixe = [
    { chave: 'meka', nomeCientifico: 'Xiphias gladius', imagem:meka },
    { chave: 'atumOlhudo', nomeCientifico: 'Thunnus obesus', imagem: atumoludo },
    { chave: 'atumAlbacora', nomeCientifico: 'Thunnus alalunga', imagem: atumalbacora },
    { chave: 'atumYellowfin', nomeCientifico: 'Thunnus alalunga', imagem: atumyellowfin },
    { chave: 'bonito', nomeCientifico: 'Katsuwonus pelamis', imagem: bonito },
    { chave: 'pescada', nomeCientifico: 'Merluccius merluccius', imagem: pescada },
    { chave: 'anchova', nomeCientifico: 'Pomatomus Saltatrix', imagem: anchova },
    { chave: 'corvina', nomeCientifico: 'Micropogonias funieri', imagem: corvina },
    { chave: 'abrotea', nomeCientifico: 'Urophycis brasiliensis', imagem: abrotea },
    { chave: 'merluza', nomeCientifico: 'merluccius hubbsi', imagem: merluza },
    { chave: 'tainha', nomeCientifico: 'Mugil liza', imagem: tainha },
    { chave: 'sardinha', nomeCientifico: 'Sardinella brasiliensis', imagem: sardinha },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % peixe.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? peixe.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrossel-container">
      <center><h2 className="cardumeh2">{t("siapreps.cardumeTitle")}</h2>
      <h3 className="cardumeh3">{t("siapreps.cardumeSubtitle")}</h3></center>
      <div className="carrossel">
        <button className="arrow left" onClick={prevSlide}> 
          &#8249;
        </button>
        <div className="slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {peixe.map((membro, index) => (
            <div className="membro" key={index}>
              <img src={membro.imagem} alt={t(`siapreps.species.${membro.chave}`)} />
              <p className='cardumep'>{t(`siapreps.species.${membro.chave}`)}</p>
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
    <br /><br />
      <h2 className='cardumeh2'>{t("siapreps.cardumeProtectedTitle")}</h2>
      <br />
      <br />

        <div className="card-container">
          <div className="card">
            <h2 className="textopeixe">{t("siapreps.protectedWhale")}</h2>
            <img className="imgpeixe baleia" src={baleia} alt={t("siapreps.protectedWhale")} />
           <p className="textinho">Megaptera novaeangliae</p>
          </div>
          <div className="card">
            <h2 className="textopeixe">{t("siapreps.protectedTurtle")}</h2>
            <img className="imgpeixe" src={tartaruga} alt={t("siapreps.protectedTurtle")} />
           <p className="textinho">Caretta caretta</p>
          </div>
          <div className="card">
            <h2 className="textopeixe">{t("siapreps.protectedDolphin")}</h2>
            <img className="imgpeixe" src={golfinho} alt={t("siapreps.protectedDolphin")} />
           <p className="textinho">Tursiops truncatus</p>
          </div>
        </div>
      </div>
  );
};

export default Carrossel;
