import React from "react";
import Reveal from "../../common/Reveal";
import "../../../style/plataforma/pagina.css";

export default function SectionVideoPhytobloom() {
  return (
    <section className="plat_video">
      <div className="plat_wrap">
        <Reveal>
          <p className="plat_rotulo">Conheça a proposta</p>
          <h2 className="plat_titulo_seccao">Entenda o PhytoBloom em poucos minutos</h2>
          <p className="plat_intro">
            Um vídeo institucional sobre como o PhytoBloom une inteligência
            artificial e monitoramento ambiental para antecipar crises em
            reservatórios.
          </p>

          <div className="plat_video_frame">
            <iframe
              src="https://www.youtube.com/embed/QWzZbOT9eRw?si=doZaJVB7qHK8pK17"
              title="Demonstração da plataforma PhytoBloom"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
