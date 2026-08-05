import React from "react";
import SectionHeroSiapreps from "../components/sections/siapreps-plat/hero";
import SectionEspeciesSiapreps from "../components/sections/siapreps-plat/especies";
import SectionRecursosSiapreps from "../components/sections/siapreps-plat/recursos";
import SectionComoFuncionaSiapreps from "../components/sections/siapreps-plat/comoFunciona";
import SectionBarco from "../components/sections/siaprepsBarco";
import SectionMapaSiapreps from "../components/sections/siapreps-plat/mapa";
import SectionAcessoSiapreps from "../components/sections/siapreps-plat/acesso";
import SectionFooter from "../components/sections/siaprepsFooter";

export default function Siapreps() {
  return (
    // .plat-mar aplica a paleta azul-oceano a todas as classes plat_ desta página
    <div className="plat-mar">
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
