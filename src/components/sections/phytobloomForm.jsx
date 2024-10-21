import React from "react";
import '../../style/phytobloom/form.css';


export default function SectionForm(){

    
    return(
        <>
     <div className="contact-container phytobloomContact">
        <div id="textoform">
        <h1 id="h1Phytobloom">Entre em contato conosco!</h1>
        </div>
      <div className="form-content">
        <form id="formPhytobloom">
          <div className="input-group">
            <div className="input-item">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" placeholder="Nome" />
            </div>
            <div className="input-item">
              <label htmlFor="sobrenome">Sobrenome</label>
              <input type="text" id="sobrenome" placeholder="Sobrenome" />
            </div>
          </div>
          <div className="input-item">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="input-item">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" placeholder="Mensagem"></textarea>
          </div>
          <button id="botaoPhytobloom"> enviar</button>
        </form>
      </div>
    </div>
        </>
      )
    }