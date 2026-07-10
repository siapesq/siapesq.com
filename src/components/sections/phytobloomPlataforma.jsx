import { useTranslation } from "react-i18next";
import '../../style/phytobloom/plataforma.css';
import phytobloom from "../../imgs/phytobloom.png"


export default function SectionPlataforma() {

  const { t } = useTranslation();

  return (
    <>
      <section className="plataforma">
        <article >
          <img id="phytobloom" src={phytobloom} alt={t("phytobloom.platformImgAlt")} />
          {/* <h1 id="verde">A plataforma PHYTOBLOOM VISION proporciona mapas detalhados e em tempo real, permitindo o monitoramento contínuo e a previsão da proliferação de plantas aquáticas. Nossos mapas facilitam a tomada de decisões e o planejamento de intervenções de maneira eficiente.</h1> */}
          {/* <img src={texto} alt="texto" id="textoverde" /> */}

          <div className="textoverde">
          {t("phytobloom.platformText")}
          </div>

          {/* <button className="botaoPhytobloom"> <a href="https://wa.me/555399503671" target="_blank" rel="noopener noreferrer">Começar Agora</a></button> */}
          {/* <div>
            <p>A plataforma SIAPREPS disponibiliza aos usuários mapas que permitem localizar e monitorar os cardumes em tempo real, mostrando as áreas com maior produtividade para diferentes espécies de pescado.</p>
          </div> */}
        </article>
      </section>
    </>
  )
}
