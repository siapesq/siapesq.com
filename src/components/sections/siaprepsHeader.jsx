//import 'animate.css';
import React from "react";
import { useTranslation } from "react-i18next";
// import cardume from "../../imgs/cardume.png";
import siaprepsNome from "../../imgs/NomeSiapreps.svg";
import siapresqPc from "../../imgs/siapresqPc.svg";
import '../../style/siapreps/siapreps_Header/Header.css';
import Header from "../layouts/header";

export default function SectionHeader() {
    const { t } = useTranslation();
    return (
        <>
            <section className="headerContainer siaprepsContainer">
                <Header />

                <article className="articleHeaderContainer">

                    <h1 id="siapreps" className="animate__animated animate__zoomIn">
                        <img src={siaprepsNome} alt={t("siapreps.nameAlt")} id="imgsiapreps" />
                    </h1>

                    <div>
                        <p id="textosiapreps" className="animate__animated animate__fadeIn">
                            {t("siapreps.description")}
                        </p>
                    </div>

                    <div className="botaoContainer">
                        <button className="fundoInvinsivel"> <a href=" https://github.com/siapesq/siapreps-release-mirror/releases/download/1.0.21/SIAPREPS.Setup.1.0.21." target="_blank" rel="noopener noreferrer">
                            {t("cta.downloadSoftware")}</a>
                        </button>

                        <p className="versaoSiapreps">
                            {t("download.version", { version: "1.0.20" })} <br /> {t("download.availableFor")}   {t("download.windows")}
                        </p>
                    </div>

                    <div>
                        <img
                            id="notesiapreps"
                            src={siapresqPc}
                            alt={t("siapreps.notebookAlt")}
                            className="animate__animated animate__slideInUp"
                        />
                    </div>

                </article>
            </section>
        </>
    );
}
