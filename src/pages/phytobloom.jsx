import React from "react";
import Header from "../components/layouts/header";
import hidro from "../imgs/hidro.png";
import plataformaWeb from "../imgs/plataformaWeb.png";
import binoculos from "../imgs/binoculos.png";
import engrenagem from "../imgs/engrenagem.png";
import gestao from "../imgs/gestao.png";
import zap from "../imgs/zap.png";
import insta from "../imgs/insta.png";
import email from "../imgs/email.png";
import plantImage from "../imgs/planta.svg";
import phytonbloom from "../imgs/phytonbloom.svg";
import logo from "../imgs/logo.svg";
import verdinha from "../imgs/verdinha.svg";


export default function Phytobloom() {


    return (
        <>
            <section className="header_container">
                <img src={hidro} alt="Imagem de fundo" className="bg_img" />
                <Header />
                <article className="article_header_container">
                    <h1>
                        PHYTOBLOOM
                    </h1>
                    <p>
                        Com PHYTOBLOOM VISION é possível identificar a proliferação de plantas aquáticas garantindo uma gestão eficiente e oportuna da vegetação.
                    </p>

                    <button className="fundoInvinsivel"> Começar Agora</button>
                </article>
            </section>

            <section className="planta">
                <article >
                    <div className="monitoring-section">
                        <img src={plantImage} alt="Planta aquática" className="planta-imagem" />
                        <div className="content">
                            <h2>Possibilitamos o monitoramento de plantas aquáticas</h2>
                            <br /><br />
                            <br />
                            <ul>
                                <li>
                                    <img src={plataformaWeb} alt="" />
                                    <p>&nbsp;&nbsp;Plataforma web</p>
                                </li>
                                <li>
                                    <img src={binoculos} alt="" />
                                    <p>&nbsp;&nbsp;Monitora e prevê a proliferação de plantas aquáticas</p>
                                </li>
                                <li>
                                    <img src={engrenagem} alt="" />
                                    <p>&nbsp;&nbsp;Gestão eficiente e oportuna da vegetação</p>
                                </li>
                                <li>
                                    <img src={gestao} alt="" />
                                    <p>&nbsp;&nbsp;Planejamento de intervenções de maneira eficiente</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </section>
            <section className="video">
                <h1>Plataforma Phytobloom</h1>
                <p><iframe width="90%" height="800px" src="https://www.youtube.com/embed/QWzZbOT9eRw?si=doZaJVB7qHK8pK17" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>
                <h1>Veja uma demostração</h1>
            </section>

            <section className="plataforma">
                <article >
                    <img src={phytonbloom} alt="Imagem de platforma phytonbloom" />
                    <h1 id="azulzinha"><img src={verdinha} alt="" /></h1>
                    <button className="fundoInvinsivel"> Começar Agora</button>
                </article>
            </section>


            <div className="form">
                <h1 className="contato">Entre em contato conosco!</h1>
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
                            <img src={insta} alt="" /> @siapesq
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5553999503671">
                            <img src={zap} alt="" /> (53) 99950-3671
                        </a>
                        <a href="mailto:siapesq@gmail.com">
                            <img src={email} alt="" /> siapesq@gmail.com
                        </a>

                        <div className="footer-bottom">
                            <img src={logo} alt="SIAPESQ Logo" className="logo" />
                        </div>
                    </div>
                    <p>Copyright © 2024 SIAPESQ | Powered by SIAPESQ</p>
                </div>
            </footer>
        </>
    )
}