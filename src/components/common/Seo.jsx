import React from "react";
import { Helmet } from "react-helmet-async";

const BASE = "https://siapesq.com";

/**
 * Meta tags por página (título, descrição, canonical, Open Graph, Twitter).
 * `title` é a parte específica da página; vira "<title> | SIAPESQ".
 * Sem `title`, usa o título padrão da marca (home).
 * `path` alimenta a URL canônica/OG (URLs limpas via BrowserRouter).
 */
export default function Seo({ title, description, path = "/", image = "/og-image.png" }) {
  const fullTitle = title
    ? `${title} | SIAPESQ`
    : "SIAPESQ | Inteligência Artificial em Pesquisa Ambiental";
  const url = path === "/" ? `${BASE}/` : `${BASE}${path}`;
  const img = image.startsWith("http") ? image : `${BASE}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  );
}
