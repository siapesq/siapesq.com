import React from "react";
import '../../style/contato/form.css';
import Header from "../layouts/header";


export default function SectionForm(){

    
    return(
        <>
    <div>
       <Header/>
    </div>
     <div className="contactcontainer">
        <div>
        <h1>Entre em contato conosco!</h1>
        <br />
        <h1>@siapesq</h1>
        <br />
        <h1>(53) 99950-3671</h1>
        <br />
        <h1>siapesq@gmail.com</h1>
        </div>
      <div className="form-content">
        <div id="textoform">
        </div>
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
          <button id="botao"> enviar</button>
        </form>
      </div>
    </div>
        </>
      )
    }