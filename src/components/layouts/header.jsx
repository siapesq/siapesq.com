import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../imgs/siapesqlogo.svg";
import logoBranca from "../../imgs/siapesqLogoB.png";
import logoResponsivo from "../../imgs/siapesq.png";
import "../../style/styles/header.css"

export default function Header({page=''}) {
    return (
        <header className={`header ${page}`}>
            <nav>
                {<ul>
                            <NavLink to={"/siapreps"} className='links'>
                                SIAPREPS
                            </NavLink>
                            <NavLink to={"/phytobloom"} className='links' >
                                PHYTOBLOOM
                            </NavLink>
                            <NavLink to={"/"}>
                                <img src={logo} alt="Logo da siapesq na coloração azul" className="logoAzul"/>
                                <img src={logoBranca} alt="Logo da siapesq na branca" className="logoBranca"/>
                                <img src={logoResponsivo} alt="Logo da siapesq branca e com informações adicionais" className="logoResponsiva"/>
                            </NavLink>
                            <NavLink to={"/about"} className='links'>
                                SOBRE NÓS
                            </NavLink>
                            <NavLink to={"/contato"} className='links'>
                                CONTATO
                            </NavLink>
                            <NavLink to={"/"} className="responsiveButton">
                                <button>TESTAR AGORA</button>
                            </NavLink>
                        </ul>
                }
            </nav>
        </header>
    )
}