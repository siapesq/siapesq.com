import React from "react";
// import siapreps from "../../imgs/siapreps.svg";
// import texto from "../../imgs/textoazul.svg"
import '../../style/siapreps/siapreps_plataforma/plataforma.css';


export default function SectionPlataforma() {


  return (
    <>
      <section className="plataformaSiapreps">
        <div className="bkImg">

        </div>
        <article >
          {/* <h1 id="azulzinha">A plataforma SIAPREPS disponibiliza aos usuários mapas que  permitem localizar  e monitorar os cardumes com maior facilidade e precisão.</h1> */}
          <div className="platSiaprepsContainer">
            <div className="platSiaprepsTxt">
              <p>
                Inteligência Artificial e Modelagem Ecológica aplicadas para monitorar os diferentes cardumes de pescado por Satélite em tempo real! Localize o pescado com mais eficiência, evitando a captura de espécies protegidas e reduzindo o uso de oléo diesel.              </p>
            </div>
            <div>
              <button type="button">Começar Agora</button>
            </div>
          </div>
          {/* <button className="fundoInvinsivel2"> <a href="https://wa.me/555399503671" target="_blank" rel="noopener noreferrer">Começar Agora</a></button>  */}
        </article>
      </section>
    </>
  )
}
