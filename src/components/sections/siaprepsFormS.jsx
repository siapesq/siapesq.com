import React from "react";
import peixe from "../../imgs/peixes.svg";
import '../../style/siapreps/siapreps_FormS/FormS.css';


export default function SectionformS(){

    
    return(
        <>
     <div className="contato-container">
      <div className="peixe-logo">
        <h1 id="peixetext">Entre em contato conosco!</h1>
        <img src={peixe} alt="babys sharks" />
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