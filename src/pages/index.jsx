import React, { useRef, useLayoutEffect } from "react";
import Header from "../components/layouts/header";
// import Card from "../components/common/card";
import mar from "../imgs/mar.png";
import wave from "../imgs/wave.svg";
import siaprepsMonitor from "../imgs/siaprepsMonitor.svg";
// import satelite from "../imgs/satelite.svg";
// import lupa from "../imgs/lupa.svg";
// import mapa from "../imgs/mapa.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SectionSiapreps from "../components/sections/siapreps";
import SectionHelps from "../components/sections/helps";
// import SectionPhytobloom from "../components/sections/phytobloom.jsx";
// import SectionFooter from "../components/sections/siaprepsFooter.jsx";
import "../style/index/index.css"
export default function Index() {

    const el = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    scrub: true,
                    start: "top 20px",
                    end: "bottom 1000px"
                }
            })
                .fromTo("#card-1", { x: 120, opacity: 0 }, { x: 0, opacity: 1 })
                .fromTo("#card-2", { x: 120, opacity: 0 }, { x: 0, opacity: 1 })
                .fromTo("#card-3", { x: 120, opacity: 0 }, { x: 0, opacity: 1 })
        }, el.current);

        return () => gsap.killTweensOf(".helps");
    })

    return (
        <>
            <section className="header_container">
                <img src={mar} alt="Imagem de fundo" className="bg_img" />
                <Header />
                <article className="article_header_container">
                    <img src={siaprepsMonitor} alt="Imagem de um monitor da siapreps" />
                    <h2 id="h2principal" >
                        INOVAÇÃO TECNOLÓGICA ALIADA À SUSTENTILIDADE AMiENTAL
                    </h2>
                    <p id="pprincipal">
                        Sistema de Inteligência Artificial em Pesquisa Ambiental
                        Inovação em Rastreabilidade e Modelagem Ecológica. Otimização e Adequação ESG dos Setores Produtivos.
                    </p>
                </article>
                <footer className="footer_header_container">
                    <img src={wave} alt="Ondas do rodapé" />
                    <article>
                        <div>
                            <h2 className="title">
                                Inovação
                            </h2>
                            <p className="content">
                                1° colocada na pré-incubação de Rio Grande (2021)
                            </p>
                        </div>
                        <span className="tracejado"></span>
                        <div>
                            <h2 className="title">
                                Aceleração
                            </h2>
                            <p className="content">
                                Pelo governo estadual do RS
                            </p>
                        </div>
                        <span className="tracejado tr2"></span>
                        <div>
                            <h2 className="title">
                                Impacto
                            </h2>
                            <p className="content">
                                Startup destaque no Innovativa
                            </p>
                        </div>
                    </article>
                </footer>
            </section>

            <main>
                <SectionHelps />
            </main>
            <main>
            <SectionSiapreps />
            </main>
            {/* <main>
            <SectionPhytobloom />
            </main> */}
            {/* <main>
            <SectionFooter />
            </main> */}
        </>
    )
}