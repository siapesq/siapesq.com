import React from "react";
import SectionHero from "../features/plataforma/components/Hero";
import SectionEspecies from "../features/plataforma/components/Especies";
import SectionRecursos from "../features/plataforma/components/Recursos";
import SectionComoFunciona from "../features/plataforma/components/ComoFunciona";
import SectionMapa from "../features/plataforma/components/Mapa";
import SectionPublico from "../features/plataforma/components/Publico";
import SectionAcesso from "../features/plataforma/components/Acesso";
import SectionFooter from "../components/layout/Footer";
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
