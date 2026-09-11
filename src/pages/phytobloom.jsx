import React from "react";
import SectionHeroPhytobloom from "../components/sections/phytobloom-plat/hero";
import SectionCamadasPhytobloom from "../components/sections/phytobloom-plat/camadas";
import SectionRecursosPhytobloom from "../components/sections/phytobloom-plat/recursos";
import SectionComoFuncionaPhytobloom from "../components/sections/phytobloom-plat/comoFunciona";
import SectionVideoPhytobloom from "../components/sections/phytobloom-plat/video";
import SectionMapaPhytobloom from "../components/sections/phytobloom-plat/mapa";
import SectionPublicoPhytobloom from "../components/sections/phytobloom-plat/publico";
import SectionAcessoPhytobloom from "../components/sections/phytobloom-plat/acesso";
import SectionFooter from "../components/sections/siaprepsFooter";
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
