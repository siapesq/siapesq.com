import React from "react";
import Reveal from "../../common/Reveal";
import mapaPlataforma from "../../../imgs/plataformaHome.jpg";
import { URL_PLATAFORMA } from "./hero";
import "../../../style/plataforma/pagina.css";

const destaques = ["100% online", "Sem instalação", "Dados científicos"];

export default function SectionAcesso() {
  return (
    <section className="plat_acesso">
      <div className="plat_wrap">
        <Reveal className="plat_acesso_conteudo">
          <div className="plat_acesso_texto">
            <p className="plat_rotulo">Acesso à plataforma</p>
            <h2 className="plat_titulo_seccao">
              Explore as espécies direto no seu navegador
            </h2>
            <p>
              Mapas, análises e projeções climáticas numa plataforma online,
              sem instalar nada, de qualquer computador.
            </p>

            <div className="plat_acesso_tags">
              {destaques.map((destaque) => (
                <span key={destaque}>{destaque}</span>
              ))}
            </div>

            <a href={URL_PLATAFORMA} className="plat_btn plat_btn_claro">
              Acessar a plataforma
            </a>
          </div>

          <div className="plat_acesso_janela">
            <div className="plat_acesso_barra">
              <span />
              <span />
              <span />
            </div>
            <img
              src={mapaPlataforma}
              alt="Tela inicial da plataforma SIAPESQ com o catálogo de espécies"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
