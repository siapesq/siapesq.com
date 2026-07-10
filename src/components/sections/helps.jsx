import React from "react";
import { useTranslation } from "react-i18next";
import Card from "../../components/common/card";
import satelite from "../../imgs/satelite.svg"
import lupa from "../../imgs/lupa.svg";
import mapa from "../../imgs/mapa.svg";
export default function SectionHelps() {

    const { t } = useTranslation();

    return (

        <section className="helps">
            <div className="helps_container">
                <article className="helps_article">
                    <h2 className="title">
                        {t("helps.title")}
                    </h2>
                    <p className="content">
                        {t("helps.subtitle")}
                    </p>
                </article>
                <div className="cards">
                    <Card
                        id="card-1"
                        photo={satelite}
                        title={t("helps.card1Title")}
                        content={t("helps.card1Text")}
                    />
                    <Card
                        id="card-2"
                        photo={lupa}
                        title={t("helps.card2Title")}
                        content={t("helps.card2Text")}
                    />
                    <Card
                        id="card-3"
                        photo={mapa}
                        title={t("helps.card3Title")}
                        content={t("helps.card3Text")}
                    />
                </div>
            </div>
            <h3>
                {t("helps.products")}
            </h3>
        </section>

    )
}




