import React from "react";
import SectionHeroPhytobloom from "../features/phytobloom/components/Hero";
import SectionCamadasPhytobloom from "../features/phytobloom/components/Camadas";
import SectionRecursosPhytobloom from "../features/phytobloom/components/Recursos";
import SectionComoFuncionaPhytobloom from "../features/phytobloom/components/ComoFunciona";
import SectionVideoPhytobloom from "../features/phytobloom/components/Video";
import SectionMapaPhytobloom from "../features/phytobloom/components/Mapa";
import SectionPublicoPhytobloom from "../features/phytobloom/components/Publico";
import SectionAcessoPhytobloom from "../features/phytobloom/components/Acesso";
import SectionFooter from "../components/layout/Footer";
import Seo from "../components/common/Seo";

export default function Phytobloom() {
  return (
    // .plat-alga aplica a paleta teal/algas a todas as classes plat_ desta página
    <div className="plat-alga">
      <Seo
        title="PhytoBloom"
        description="Monitoramento de florações de algas e da qualidade da água em reservatórios, com imagens de satélite e inteligência artificial."
        path="/phytobloom"
      />
      <SectionHeroPhytobloom />
      <SectionCamadasPhytobloom />
      <SectionRecursosPhytobloom />
      <SectionComoFuncionaPhytobloom />
      <SectionVideoPhytobloom />
      <SectionMapaPhytobloom />
      <SectionPublicoPhytobloom />
      <div className="plat_final">
        <SectionAcessoPhytobloom />
        <SectionFooter tema="phytobloom" />
      </div>
    </div>
  );
}
