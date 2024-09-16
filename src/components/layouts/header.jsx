import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../imgs/siapesqlogo.svg";
import logoBranca from "../../imgs/siaprepsLogoB.png";
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
                                <img src={
                                window.innerWidth > 1000 ? (page === 'index' ? logo : logoBranca) 
                                    : logoResponsivo
                                } alt="Logo da siapesq" />
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