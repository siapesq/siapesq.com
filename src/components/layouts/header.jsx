import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../imgs/siapesqlogo.svg";
import logoBranca from "../../imgs/siapesqLogoB.png";
import logoResponsivo from "../../imgs/siapesq.png";
import "../../style/styles/header.css";

export default function Header({ logoCor = true }) {
  return (
    <header className={`header`}>
      <nav>
        {
          <ul>
            <NavLink to={"/siapreps"} className="links">
              SIAPREPS
            </NavLink>
            <NavLink to={"/phytobloom"} className="links">
              PHYTOBLOOM
            </NavLink>
            <NavLink to={"/"}>
              {logoCor ? (
                <img src={logo} alt="Logo da siapesq na coloração azul" />
              ) : (
                <img src={logoBranca} alt="Logo da siapesq na branca" />
              )}
              <img
                src={logoResponsivo}
                alt="Logo da siapesq branca e com informações adicionais"
                className="logoResponsiva"
              />
            </NavLink>
            <a href="https://www.instagram.com/siapesq" className="links">
              SOBRE NÓS
            </a>
            {/* <NavLink to={"/off"} className='links'>
                                SOBRE NÓS
                            </NavLink> */}
            <NavLink to={"/contato"} className="links">
              CONTATO
            </NavLink>
            <NavLink to={"/"} className="responsiveButton">
              Testar agora
            </NavLink>
          </ul>
        }
      </nav>
    </header>
  );
}
