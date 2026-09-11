import React, { useRef } from "react";
import Reveal from "../../common/Reveal";
import "../../../style/plataforma/pagina.css";
import "../../../style/plataforma/especies.css";

import meka from "../../../imgs/Meka.png";
import atumOlhudo from "../../../imgs/Atum Olhudo BAT.png";
import atumAlbacora from "../../../imgs/Atum Albacora.png";
import atumYellowfin from "../../../imgs/Atum YellowFin.png";
import bonito from "../../../imgs/Bonito Listrado.png";
import anchova from "../../../imgs/Anchova .png";
import corvina from "../../../imgs/Corvina .png";
import abrotea from "../../../imgs/Abrótea.png";
import merluza from "../../../imgs/Merluza.png";
import tainha from "../../../imgs/Tainha.png";
import sardinha from "../../../imgs/Sardinha.png";
import pescada from "../../../imgs/Pescada.png";

import baleia from "../../../imgs/baleia.svg";
import tartaruga from "../../../imgs/tartaruga.svg";
import golfinho from "../../../imgs/golfinho.svg";

const especies = [
  { nome: "Meka", ci: "Xiphias gladius", img: meka },
  { nome: "Atum-olhudo", ci: "Thunnus obesus", img: atumOlhudo },
  { nome: "Atum-albacora", ci: "Thunnus alalunga", img: atumAlbacora },
  { nome: "Atum-yellowfin", ci: "Thunnus albacares", img: atumYellowfin },
  { nome: "Bonito-listrado", ci: "Katsuwonus pelamis", img: bonito },
  { nome: "Anchova", ci: "Pomatomus saltatrix", img: anchova },
  { nome: "Corvina", ci: "Micropogonias furnieri", img: corvina },
  { nome: "Abrótea", ci: "Urophycis brasiliensis", img: abrotea },
  { nome: "Merluza", ci: "Merluccius hubbsi", img: merluza },
  { nome: "Tainha", ci: "Mugil liza", img: tainha },
  { nome: "Sardinha", ci: "Sardinella brasiliensis", img: sardinha },
  { nome: "Pescada", ci: "Cynoscion guatucupa", img: pescada },
];

const protegidas = [
  { nome: "Baleia Jubarte", ci: "Megaptera novaeangliae", img: baleia },
  { nome: "Tartaruga Cabeçuda", ci: "Caretta caretta", img: tartaruga },
  { nome: "Golfinho Nariz de Garrafa", ci: "Tursiops truncatus", img: golfinho },
];

export default function SectionEspeciesSiapreps() {
  const trilho = [...especies, ...especies];
  const evitarListaRef = useRef(null);

  // Setinhas: só têm efeito no mobile (onde o CSS vira carrossel de 1 item
  // por vez, ver especies.css); no desktop a lista não rola, então isso não
  // faz nada — sem precisar de outra implementação por breakpoint.
  const irParaVizinho = (direcao) => {
    const lista = evitarListaRef.current;
    if (!lista) return;
    lista.scrollBy({ left: direcao * lista.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="esp">
      <div className="plat_wrap esp_cabecalho">
        <Reveal stagger>
          <p className="plat_rotulo">Espécies rastreáveis</p>
          <h2 className="plat_titulo_seccao">
            Os principais cardumes da costa brasileira
          </h2>
          <p className="plat_intro">
            Acompanhe em tempo real a localização das espécies mais pescadas,
            com praticidade e eficiência para a atividade pesqueira.
          </p>
        </Reveal>
      </div>

      <div className="esp_esteira">
        <ul className="esp_trilho">
          {trilho.map((e, i) => (
            <li className="esp_item" key={i} aria-hidden={i >= especies.length}>
              <div className="esp_foto">
                <img src={e.img} alt={e.nome} loading="lazy" />
              </div>
              <p className="esp_nome">{e.nome}</p>
              <p className="esp_ci">{e.ci}</p>
            </li>
          ))}
        </ul>
      </div>

      <Reveal className="esp_evitar" stagger>
        <p className="esp_evitar_titulo">
          Nossas indicações levam em consideração a restrição de áreas de captura
          onde habitam:
        </p>
        <div className="esp_evitar_carrossel">
          <button
            type="button"
            className="esp_evitar_seta esp_evitar_seta--prev"
            aria-label="Espécie anterior"
            onClick={() => irParaVizinho(-1)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <ul className="esp_evitar_lista" ref={evitarListaRef}>
            {protegidas.map((e) => (
              <li className="esp_evitar_item" key={e.nome}>
                <p className="esp_evitar_nome">{e.nome}</p>
                <div className="esp_evitar_foto">
                  <img src={e.img} alt={e.nome} loading="lazy" />
                </div>
                <p className="esp_evitar_ci">{e.ci}</p>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="esp_evitar_seta esp_evitar_seta--next"
            aria-label="Próxima espécie"
            onClick={() => irParaVizinho(1)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </Reveal>
    </section>
  );
}
