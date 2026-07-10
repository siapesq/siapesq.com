import React from "react";
import { useTranslation } from "react-i18next";
import siapreps from "../../imgs/siaprepsLogo.png";
import iconChecked from "../../imgs/iconChecked.png";
import tubarao from "../../imgs/tubarao.svg";
import peixes from "../../imgs/peixes.svg";
import tubarao2 from "../../imgs/tubarao2.svg";
import { NavLink } from "react-router-dom";

export default function SectionSiapreps() {

    const { t } = useTranslation();

    return (
        <section className="siapreps">
            <div className="siapreps_container">
                <div className="siapreps_logo">
                    <div><img src={siapreps} alt={t("siaprepsHome.logoAlt")} width="565px" height="294" /></div>
                </div>

                <div className="list-column">
                    <ul className="list">
                        <li> <img className="iconChecked" src={iconChecked} width={60} alt={t("common.checkAlt")} /> {t("siaprepsHome.item1")}</li>
                        <li><img className="iconChecked" src={iconChecked} width={60} alt={t("common.checkAlt")} /> {t("siaprepsHome.item2")}</li>
                        <li><img className="iconChecked" src={iconChecked} width={60} alt={t("common.checkAlt")} /> {t("siaprepsHome.item3")}</li>
                    </ul>
                </div>
                <div className="tubarao">
                    <img src={tubarao} alt={t("siaprepsHome.sharkAlt")} />
                </div>
            </div>
            <div className="siapreps_bottom">
                <div className="siapreps_texto">

                    <p>{t("siaprepsHome.description")}</p>
                </div>
                <div className="btn_more">
                    <div id="siapreps-enviar">
                        <div className="tubaraoB"><img src={tubarao2} alt="" /></div>
                        <div><NavLink to={"/siapreps"} id="button" onClick={() =>
                            window.scroll(0,0)
                        }>{t("cta.learnMore")}</NavLink></div>
                        <div className="peixes"><img src={peixes} alt="" /></div>
                    </div>
                </div>
            </div>
        </section>

    )
}