import React, { useRef, useLayoutEffect } from "react";
import siapreps from "../../imgs/siaprepsLogo.png";
import iconChecked from "../../imgs/iconChecked.png";
import tubarao from "../../imgs/tubarao.png";
export default function SectionSiapreps() {


    return (
        <main className="main_siapreps">

            <section className="siapreps">
                <div className="siapreps_container">
                    <div className="siapreps_logo">
                        <img src={siapreps} alt="Logo da Siapreps" width={565} height={294} />
                    </div>

                    <div className="list-column">
                        <ul className="list">
                            <li> <img className="iconChecked" src={iconChecked} width={60} /> Localização do Pescado</li>
                            <li><img className="iconChecked" src={iconChecked} width={60} /> Certificação da Pesca</li>
                            <li><img className="iconChecked" src={iconChecked} width={60} /> Mapa de bordo automatizado</li>
                        </ul>
                    </div>
                    <div className="tubarao">
                        <img src={tubarao} alt="Tubarão" />
                    </div>
                </div>
                <div className="siapreps_bottom">
                    <div className="siapreps_texto">
                        <h2>A plataforma SIAPREPS disponibiliza aos usuários mapas que  permitem</h2>
                        <h2 style={{ marginLeft: '50px' }}>localizar  e monitorar os cardumes com maior facilidade e precisão</h2>
                    </div>
                    <div className="btn_more" style={{ width: '370px', height: '120px', borderRadius: '100px', justifyContent: "center" }}>

                    </div>
                </div>
            </section>

        </main >
    )
}