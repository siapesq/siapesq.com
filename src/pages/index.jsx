import Header from "../components/layout/Header";
import Reveal from "../components/common/Reveal";
import mar from "../imgs/mar.webp";
import siaprepsMonitor from "../imgs/siaprepsMonitor.webp";
import "../styles/home-features.css";
import SectionSiapreps from "../features/siapreps/components/Siapreps";
import SectionHelps from "../features/institutional/components/Helps";
import SectionPhytobloom from "../features/phytobloom/components/Phytobloom.jsx";
import SectionFooter from "../components/layout/Footer.jsx";
import SectionParceiros from "../features/institutional/components/Parceiros.jsx"
import SectionPlataforma from "../features/plataforma/components/Plataforma.jsx";
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
                </section>

                <section className="home-features" aria-label="Pilares da SIAPESQ">
                    <svg
                        className="home-features__wave"
                        viewBox="0 0 1440 160"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <path d="M0 24C180 82 360 108 560 78C750 48 890 -18 1110 10C1280 34 1340 82 1440 62V160H0V24Z" />
                    </svg>

                    <Reveal className="home-features__reveal">
                        <div className="home-features__content">
                            <article className="home-features__item">
                                <h2>Inovação</h2>
                                <p>Inteligência Artificial em Monitoramento Satelital</p>
                            </article>
                            <article className="home-features__item">
                                <h2>Otimização</h2>
                                <p>Suporte para tomada de decisões</p>
                            </article>
                            <article className="home-features__item">
                                <h2>Impacto</h2>
                                <p>Resiliência Produtiva e Sustentabilidade</p>
                            </article>
                        </div>
                    </Reveal>
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
