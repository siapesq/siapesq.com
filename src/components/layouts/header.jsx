import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../imgs/siapesqlogoazul.svg";
import logoBranca from "../../imgs/siaprepsLogoB.png";
import logoResponsivo from "../../imgs/siapesq.png";
import "../../style/styles/header.css"

export default function Header({ page = '' }) {
    return (
        <header className={`header ${page}`}>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                            to={"/siapreps"} 
                            className='links'
                            activeClassName="active" 
                        >
                            SIAPREPS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={"/phytobloom"} 
                            className='links'
                            activeClassName="active" 
                        >
                            PHYTOBLOOM
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <img 
                                src={window.innerWidth > 1150 
                                    ? (page === 'index' ? logo : logoBranca) 
                                    : logoResponsivo
                                } 
                                alt="Logo da siapesq" 
                            />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={"off"} 
                            className='links'
                            activeClassName="active" 
                        >
                            SOBRE NÓS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={"/contato"} 
                            className='links'
                            activeClassName="active" 
                        >
                            CONTATO
                        </NavLink>
                    </li>
                    <li className="responsiveButton">
                        <NavLink to={"/"} className="responsiveButton">
                            <button>TESTAR AGORA</button>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
