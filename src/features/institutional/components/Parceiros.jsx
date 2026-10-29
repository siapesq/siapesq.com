import React from 'react';
import '../styles/parceiros.css';
import blueRio from '../assets/colaboradores/bluerio.svg';
import centelha from '../assets/colaboradores/centelha.svg';
import cnpq from '../assets/colaboradores/cnpq.svg';
import conectaStartup from '../assets/colaboradores/conecta_startup.svg';
import fapemig from '../assets/colaboradores/fapemig.svg';
import fapergs from '../assets/colaboradores/fapergs.svg';
import fapes from '../assets/colaboradores/fapes.svg';
import governoRioDeJaneiro from '../assets/colaboradores/governo_rj.svg';
import governoRioGrandeDoSul from '../assets/colaboradores/governo_rs.svg';
import innovatio from '../assets/colaboradores/innovatio.svg';
import inovativa from '../assets/colaboradores/inovativa.svg';
import ministerioDaEducacao from '../assets/colaboradores/ministerio_educacao.svg';
import oceantec from '../assets/colaboradores/oceantec.svg';
import oracle from '../assets/colaboradores/oracle.svg';
import seas from '../assets/colaboradores/seas.svg';
import unesco from '../assets/colaboradores/unesco.svg';
import furg from '../assets/colaboradores/universidade_furg.svg';
import uerj from '../assets/colaboradores/universidade_uerj.svg';

const colaboradores = [
  { nome: 'Blue Rio', logo: blueRio },
  { nome: 'Centelha', logo: centelha },
  { nome: 'CNPq', logo: cnpq },
  { nome: 'Conecta Startup', logo: conectaStartup },
  { nome: 'FAPEMIG', logo: fapemig },
  { nome: 'FAPERGS', logo: fapergs },
  { nome: 'FAPES', logo: fapes },
  { nome: 'Governo do Rio de Janeiro', logo: governoRioDeJaneiro },
  { nome: 'Governo do Rio Grande do Sul', logo: governoRioGrandeDoSul },
  { nome: 'Innovatio', logo: innovatio },
  { nome: 'InovAtiva', logo: inovativa },
  { nome: 'Ministério da Educação', logo: ministerioDaEducacao },
  { nome: 'Oceantec', logo: oceantec },
  { nome: 'Oracle', logo: oracle },
  { nome: 'SEAS', logo: seas },
  { nome: 'UNESCO', logo: unesco },
  { nome: 'Universidade Federal do Rio Grande', logo: furg },
  { nome: 'Universidade do Estado do Rio de Janeiro', logo: uerj },
];

function Parceiros() {
  return (
    <section className="parceiros" aria-label="Colaboradores">
      <div className="parceiros__viewport">
        <div className="parceiros__track">
          {[false, true].map((copia) => (
            <ul className="parceiros__group" aria-hidden={copia || undefined} key={String(copia)}>
              {colaboradores.map(({ nome, logo }) => (
                <li className="parceiros__item" key={`${copia}-${nome}`}>
                  <img src={logo} alt={copia ? '' : `Logo ${nome}`} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Parceiros;
