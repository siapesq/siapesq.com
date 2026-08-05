import React, { useEffect, useRef, useState } from "react";
import "../../style/reveal.css";

/*
 * Anima o conteúdo entrando (fade + subida) quando ele aparece na tela ao rolar.
 * Usa IntersectionObserver (nativo). Dispara uma vez e para de observar.
 *
 * Props:
 *   stagger  -> os filhos diretos entram em sequência (cascata)
 *   delay    -> atraso extra (ms) antes de animar
 */
export default function Reveal({ children, className = "", stagger = false, delay = 0 }) {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // sem suporte a IntersectionObserver: mostra direto
    if (typeof IntersectionObserver === "undefined") {
      setVisivel(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            setVisivel(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const classes = ["reveal", stagger ? "reveal--stagger" : "", visivel ? "reveal--visivel" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classes} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
