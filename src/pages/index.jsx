import Header from "../components/layouts/header";
import mar from "../imgs/mar.png";
import wave from "../imgs/wave.svg";
import footerV2 from "../imgs/footerV2.png";
import siaprepsMonitor from "../imgs/siaprepsMonitor.svg";
import SectionSiapreps from "../components/sections/siapreps";
import SectionHelps from "../components/sections/helps";
import SectionPhytobloom from "../components/sections/phytobloom.jsx";
import SectionFooter from "../components/sections/siaprepsFooter.jsx";
import SectionParceiros from "../components/sections/parceiros.jsx"


export default function Index() {

    return (
        <>
            <div className="index">
                <section className="header_container">
                    <img src={mar} alt="Imagem de fundo" className="bg_img" />
                    <Header page={'index'} />
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
                <SectionParceiros />
                <SectionFooter />
            </div>
        </>
    )
}