import React from "react";
import Reveal from "../../common/Reveal";
import telaPhytobloom from "../../../imgs/acessoMapaAtualizado.jpeg";
import { URL_DOWNLOAD_PHYTOBLOOM } from "./hero";
import "../../../style/plataforma/pagina.css";

const destaques = ["Windows 10 e 11", "Versão 2.0.2", "Alertas automáticos"];

export default function SectionAcessoPhytobloom() {
  return (
    <section className="plat_acesso">
      <div className="plat_wrap">
        <Reveal className="plat_acesso_conteudo">
          <div className="plat_acesso_texto">
            <p className="plat_rotulo">Baixe o PhytoBloom</p>
            <h2 className="plat_titulo_seccao">
              Leve o monitoramento de reservatórios para o seu computador
            </h2>
            <p>
              Instale o aplicativo e comece a monitorar seus reservatórios com
              mapas de calor por satélite e alertas automáticos de
              desregulação ambiental.
            </p>

            <div className="plat_acesso_tags">
              {destaques.map((destaque) => (
                <span key={destaque}>{destaque}</span>
              ))}
            </div>

            <a
              href={URL_DOWNLOAD_PHYTOBLOOM}
              className="plat_btn plat_btn_claro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Baixar Software
            </a>
          </div>

          <div className="plat_acesso_janela">
            <div className="plat_acesso_barra">
              <span />
              <span />
              <span />
            </div>
            <img
              src={telaPhytobloom}
              alt="PhytoBloom aberto, analisando um reservatório"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
