import React from "react";
import { useTranslation } from "react-i18next";
import plataformaWeb from "../../imgs/plataformaWeb.png";
import binoculos from "../../imgs/binoculos.png";
import engrenagem from "../../imgs/engrenagem.png";
import gestao from "../../imgs/gestao.png";
import plantImage from "../../imgs/planta.svg";
import '../../style/phytobloom/planta.css';



export default function SectionPlanta() {

    const { t } = useTranslation();

    return (
        <>

<section className="planta">
<article >
    <div className="monitoring-section">
        <img src={plantImage} alt={t("phytobloom.plantaImgAlt")} className="planta-imagem" />
        <div className="content">
            <h2>{t("phytobloom.plantaTitle")}</h2>
            <br /><br />
            <br />
            <ul>
                <li>
                    <img src={plataformaWeb} alt="" />
                    <p>&nbsp;&nbsp;{t("phytobloom.plantaItem1")}</p>
                </li>
                <li>
                    <img src={binoculos} alt="" />
                    <p>&nbsp;&nbsp;{t("phytobloom.plantaItem2")}</p>
                </li>
                <li>
                    <img src={engrenagem} alt="" />
                    <p>&nbsp;&nbsp;{t("phytobloom.plantaItem3")}</p>
                </li>
                <li>
                    <img src={gestao} alt="" />
                    <p>&nbsp;&nbsp;{t("phytobloom.plantaItem4")}</p>
                </li>
            </ul>
        </div>
    </div>
</article>
</section>
        </>
    )
}



