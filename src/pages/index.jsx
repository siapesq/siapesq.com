import { useTranslation } from "react-i18next";
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

    const { t } = useTranslation();

    return (
        <>
            <div className="index">
                <section className="header_container">
                    <img src={mar} alt={t("common.backgroundAlt")} className="bg_img" />
                    <Header page={'index'} />
                    <article className="article_header_container">
                        <img src={siaprepsMonitor} alt={t("home.monitorAlt")} />
                        <h2 id="h2principal" >
                            {t("home.heroTitle")}
                        </h2>
                        <p id="pprincipal">
                            {t("home.heroText")}
                        </p>
                    </article>
                    <footer className="footer_header_container">
                        <img src={window.innerWidth > 1366 ? wave : footerV2} alt={t("home.waveAlt")} />
                        {(window.innerWidth > 1366) ?
                            (
                                <article>
                                    <div>
                                        <h2 className="title">
                                            {t("home.innovationTitle")}
                                        </h2>
                                        <p className="content">
                                            {t("home.innovationText")}
                                        </p>
                                    </div>
                                    <span className="tracejado"></span>
                                    <div>
                                        <h2 className="title">
                                            {t("home.optimizationTitle")}
                                        </h2>
                                        <p className="content">
                                            {t("home.optimizationText")}
                                        </p>
                                    </div>
                                    <span className="tracejado tr2"></span>
                                    <div>
                                        <h2 className="title">
                                            {t("home.impactTitle")}
                                        </h2>
                                        <p className="content">
                                            {t("home.impactText")}
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