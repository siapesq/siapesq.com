import React from "react";
import Card from "../../components/common/card";
import satelite from "../../imgs/satelite.svg"
import lupa from "../../imgs/lupa.svg";
import mapa from "../../imgs/mapa.svg";
export default function SectionHelps() {


    return (

        <section className="helps">
            <div className="helps_container">
                <article className="helps_article">
                    <h2 className="title">
                        Como a SIAPESQ pode te ajudar?
                    </h2>
                    <p className="content">
                        Veja nossa variedade de benefícios
                    </p>
                </article>
                <div className="cards">
                    <Card
                        id="card-1"
                        photo={satelite}
                        title="Rastreamento de espécies"
                        content="Podemos fazer o rastreamento da espécie animal que você pesquisa, basta entrar em contato!"
                    />
                    <Card
                        id="card-2"
                        photo={lupa}
                        title="Análise Ambiental"
                        content="Baixe nossas predições, e faça o uso offline de onde vocês estiver pelo seu computador"
                    />
                    <Card
                        id="card-3"
                        photo={mapa}
                        title="Predição"
                        content="Com base nos dados registrados no Copernicus podemos fazer predição via satellite de onde uma espécie animal pode estar localizada"
                    />
                </div>
            </div>
            <h3>
                Conheça nossos produtos
            </h3>
        </section>

    )
}




