import React from "react";
import plataformaWeb from "../../imgs/plataformaWeb.png";
import binoculos from "../../imgs/binoculos.png";
import engrenagem from "../../imgs/engrenagem.png";
import gestao from "../../imgs/gestao.png";
import plantImage from "../../imgs/planta.svg";
import '../../style/phytobloom/planta.css';



export default function SectionPlanta() {


    return (
        <>

<section className="planta">
<article >
    <div className="monitoring-section">
        <img src={plantImage} alt="Planta aquática" className="planta-imagem" />
        <div className="content">
            <h2>Possibilitamos o monitoramento de plantas aquáticas</h2>
            <br /><br />
            <br />
            <ul>
                <li>
                    <img src={plataformaWeb} alt="" />
                    <p>&nbsp;&nbsp;Plataforma web</p>
                </li>
                <li>
                    <img src={binoculos} alt="" />
                    <p>&nbsp;&nbsp;Monitora e prevê a proliferação de plantas aquáticas</p>
                </li>
                <li>
                    <img src={engrenagem} alt="" />
                    <p>&nbsp;&nbsp;Gestão eficiente e oportuna da vegetação</p>
                </li>
                <li>
                    <img src={gestao} alt="" />
                    <p>&nbsp;&nbsp;Planejamento de intervenções de maneira eficiente</p>
                </li>
            </ul>
        </div>
    </div>
</article>
</section>
        </>
    )
}



