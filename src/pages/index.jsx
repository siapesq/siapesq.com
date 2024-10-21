// eslint-disable-next-line
import React, { useRef, useLayoutEffect, } from "react";

import Header from "../components/layouts/header";
// import Card from "../components/common/card";
import mar from "../imgs/mar.png";
import wave from "../imgs/wave.svg";
import footerV2 from "../imgs/footerV2.png";
import siaprepsMonitor from "../imgs/siaprepsMonitor.svg";
// import satelite from "../imgs/satelite.svg";
// import lupa from "../imgs/lupa.svg";
// import mapa from "../imgs/mapa.svg";

// eslint-disable-next-line
import gsap from "gsap";
// eslint-disable-next-line
import { ScrollTrigger } from "gsap/all";


import SectionSiapreps from "../components/sections/siapreps";
import SectionHelps from "../components/sections/helps";
import SectionPhytobloom from "../components/sections/phytobloom.jsx";
import SectionFooter from "../components/sections/siaprepsFooter.jsx";
import SectionParceiros from "../components/sections/parceiros.jsx"
import CarrosselEquipe from "../components/sections/equipe.jsx";


export default function Index() {

    // const el = useRef(null);

    // useLayoutEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     gsap.context(() => {
    //         gsap.timeline({
    //             scrollTrigger: {
    //                 scrub: true,
    //                 start: "top 20px",
    //                 end: "bottom 1000px"
    //             }
    //         })
    //             .fromTo("#card-1", { x: 120, opacity: 0 }, { x: 0, opacity: 1 })
    //             .fromTo("#card-2", { x: 120, opacity: 0 }, { x: 0, opacity: 1 })
    //             .fromTo("#card-3", { x: 120, opacity: 0 }, { x: 0, opacity: 1 })
    //     }, el.current);

    //     return () => gsap.killTweensOf(".helps");
    // })

    return (
        <>
            <div className="index">
                <section className="header_container">
                    <img src={mar} alt="Imagem de fundo" className="bg_img" />
                    <Header page={'index'} />
                    {(window.innerWidth > 1024)
                        ? (
                            <article className="article_header_container">
                                <img src={siaprepsMonitor} alt="Imagem de um monitor da siapreps" />
                                <h2 id="h2principal" >
                                    INOVAÇÃO TECNOLÓGICA ALIADA À SUSTENTILIDADE AMBIENTAL
                                </h2>
                                <p id="pprincipal">
                                    Sistema de Inteligência Artificial em Pesquisa Ambiental
                                    Inovação em Rastreabilidade e Modelagem Ecológica. Otimização e Adequação ESG dos Setores Produtivos.
                                </p>
                            </article>
                        ) : (
                            <article className="article_header_container">
                                <div>
                                    <h2 id="h2principal" >
                                        INOVAÇÃO TECNOLÓGICA ALIADA À SUSTENTILIDADE AMBIENTAL
                                    </h2>
                                    <p id="principal">
                                        Sistema de Inteligência Artificial em Pesquisa Ambiental
                                        Inovação em Rastreabilidade e Modelagem Ecológica. Otimização e Adequação ESG dos Setores Produtivos.
                                    </p>
                                    <button>COMEÇAR</button>
                                </div>
                                <img src={siaprepsMonitor} alt="Imagem de um monitor da siapreps" />
                            </article>
                        )}
                    <footer className="footer_header_container">
                        <img src={window.innerWidth > 1366 ? wave : footerV2} alt="Ondas do rodapé" />
                        {(window.innerWidth > 1366) ?
                            (
                                <article>
                                    <div>
                                        <h2 className="title">
                                            Inovação
                                        </h2>
                                        <p className="content">
                                            Inteligência Artificial em Monitoramento Satelital
                                        </p>
                                    </div>
                                    <span className="tracejado"></span>
                                    <div>
                                        <h2 className="title">
                                            Otimização
                                        </h2>
                                        <p className="content">
                                            Suporte para tomada de decisões
                                        </p>
                                    </div>
                                    <span className="tracejado tr2"></span>
                                    <div>
                                        <h2 className="title">
                                            Impacto
                                        </h2>
                                        <p className="content">
                                            Resiliência Produtiva e Sustentabilidade
                                        </p>
                                    </div>
                                </article>
                            )
                            : <></>
                        }
                    </footer>
                </section>

                <SectionHelps />
                <SectionSiapreps />
                <SectionPhytobloom />
                <CarrosselEquipe/>
                <SectionParceiros />
                <SectionFooter />
            </div>
        </>
    )
}