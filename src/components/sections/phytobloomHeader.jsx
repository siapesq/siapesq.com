import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../layouts/header";
import hidro from "../../imgs/hidro.png";
import Phytobloom from "../../imgs/PhytobloomNome.svg"
import '../../style/phytobloom/header.css';


export default function SectionHeader() {

    const { t } = useTranslation();

    return (
        <>
            <section className="headerContainer">
                <img src={hidro} alt={t("common.backgroundAlt")} className="hidro" />
                <Header />
                <article className="article-header-container">
                    <img src={Phytobloom} alt={t("phytobloom.nameAlt")} id="phytobloom" />
                    {/* <iframe src='https://my.spline.design/untitled-0db1be3080710c809a983f6ac647274f/' frameborder='0' width='100%' height='100%'></iframe> */}

                    <p id="textophytobloom">
                        {t("phytobloom.headerText")}
                    </p>
                    <button className="fundoInvinsivel"> <a href="https://github.com/siapesq/phybloom-release-mirror/releases/download/v2.0.1/phytobloom-Setup-2.0.1.exe" target="_blank" rel="noopener noreferrer">{t("cta.downloadSoftware")}</a></button>
                    <p style={{ fontSize: '12px' }}>{t("download.version", { version: "2.0.1" })} <br></br> {t("download.availableFor")} <b>{t("download.windows")}</b></p>

                </article>
            </section >

        </>
    )
}