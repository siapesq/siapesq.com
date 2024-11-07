import React from "react";
import '../../style/contato/form.css';
import Header from "../layouts/header";


export default function SectionForm() {


  return (
    <div className="formContato">
      <div>
        <Header />
      </div>
      <div className="contactContainer">
        <div className="form-infos">
          <h1>Entre em contato conosco!</h1>
          <br />
          <p>@siapesq</p>
          <br />
          <p>(53) 99950-3671</p>
          <br />
          <p>siapesq@gmail.com</p>
        </div>
        <div className="form-content">
          <div id="textoform">
          </div>
          <form className="formContato">
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
            <button id="botao"> enviar</button>
          </form>
        </div>
      </div>
    </div>
  )
}