import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "../../style/lightbox.css";

/*
 * Envolve qualquer imagem/print clicável: no clique, abre ela ampliada e
 * centralizada por cima da página. Fecha no X, clicando fora ou com Esc.
 *
 * Uso:
 *   <Lightbox src={foto} alt="descrição">
 *     <div className="plat_fluxo_shot">...</div>
 *   </Lightbox>
 */
export default function Lightbox({ src, alt, children }) {
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    if (!aberto) return;

    const aoTeclar = (e) => {
      if (e.key === "Escape") setAberto(false);
    };
    document.addEventListener("keydown", aoTeclar);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", aoTeclar);
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <>
      <div
        className="lightbox_gatilho"
        onClick={() => setAberto(true)}
        role="button"
        tabIndex={0}
        aria-label={`Ampliar imagem: ${alt}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setAberto(true);
          }
        }}
      >
        {children}
      </div>

      {aberto &&
        createPortal(
          // Portal pro <body>: alguns ancestrais (ex.: o wrapper do Reveal,
          // que usa `will-change`) criam um "containing block" pra
          // `position: fixed`, o que faria o overlay ficar preso dentro da
          // seção em vez de cobrir a tela inteira. Renderizando fora dessa
          // árvore, o fixed volta a ser relativo à janela, sempre.
          <div
            className="lightbox_overlay"
            onClick={() => setAberto(false)}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="lightbox_fechar"
              onClick={() => setAberto(false)}
              aria-label="Fechar imagem ampliada"
              type="button"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>

            <img
              src={src}
              alt={alt}
              className="lightbox_imagem"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </>
  );
}
