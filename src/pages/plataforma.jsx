import React from "react";
import SectionHero from "../components/sections/plataforma/hero";
import SectionEspecies from "../components/sections/plataforma/especies";
import SectionRecursos from "../components/sections/plataforma/recursos";
import SectionComoFunciona from "../components/sections/plataforma/comoFunciona";
import SectionMapa from "../components/sections/plataforma/mapa";
import SectionPublico from "../components/sections/plataforma/publico";
import SectionAcesso from "../components/sections/plataforma/acesso";
import SectionFooter from "../components/sections/siaprepsFooter";
import Seo from "../components/common/Seo";

export default function Plataforma() {
  return (
    <>
      <Seo
        title="Plataforma"
        description="Monitoramento inteligente de espécies: mapas interativos, estatísticas e projeções climáticas com precisão científica, direto no navegador."
        path="/plataforma"
      />
      <SectionHero />
      <SectionEspecies />
      <SectionRecursos />
      <SectionComoFunciona />
      <SectionMapa />
      <SectionPublico />
      <div className="plat_final">
        <SectionAcesso />
        <SectionFooter tema="plataforma" />
      </div>
    </>
  );
}
