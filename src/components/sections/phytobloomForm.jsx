import React from "react";
import '../../style/phytobloom/form.css';


export default function SectionForm(){

    
    return(
        <>
     <div className="contact-container">
        <div id="textoform">
        <h1>Entre em contato conosco!</h1>
        </div>
      <div className="form-content">
        <form>
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
        </form>
      </div>
    </div>
        </>
      )
    }