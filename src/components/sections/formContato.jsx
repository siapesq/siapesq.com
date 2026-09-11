import React from "react";
import "../../style/contato/form.css";
import Header from "../layouts/header";

const IconInsta = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export default function SectionForm() {
  return (
    <div className="contato">
      <Header />

      <div className="contactContainer">
        <div className="form-infos">
          <p className="contato_eyebrow">Contato</p>
          <h1>Entre em contato conosco</h1>
          <p className="contato_lead">
            Tire dúvidas sobre a Plataforma SIAPESQ, o SIAPREPS e o PhytoBloom,
            ou fale com a gente sobre parcerias.
          </p>

          <ul className="contato_list">
            <li>
              <a href="https://www.instagram.com/siapesq" target="_blank" rel="noopener noreferrer">
                <span className="contato_icon"><IconInsta /></span>
                @siapesq
              </a>
            </li>
            <li>
              <a href="tel:+5553999503671">
                <span className="contato_icon"><IconPhone /></span>
                (53) 99950-3671
              </a>
            </li>
            <li>
              <a href="mailto:siapesq@gmail.com">
                <span className="contato_icon"><IconMail /></span>
                siapesq@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="form-content">
          <form className="contato_form">
            <div className="input-group">
              <div className="input-item">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" placeholder="Seu nome" />
              </div>
              <div className="input-item">
                <label htmlFor="sobrenome">Sobrenome</label>
                <input type="text" id="sobrenome" placeholder="Seu sobrenome" />
              </div>
            </div>
            <div className="input-item">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="voce@email.com" />
            </div>
            <div className="input-item">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" placeholder="Como podemos ajudar?"></textarea>
            </div>
            <button id="botao" type="submit">Enviar mensagem</button>
          </form>
        </div>
      </div>
    </div>
  );
}
