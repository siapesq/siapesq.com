import React from "react";
import SectionHeroSiapreps from "../features/siapreps/components/Hero";
import SectionEspeciesSiapreps from "../features/siapreps/components/Especies";
import SectionRecursosSiapreps from "../features/siapreps/components/Recursos";
import SectionComoFuncionaSiapreps from "../features/siapreps/components/ComoFunciona";
import SectionBarco from "../features/siapreps/components/SiaprepsBarco";
import SectionMapaSiapreps from "../features/siapreps/components/Mapa";
import SectionAcessoSiapreps from "../features/siapreps/components/Acesso";
import SectionFooter from "../components/layout/Footer";
import Seo from "../components/common/Seo";

export default function Siapreps() {
  return (
    // .plat-mar aplica a paleta azul-oceano a todas as classes plat_ desta página
    <div className="plat-mar">
      <Seo
        title="SIAPREPS"
        description="Mapas de satélite com inteligência artificial para localizar o pescado em tempo real, evitar espécies protegidas e reduzir custos e emissões na pesca."
        path="/siapreps"
      />
      <SectionHeroSiapreps />
      <SectionEspeciesSiapreps />
      <SectionRecursosSiapreps />
      <SectionComoFuncionaSiapreps />
      <SectionBarco />
      <SectionMapaSiapreps />
      <div className="plat_final">
        <SectionAcessoSiapreps />
        <SectionFooter tema="siapreps" />
      </div>
    </div>
  );
}
