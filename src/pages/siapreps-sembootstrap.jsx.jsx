import React from "react";
import Header from "../components/layouts/header";
import cardume from "../imgs/cardume.png";
import cardume2 from "../imgs/cardume2.png";
import peixes from "../imgs/peixes.png";
import siapresqPc from "../imgs/siapresqPc.svg";
import naviocarga from "../imgs/barcocontainer.svg";
import siapreps from "../imgs/siapreps.svg";
import logo from "../imgs/logo.svg";


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
            
            <section className="barco">
                <article >
                <img src={naviocarga} alt="Imagem de um barco de carga" />
                <h1 id="titulochocante">O Problema</h1>
                {/* <p className="porcentagem">3%</p>
                <p className="text">do total de Gases do Efeito Estufa (GEE) lançados na atmosfera</p>
                <p className="porcentagem2" >50%</p>
                <p className="text2">do óleo diesel é desperdiçado durante a procura por peixesS</p>
                <p className="porcentagem3">MAIOR</p>
                <p className="text3">Parte do tempo de uma navegação é utilizada para procurar peixes.</p> */}
                <div className="stats-container">
      <div className="stat-item">
        <p className="porcentagem">3%</p>
        <p className="text">do total de Gases do Efeito Estufa (GEE) lançados na atmosfera</p>
      </div>
      <div className="stat-item">
        <p className="porcentagem">50%</p>
        <p className="text">do óleo diesel é desperdiçado durante a procura por peixes</p>
      </div>
      <div className="stat-item">
        <p className="porcentagem">MAIOR</p>
        <p className="text">Parte do tempo de uma navegação é utilizada para procurar peixes.</p>
      </div>
    </div>
                </article>
            </section>

            <section className="plataforma">
                <article >
                <img src={siapreps} alt="Imagem de platforma siapreps" />
                <h1 id="azulzinha">A plataforma SIAPREPS disponibiliza aos usuários mapas que  permitem localizar  e monitorar os cardumes com maior facilidade e precisão.</h1>
                <button className="fundoInvinsivel"> Começar Agora</button> 
                </article>
            </section>
            {/* <div className="cards">
                          <h1>Veja as principais espécies rastreáveis</h1>
                          <p>Tenha praticidade e eficiencia para atividade pesqueira. Te mostramos a localização do peixe.</p>
                          <img src={cardume2} alt="" />
                          <img src={cardume2} alt="" />
                          <img src={cardume2} alt="" />
                          <h2>Cardume Cardume Cardume</h2>
                          <p>Obs: Nós filtramos áreas com menor probabilidade de haver animais proibidos de pesca, como tubaroes, baleias, e tartarugas</p>
            </div> */}
            <div className="cards">
      <h1>Veja as principais espécies rastreáveis</h1>
      <p>Tenha praticidade e eficiência para atividade pesqueira. Te mostramos a localização do peixe.</p>
      <div className="card-container">
        <div className="card">
          <h2>Tainha</h2>
          <img src={cardume2} alt="Tainha" />
          <p>Especies especies</p>
        </div>
        <div className="card">
          <h2>Bagre</h2>
          <img src={cardume2} alt="Bagre" />
          <p>Especies especies</p>
        </div>
        <div className="card">
          <h2>Salmão</h2>
          <img src={cardume2} alt="Salmão" />
          <p>Especies especies</p>
        </div>
        <div className="card">
          <h2>Peixe lua</h2>
          <img src={cardume2} alt="Peixe lua" />
          <p>Especies especies</p>
        </div>
      </div>
      <p className="obs">Obs: Nós filtramos áreas com menor probabilidade de haver animais proibidos de pesca, como tubarões, baleias, e tartarugas</p>
    </div>
            {/* <div className="form">
                  <h1 className="contato">Entre em contato conosco! </h1>
                  <img src={peixes} alt="" />
                 
            </div> */}
            <div className="formHead">
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
    </div>

    <footer className="footer">
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
    </footer>
        </>
    )
}