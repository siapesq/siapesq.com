import React from "react";
import Reveal from "../../common/Reveal";
import "../../../style/plataforma/especies.css";

/* Espécies e ilustrações vindas do deck oficial da SIAPESQ.
   Para adicionar/remover, basta editar o array abaixo. */
import capivara from "../../../imgs/especies/capivara.jpg";
import araraAzul from "../../../imgs/especies/arara-azul.jpg";
import puma from "../../../imgs/especies/puma.jpg";
import tucano from "../../../imgs/especies/tucano.jpg";
import loboGuara from "../../../imgs/especies/lobo-guara.jpg";
import tartaruga from "../../../imgs/especies/tartaruga-verde.jpg";
import micoLeao from "../../../imgs/especies/mico-leao.jpg";
import seriema from "../../../imgs/especies/seriema.jpg";
import tamandua from "../../../imgs/especies/tamandua.jpg";
import garoupa from "../../../imgs/especies/garoupa.jpg";
import quati from "../../../imgs/especies/quati.jpg";
import araucaria from "../../../imgs/especies/araucaria.jpg";
import macacoPrego from "../../../imgs/especies/macaco-prego.jpg";
import queroQuero from "../../../imgs/especies/quero-quero.jpg";
import tatu from "../../../imgs/especies/tatu.jpg";
import dourado from "../../../imgs/especies/dourado.jpg";
import bemTeVi from "../../../imgs/especies/bem-te-vi.jpg";
import aguape from "../../../imgs/especies/aguape.jpg";
import sabia from "../../../imgs/especies/sabia.jpg";
import carcara from "../../../imgs/especies/carcara.jpg";

const especies = [
  { nome: "Capivara", ci: "Hydrochoerus hydrochaeris", img: capivara },
  { nome: "Arara-azul", ci: "Anodorhynchus hyacinthinus", img: araraAzul },
  { nome: "Puma", ci: "Puma concolor", img: puma },
  { nome: "Tucano-de-bico-verde", ci: "Ramphastos dicolorus", img: tucano },
  { nome: "Lobo-guará", ci: "Chrysocyon brachyurus", img: loboGuara },
  { nome: "Tartaruga-verde", ci: "Chelonia mydas", img: tartaruga },
  { nome: "Mico-leão-dourado", ci: "Leontopithecus rosalia", img: micoLeao },
  { nome: "Seriema", ci: "Cariama cristata", img: seriema },
  { nome: "Tamanduá-bandeira", ci: "Myrmecophaga tridactyla", img: tamandua },
  { nome: "Garoupa", ci: "Epinephelus marginatus", img: garoupa },
  { nome: "Quati", ci: "Nasua nasua", img: quati },
  { nome: "Araucária", ci: "Araucaria angustifolia", img: araucaria },
  { nome: "Macaco-prego", ci: "Sapajus nigritus", img: macacoPrego },
  { nome: "Quero-quero", ci: "Vanellus chilensis", img: queroQuero },
  { nome: "Tatu-galinha", ci: "Dasypus novemcinctus", img: tatu },
  { nome: "Dourado", ci: "Coryphaena hippurus", img: dourado },
  { nome: "Bem-te-vi", ci: "Pitangus sulphuratus", img: bemTeVi },
  { nome: "Aguapé", ci: "Eichhornia crassipes", img: aguape },
  { nome: "Sabiá-laranjeira", ci: "Turdus rufiventris", img: sabia },
  { nome: "Carcará", ci: "Caracara plancus", img: carcara },
];

export default function SectionEspecies() {
  // duplica a lista para o loop ficar contínuo (sem "salto")
  const trilho = [...especies, ...especies];

  return (
    <section className="esp">
      <div className="plat_wrap esp_cabecalho">
        <Reveal stagger>
          <p className="plat_rotulo">Biodiversidade monitorada</p>
          <h2 className="plat_titulo_seccao">Centenas de espécies, num só lugar</h2>
          <p className="plat_intro">
            De mamíferos a aves, peixes, répteis e plantas: acompanhe a
            distribuição de espécies dos mais variados grupos num único painel.
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
    </section>
  );
}
