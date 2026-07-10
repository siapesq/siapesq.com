import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../layouts/header";
import siapesq from "../../imgs/siapesqq.svg";
import equipe from "../../imgs/equipe.svg";
import '../../style/about/header.css';

export default function SectionHead() {
    const { t } = useTranslation();
    return (
        <>
            <div className="headersobre">
                <div className="aboutContainer">
                    <Header/>
                    <div className="imagemsiapesq">
                        <img className="sistema-img" src={siapesq} alt={t("about.systemAlt")} />
                        <div className="textoSobrenos">
                            <p>{t("about.intro")}</p>
                        </div>
                    </div>
                    <div className="equipe">
                        <img className="imagem-equipe" src={equipe} alt={t("about.teamAlt")} />
                        <h1>{t("about.teamTitle")}</h1>
                    </div>
                </div>
           </div>

        </>
    );
}
