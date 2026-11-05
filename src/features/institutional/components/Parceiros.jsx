import React, { useEffect, useRef } from 'react';
import '../styles/parceiros.css';
import blueRio from '../../../imgs/colaboradores/BlueRio.svg';
import centelha from '../../../imgs/colaboradores/Centelha.svg';
import cnpq from '../../../imgs/colaboradores/CNPq.svg';
import conectaStartup from '../../../imgs/colaboradores/Conecta Startup.svg';
import copel from '../../../imgs/colaboradores/Copel.svg';
import fapergs from '../../../imgs/colaboradores/FAPERGS.svg';
import fapes from '../../../imgs/colaboradores/fapes.svg';
import furg from '../../../imgs/colaboradores/FURG.svg';
import governoRio from '../../../imgs/colaboradores/Governo Rio.svg';
import innovatio from '../../../imgs/colaboradores/Innovatio.svg';
import inovativa from '../../../imgs/colaboradores/Inovativa.svg';
import ministerioDaCiencia from '../../../imgs/colaboradores/Ministério da Ciência.svg';
import oceantec from '../../../imgs/colaboradores/Oceantec.svg';
import oracle from '../../../imgs/colaboradores/Oracle.svg';
import seama from '../../../imgs/colaboradores/seama.svg';
import seas from '../../../imgs/colaboradores/SEAS.svg';
import uerj from '../../../imgs/colaboradores/UERJ.svg';
import unesco from '../../../imgs/colaboradores/UNESCO.svg';

const linhas = [
  [
    { nome: 'Blue Rio', logo: blueRio },
    { nome: 'Centelha', logo: centelha },
    { nome: 'CNPq', logo: cnpq },
    { nome: 'Conecta Startup', logo: conectaStartup },
    { nome: 'Copel', logo: copel },
    { nome: 'FAPERGS', logo: fapergs },
    { nome: 'FAPES', logo: fapes },
    { nome: 'Universidade Federal do Rio Grande', logo: furg },
    { nome: 'Governo do Rio de Janeiro', logo: governoRio },
  ],
  [
    { nome: 'Innovatio', logo: innovatio },
    { nome: 'InovAtiva', logo: inovativa },
    { nome: 'Ministério da Ciência', logo: ministerioDaCiencia },
    { nome: 'Oceantec', logo: oceantec },
    { nome: 'Oracle', logo: oracle },
    { nome: 'SEAMA', logo: seama },
    { nome: 'SEAS', logo: seas },
    { nome: 'Universidade do Estado do Rio de Janeiro', logo: uerj },
    { nome: 'UNESCO', logo: unesco },
  ],
];

function Parceiros() {
  const sectionRef = useRef(null);
  const tracksRef = useRef([]);
  const groupRef = useRef(null);
  const offsetRef = useRef(0);
  const widthRef = useRef(0);

  const renderPosition = () => {
    tracksRef.current.forEach((track) => {
      if (track) track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    });
  };

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame;
    let previousTime;

    const updateWidth = () => {
      widthRef.current = groupRef.current?.getBoundingClientRect().width || 0;
      if (widthRef.current) offsetRef.current %= widthRef.current;
      renderPosition();
    };

    const animate = (time) => {
      if (previousTime !== undefined && widthRef.current && !media.matches &&
          !sectionRef.current?.matches(':hover, :focus-within') &&
          document.visibilityState === 'visible') {
        offsetRef.current = (offsetRef.current + Math.min(time - previousTime, 50) * 0.035) % widthRef.current;
        renderPosition();
      }
      previousTime = time;
      frame = window.requestAnimationFrame(animate);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const mover = (direcao) => {
    const group = groupRef.current;
    if (!group || !widthRef.current) return;
    const item = group.querySelector('.parceiros__item');
    const gap = parseFloat(window.getComputedStyle(group).columnGap) || 0;
    const passo = (item?.getBoundingClientRect().width || 0) + gap;
    offsetRef.current = (offsetRef.current + direcao * passo + widthRef.current) % widthRef.current;
    renderPosition();
  };

  return (
    <section className="parceiros" aria-label="Colaboradores" ref={sectionRef}>
      <button className="parceiros__seta" type="button" aria-label="Colaborador anterior" onClick={() => mover(-1)}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
      </button>
      <div className="parceiros__linhas">
        {linhas.map((colaboradores, linha) => (
          <div className="parceiros__viewport" key={linha}>
            <div className="parceiros__track" ref={(element) => { tracksRef.current[linha] = element; }}>
              {[false, true].map((copia) => (
                <ul
                  className="parceiros__group"
                  aria-hidden={copia || undefined}
                  key={String(copia)}
                  ref={!linha && !copia ? groupRef : undefined}
                >
                  {colaboradores.map(({ nome, logo }) => (
                    <li className="parceiros__item" key={nome}>
                      <img src={logo} alt={copia ? '' : `Logo ${nome}`} loading="lazy" />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="parceiros__seta" type="button" aria-label="Próximo colaborador" onClick={() => mover(1)}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
      </button>
    </section>
  );
}

export default Parceiros;
