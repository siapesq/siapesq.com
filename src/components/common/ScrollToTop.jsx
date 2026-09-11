import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../style/scrollToTop.css";

// mesma cor de acento (--plat-green) definida por tema em pagina.css. O botão
// fica FORA da div de tema (.plat-mar/.plat-alga só existe dentro da página),
// então não dá pra confiar em herança de CSS var — mapeamos pela rota.
const TEMA_POR_ROTA = {
  "/siapreps": "scroll_topo--mar",
  "/phytobloom": "scroll_topo--alga",
};

/*
 * Botão flutuante "voltar ao topo" — aparece depois de rolar um pouco.
 * Global (renderizado uma vez no App, fora das rotas): o header não é fixo,
 * então em páginas longas é o único jeito rápido de voltar pro início.
 */
export default function ScrollToTop() {
  const [visivel, setVisivel] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > 500);
    window.addEventListener("scroll", aoRolar, { passive: true });
    aoRolar();
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  const irParaTopo = (e) => {
    // Tira o foco do botão ANTES de rolar: como o próprio scroll faz ele
    // ficar invisível no meio do caminho (cruza os 500px e vira
    // aria-hidden/tabindex=-1), se ele ainda estivesse focado o navegador
    // forçaria a troca de foco pra outro elemento focável da página — e
    // arrastaria o scroll junto (scroll-into-view automático), travando a
    // subida na metade. Tirando o foco na hora do clique, isso nunca acontece.
    e.currentTarget.blur();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const temaClasse = TEMA_POR_ROTA[pathname] || "";

  return (
    <button
      type="button"
      className={`scroll_topo ${temaClasse} ${visivel ? "scroll_topo--visivel" : ""}`}
      onClick={irParaTopo}
      aria-label="Voltar ao topo"
      aria-hidden={!visivel}
      tabIndex={visivel ? 0 : -1}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}
