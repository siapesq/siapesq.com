import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../imgs/siapesqlogo.svg";
import logoBranca from "../../imgs/siapesqLogoB.png";
import logoResponsivo from "../../imgs/siapesq.png";
import LanguageSwitcher from "../common/LanguageSwitcher";
import "../../style/styles/header.css"

export default function Header({page=''}) {
    const { t } = useTranslation();
    return (
        <header className={`header ${page}`}>
            <nav>
                {<ul>
                            <NavLink to={"/siapreps"} className='links'>
                                {t("nav.siapreps")}
                            </NavLink>
                            <NavLink to={"/phytobloom"} className='links' >
                                {t("nav.phytobloom")}
                            </NavLink>
                            <NavLink to={"/"}>
                                <img src={logo} alt={t("nav.logoAltBlue")} className="logoAzul"/>
                                <img src={logoBranca} alt={t("nav.logoAltWhite")} className="logoBranca"/>
                                <img src={logoResponsivo} alt={t("nav.logoAltResponsive")} className="logoResponsiva"/>
                            </NavLink>
                            <a href="https://www.instagram.com/siapesq" className="links">{t("nav.about")}</a>
                            {/* <NavLink to={"/off"} className='links'>
                                {t("nav.about")}
                            </NavLink> */}
                            <NavLink to={"/contato"} className='links'>
                                {t("nav.contact")}
                            </NavLink>
                            <NavLink to={"/"} className="responsiveButton">
                            </NavLink>
                        </ul>
                }
            </nav>
            <LanguageSwitcher />
        </header>
    )
}
