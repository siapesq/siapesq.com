import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../imgs/logo.svg";
import insta from "../../imgs/insta.png";
import zap from "../../imgs/zap.png";
import email from "../../imgs/email.png";
import "../../style/footer/footer.css";

const aoTopo = () => window.scroll(0, 0);

/*
 * Footer padronizado do site.
 * A prop `tema` só troca a COR (mantém a estrutura), pra casar com a
 * identidade de cada plataforma:
 *   "siapesq" (padrão) · "plataforma" · "siapreps" · "phytobloom"
 */
export default function SectionFooter({ tema = "siapesq" }) {
  return (
    <footer className={`sf sf--${tema}`}>
      <div className="sf_top">
        <div className="sf_marca">
          <img src={logo} alt="SIAPESQ" className="sf_logo" />
          <p>
            Inteligência artificial em pesquisa ambiental. Monitoramento e
            visualização de dados de espécies.
          </p>
        </div>

        <nav className="sf_col">
          <h3>Produtos</h3>
          <NavLink to="/siapreps" onClick={aoTopo}>
            SIAPREPS
          </NavLink>
          <NavLink to="/phytobloom" onClick={aoTopo}>
            PhytoBloom
          </NavLink>
          <NavLink to="/plataforma" onClick={aoTopo}>
            Plataforma SIAPESQ
          </NavLink>
        </nav>

        <nav className="sf_col">
          <h3>Institucional</h3>
          <a
            href="https://www.instagram.com/siapesq"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sobre nós
          </a>
          <NavLink to="/contato" onClick={aoTopo}>
            Contato
          </NavLink>
        </nav>

        <div className="sf_col sf_contato">
          <h3>Contato</h3>
          <a
            href="https://www.instagram.com/siapesq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="" /> @siapesq
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5553999503671"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={zap} alt="" /> (53) 99950-3671
          </a>
          <a href="mailto:siapesq@gmail.com">
            <img src={email} alt="" /> siapesq@gmail.com
          </a>
        </div>
      </div>

      <div className="sf_base">
        <p>Copyright © 2024 SIAPESQ. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
