import React from "react";
import { useTranslation } from "react-i18next";
import '../../style/contato/form.css';
import Header from "../layouts/header";


export default function SectionForm() {

  const { t } = useTranslation();

  return (
    <div className="formContato">
      <div>
        <Header />
      </div>
      <div className="contactContainer">
        <div className="form-infos">
          <h1>{t("form.title")}</h1>
          <br />
          <p>{t("contact.instagram")}</p>
          <br />
          <p>{t("contact.phone")}</p>
          <br />
          <p>{t("contact.email")}</p>
        </div>
        <div className="form-content">
          <div id="textoform">
          </div>
          <form className="formContato">
            <div className="input-group">
              <div className="input-item">
                <label htmlFor="nome">{t("form.firstName")}</label>
                <input type="text" id="nome" placeholder={t("form.firstName")} />
              </div>
              <div className="input-item">
                <label htmlFor="sobrenome">{t("form.lastName")}</label>
                <input type="text" id="sobrenome" placeholder={t("form.lastName")} />
              </div>
            </div>
            <div className="input-item">
              <label htmlFor="email">{t("form.email")}</label>
              <input type="email" id="email" placeholder={t("form.email")} />
            </div>
            <div className="input-item">
              <label htmlFor="mensagem">{t("form.message")}</label>
              <textarea id="mensagem" placeholder={t("form.message")}></textarea>
            </div>
            <button id="botao">{t("form.send")}</button>
          </form>
        </div>
      </div>
    </div>
  )
}
