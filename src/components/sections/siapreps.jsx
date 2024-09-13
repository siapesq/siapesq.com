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
                    {
                        (window.innerWidth > 1366) ? (
                            <img src={siapreps} alt="Logo da Siapreps" width="565px" height="294" />)
                            : (
                                <div><img src={siapreps} alt="Logo da Siapreps" width="565px" height="294" /></div>
                            )
                    }
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
                    { (window.innerWidth > 1024) ? (
                        <>
                        <h2>A plataforma SIAPREPS disponibiliza aos usuários mapas que  permitem</h2>
                        <h2 style={{ marginLeft: '50px' }}>localizar  e monitorar os cardumes com maior facilidade e precisão</h2>
                        </>
                    ) : (
                        <p>A plataforma SIAPREPS disponibiliza aos usuários mapas que  permitem localizar  e monitorar os cardumes com maior facilidade e precisão</p>
                    )
                    }
                </div>
                <div className="btn_more">
                    <div id="siapreps-enviar">
                        { (window.innerWidth > 1366 ? (
                            <>
                                <div className="tubaraoB"><img width="300px" src={tubarao2} alt=""/></div>
                                <div><NavLink to={"/siapreps"} id="button">Saiba mais</NavLink></div>
                                <div className="peixes"><img width="300px" src={peixes} alt=""/></div>
                            </>
                        ): (
                            <>
                                <img width="300px" src={tubarao2} alt="" className="tubaraoB" />
                                <NavLink to={"/siapreps"} id="button" className="saiba-mais">Saiba mais</NavLink>
                                <img width="300px" src={peixes} alt="" className="peixes" />
                            </>
                        )
                        )}
                    </div>
                </div>
            </div>
        </section>

    )
}