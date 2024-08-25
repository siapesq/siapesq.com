import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../imgs/logo.svg";
// import "../../style/styles/header.css"

export default function Header(){
    return(
        <header className="header">
            <nav>
                <ul>
                    <NavLink to={"/siapreps"}>
                        SIAPREPS
                    </NavLink>
                    <NavLink to={"/phytobloom"}>
                        PHYTOBLOOM
                    </NavLink>
                    <NavLink to={"/"}>
                        <img src={logo} alt="Logo da siapesq"/>
                    </NavLink>
                    <NavLink to={"/about"}>
                        SOBRE NÓS
                    </NavLink>
                    <NavLink to={"/contato"}>
                        CONTATO
                    </NavLink>    
                </ul>
            </nav>
        </header>
    )
}