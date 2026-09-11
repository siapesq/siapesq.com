import Header from "../components/layouts/header";
import Reveal from "../components/common/Reveal";
import mar from "../imgs/mar.webp";
import wave from "../imgs/wave.svg";
import footerV2 from "../imgs/footerV2.png";
import siaprepsMonitor from "../imgs/siaprepsMonitor.webp";
import SectionSiapreps from "../components/sections/siapreps";
import SectionHelps from "../components/sections/helps";
import SectionPhytobloom from "../components/sections/phytobloom.jsx";
import SectionFooter from "../components/sections/siaprepsFooter.jsx";
import SectionParceiros from "../components/sections/parceiros.jsx"
import SectionPlataforma from "../components/sections/plataforma.jsx";
import Seo from "../components/common/Seo";


export default function Index() {

    return (
        <>
            <Seo description="Plataforma de inteligência artificial e monitoramento por satélite para pesca e meio ambiente: localize o pescado, acompanhe espécies e reduza custos e emissões. Conheça SIAPREPS, PhytoBloom e a Plataforma SIAPESQ." />
            <div className="index">
                <section className="header_container">
                    <img src={mar} alt="Imagem de fundo" className="bg_img" />
                    <Header page={'index'} />
                    <Reveal>
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
                    </Reveal>
                    <footer className="footer_header_container">
                        {/* qual onda mostrar (e se mostra os pilares) é decidido por CSS
                            (@media max-width:1366px), não por JS — window.innerWidth só
                            era lido uma vez no mount e não reagia a resize/rotação. */}
                        <img src={wave} alt="Ondas do rodapé" className="onda_desktop" />
                        <img src={footerV2} alt="Ondas do rodapé" className="onda_mobile" />
                        <Reveal stagger>
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
                        </Reveal>
                    </footer>
                </section>

                <SectionHelps />
                <SectionPlataforma />
                <SectionSiapreps />
                <SectionPhytobloom />
                <SectionParceiros />
                <SectionFooter />
            </div>
        </>
    )
}