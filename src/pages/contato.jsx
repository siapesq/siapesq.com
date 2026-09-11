import React from "react";
import SectionContato from "../components/sections/formContato";
import Seo from "../components/common/Seo";


export default function Contato() {
    return (
        <>
       <Seo
         title="Contato"
         description="Fale com a equipe SIAPESQ. Tire dúvidas sobre nossas soluções de monitoramento ambiental por inteligência artificial."
         path="/contato"
       />
       <div>
         <SectionContato />
       </div>
        </>
    );
}