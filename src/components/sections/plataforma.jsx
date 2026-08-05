import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../imgs/siapesqlogo.svg";
import iconChecked from "../../imgs/iconChecked.png";
import "../../style/plataforma/plataforma.css";

export default function SectionPlataforma() {
  return (
    <section className="homeplat">
      <div className="homeplat_container">
        <div className="homeplat_logo">
          <div>
            <img src={logo} alt="Logo da plataforma SIAPESQ" />
          </div>
        </div>

        <div className="homeplat_list">
          <ul>
            <li>
              <img className="homeplat_check" src={iconChecked} alt="" />
              Mapas de distribuição das espécies
            </li>
            <li>
              <img className="homeplat_check" src={iconChecked} alt="" />
              Projeções para 2050 e 2100
            </li>
            <li>
              <img className="homeplat_check" src={iconChecked} alt="" />
              Predições e relatórios para exportar
            </li>
          </ul>
        </div>
      </div>

      <div className="homeplat_bottom">
        <p className="homeplat_texto">
          A plataforma SIAPESQ disponibiliza mapas interativos que permitem
          localizar, monitorar e projetar a distribuição das espécies, do
          cenário atual às projeções de 2050 e 2100, com facilidade e precisão
          científica.
        </p>

        <NavLink
          to={"/plataforma"}
          className="homeplat_btn"
          onClick={() => window.scroll(0, 0)}
        >
          Saiba mais
        </NavLink>
      </div>
    </section>
  );
}
