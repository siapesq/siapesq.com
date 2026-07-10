import React from "react";
import { useTranslation } from "react-i18next";
import phytobloom from "../../imgs/Phytobloom.svg";
import '../../style/phytobloom/PhytoBloom.css';
import iconChecked from "../../imgs/iconChecked.png";
import { NavLink } from "react-router-dom";


export default function SectionPhytobloom() {

  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <header className="header">
          <div className="header-text">
            <ul>
              <li>
                <img className="iconChecked" src={iconChecked} width={60} alt={t("common.checkAlt")} />
                {t("phytobloomHome.item1")}</li>
              <li>
                <img className="iconChecked" src={iconChecked} width={60} alt={t("common.checkAlt")} />
                {t("phytobloomHome.item2")}</li>
              <li>
                <img className="iconChecked" src={iconChecked} width={60} alt={t("common.checkAlt")} />
                {t("phytobloomHome.item3")}</li>
            </ul>
          </div>
          <div className="logo">
            <div>
              <img src={phytobloom} alt={t("phytobloomHome.logoAlt")} />
            </div>
          </div>
        </header>
        <main>
          <p>
            {t("phytobloomHome.description")}
          </p>
          <NavLink to={"/phytobloom"} className="saiba-mais" onClick={() =>
            window.scroll(0, 0)
          }>{t("cta.learnMore")}</NavLink>
        </main>
      </div>
    </>
  )
}
