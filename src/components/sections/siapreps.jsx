import React from "react";
import siapreps from "../../imgs/siaprepsLogo.png";
import iconChecked from "../../imgs/iconChecked.png";
import tubarao from "../../imgs/tubarao.png";
import peixes from "../../imgs/peixes.svg";
import tubarao2 from "../../imgs/tubarao2.png";
import { NavLink } from "react-router-dom";
export default function SectionSiapreps() {


    return (
        <section className="siapreps">
            <div className="siapreps_container">
                <div className="siapreps_logo">
                    <div><img src={siapreps} alt="Logo da Siapreps" width="565px" height="294" /></div>
                </div>

                <div className="list-column">
                    <ul className="list">
                        <li> <img className="iconChecked" src={iconChecked} width={60} alt="check" /> Localização do Pescado</li>
                        <li><img className="iconChecked" src={iconChecked} width={60} alt="check" /> Certificação da Pesca</li>
                        <li><img className="iconChecked" src={iconChecked} width={60} alt="check" /> Mapa de bordo automatizado</li>
                    </ul>
                </div>
                <div className="tubarao">
                    <img src={tubarao} alt="Tubarão" />
                </div>
            </div>
            <div className="siapreps_bottom">
                <div className="siapreps_texto">

                    <p>A plataforma SIAPREPS disponibiliza aos usuários mapas que  permitem localizar  e monitorar os cardumes com maior facilidade e precisão</p>
                </div>
                <div className="btn_more">
                    <div id="siapreps-enviar">

                        <div className="tubaraoB"><img src={tubarao2} alt="" /></div>
                        <div><NavLink to={"/siapreps"} id="button">Saiba mais</NavLink></div>
                        <div className="peixes"><img src={peixes} alt="" /></div>
                    </div>
                </div>
            </div>
        </section>

    )
}