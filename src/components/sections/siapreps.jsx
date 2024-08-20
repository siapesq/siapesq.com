import React, { useRef, useLayoutEffect } from "react";
import siapreps from "../../imgs/siaprepsLogo.png";
import iconChecked from "../../imgs/iconChecked.png";
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
                </div>
            </section>

        </main >
    )
}