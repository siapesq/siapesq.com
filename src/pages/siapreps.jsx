import React from "react";
import Header from "../components/layouts/header";
import cardume from "../imgs/cardume.png";
// import cardume2 from "../imgs/cardume2.png";
// import peixes from "../imgs/peixes.png";
import siapresqPc from "../imgs/siapresqPc.svg";
// import siapreps from "../imgs/siapreps.svg";
// import logo from "../imgs/logo.svg";
import SectionBarco from "../components/sections/siaprepsBarco";
import SectionPlataforma from "../components/sections/siaprepsPlataforma";
import SectionCardume from "../components/sections/siaprepsCardume";


export default function Index(){

    
    return(
        <>
            <section className="header_container">
                <img src={cardume} alt="Imagem de fundo" className="bg_img"/>
                <Header/>
                <article className="article_header_container">
                <h1>
                    SIAPREPS
                </h1>
                    <p>
                    A plataforma SIAPREPS disponibiliza aos usuários mapas que  permitem localizar  e monitorar os cardumes com maior facilidade e precisão
                     </p>
                    <img src={siapresqPc} alt="Imagem de um notebook da siapreps" />
                     <button className="fundoInvinsivel"> Começar Agora</button> 
                </article>
            </section>
            
          
                <article >
                <SectionBarco />
                </article>
  
                <article >
                <SectionPlataforma />
                </article>

                <article >
                <SectionCardume />
                </article>
         
            {/* <div className="form">
                  <h1 className="contato">Entre em contato conosco! </h1>
                  <img src={peixes} alt="" />
                 
            </div> */}
            {/* <div className="formHead">
            <h1 className="contato">Entre em contato conosco!</h1>
            <img src={peixes} alt="Peixes" className="imagem-peixes" />
            </div>
            <div className="form">
      <form>
        <div className="input-group">
          <input type="text" name="nome" placeholder="Nome" />
          <input type="text" name="sobrenome" placeholder="Sobrenome" />
        </div>
        <input type="email" name="email" placeholder="Email" />
        <textarea name="mensagem" placeholder="Mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div> */}

    {/* <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <a href="https://www.instagram.com/siapesq" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> @siapesq
          </a>
          <a href="tel:+535999503671">
            <i className="fab fa-whatsapp"></i> (53) 99950-3671
          </a>
          <a href="mailto:siapesq@gmail.com">
            <i className="fas fa-envelope"></i> siapesq@gmail.com
          </a>
       
      <div className="footer-bottom">
        <p>Copyright © 2024 SIAPESQ | Powered by SIAPESQ</p>
      </div>
           </div>
        <img src={logo} alt="SIAPESQ Logo" className="logo" />
      </div>
    </footer> */}
        </>
    )
}