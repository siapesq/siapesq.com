import React from "react";
import Reveal from "../../common/Reveal";
import notebook from "../../../imgs/siapresqPc.svg";
import { URL_DOWNLOAD_SIAPREPS } from "./hero";
import "../../../style/plataforma/pagina.css";

const destaques = ["Windows 10 e 11", "Versão 1.0.21", "Gratuito"];

export default function SectionAcessoSiapreps() {
  return (
    <section className="plat_acesso">
      <div className="plat_wrap">
        <Reveal className="plat_acesso_conteudo">
          <div className="plat_acesso_texto">
            <p className="plat_rotulo">Baixe o SIAPREPS</p>
            <h2 className="plat_titulo_seccao">
              Leve o oceano por satélite para o seu computador
            </h2>
            <p>
              Instale o aplicativo e comece a planejar suas pescarias com o
              pescado localizado, as áreas protegidas sinalizadas e a rota mais
              econômica até o cardume.
            </p>

            <div className="plat_acesso_tags">
              {destaques.map((destaque) => (
                <span key={destaque}>{destaque}</span>
              ))}
            </div>

            <a
              href={URL_DOWNLOAD_SIAPREPS}
              className="plat_btn plat_btn_claro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Baixar Software
            </a>
          </div>

          <div className="plat_acesso_mockup">
            <img
              src={notebook}
              alt="SIAPREPS aberto em um notebook, com o mapa de satélite do pescado"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
