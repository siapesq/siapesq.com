---
version: "alpha"
name: "SIAPESQ"
description: >-
  Sistema de Inteligência Artificial em pesquisa ambiental. Plataforma e site
  institucional para monitoramento, análise e visualização de dados geoespaciais
  de espécies e ecossistemas aquáticos. Estética marinha, científica e imersiva:
  seções em tela cheia com fotografia de natureza sob overlay azul-marinho e
  painéis de vidro (glassmorphism). Identidade oficial SIAPESQ com acabamento
  cinematográfico. Todo o conteúdo em português do Brasil.

colors:
  # --- Núcleo da marca ---
  primary: "#2589BD"            # Azul SIAPESQ: ações, links, palavra de destaque
  on-primary: "#FFFFFF"
  primary-deep: "#03045E"       # Azul profundo: botões primários, ênfase forte
  on-primary-deep: "#FFFFFF"
  secondary: "#04517B"          # Azul-petróleo: blocos secundários
  on-secondary: "#FFFFFF"
  tertiary: "#18A7B3"           # Ciano/teal: eyebrows, bordas de ícone, detalhes
  on-tertiary: "#0A1730"
  accent-green: "#86BD51"       # Verde: checks, indicadores de sucesso

  # --- Superfícies escuras (seções imersivas) ---
  navy: "#233363"               # Azul-marinho SIAPESQ
  navy-deep: "#0A1730"          # Fundo imersivo mais escuro
  surface-dark: "#0A1730"
  on-surface-dark: "#FFFFFF"
  on-surface-dark-muted: "rgba(255,255,255,0.82)"

  # --- Superfícies claras ---
  surface: "#FFFFFF"
  surface-variant: "#EFF7FB"    # Gelo: fundos claros alternados
  on-surface: "#233363"         # Texto sobre fundo claro
  on-surface-muted: "#4B5563"

  # --- Utilitários ---
  outline: "rgba(35,51,99,0.18)"
  glass-border: "rgba(255,255,255,0.14)"
  glass-fill: "rgba(255,255,255,0.07)"
  overlay-navy: "rgba(10,23,48,0.86)"

typography:
  display:
    fontFamily: "Mulish"
    fontSize: 64px
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Mulish"
    fontSize: 40px
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Mulish"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Mulish"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-strong:
    fontFamily: "Mulish"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.6
  label-eyebrow:
    fontFamily: "Mulish"
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.16em"

rounded:
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  full: 999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  "2xl": 64px
  "3xl": 96px
  section: 120px

components:
  button-primary:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary-deep}"
    typography: "{typography.title}"
    rounded: "{rounded.full}"
    padding: 16px 32px
  button-on-dark:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.title}"
    rounded: "{rounded.lg}"
    padding: 16px 32px
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface-dark}"
    typography: "{typography.title}"
    rounded: "{rounded.lg}"
    padding: 14px 30px
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-glass:
    backgroundColor: "{colors.glass-fill}"
    textColor: "{colors.on-surface-dark}"
    rounded: "{rounded.lg}"
    padding: 24px
  eyebrow:
    textColor: "{colors.tertiary}"
    typography: "{typography.label-eyebrow}"
  icon-badge:
    backgroundColor: "rgba(24,167,179,0.12)"
    textColor: "{colors.tertiary}"
    rounded: "{rounded.full}"
    size: 56px
  chip:
    backgroundColor: "rgba(255,255,255,0.10)"
    textColor: "{colors.on-surface-dark}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.full}"
    padding: 8px 18px
---

## Overview

A SIAPESQ é uma empresa de tecnologia ambiental que usa Inteligência Artificial e
dados de satélite para monitorar ecossistemas aquáticos e a pesca. Este documento
descreve a aparência do **site institucional** e da **plataforma SIAPESQ** (o produto
de análise geoespacial de espécies).

Princípios visuais:

- **Científico e institucional**, nunca "genérico de startup". Nada de gradientes
  neon, emojis ou ilustrações cartunescas.
- **Imersivo e cinematográfico**: seções de destaque ocupam a tela inteira, com
  fotografia marinha (oceano, litoral, espécies, mapas) sob um overlay azul-marinho
  que garante legibilidade do texto branco.
- **Limpo e arejado**: bastante respiro, grid centralizado com largura máxima de
  ~1280px, hierarquia tipográfica forte.
- **Confiança pela precisão**: os dados são o herói. Mapas, camadas e números
  aparecem com clareza.

O tom de voz é direto, técnico e confiante. Público-alvo: pesquisadores, gestão
pesqueira, órgãos ambientais e setores produtivos com pauta ESG.

## Colors

A paleta é a identidade oficial da SIAPESQ, organizada para uso em superfícies
claras e escuras.

- `primary` (#2589BD) é o azul da marca — use em links, realces e na palavra
  destacada dos títulos. `primary-deep` (#03045E) é reservado para botões primários
  e ênfases fortes.
- `secondary` (#04517B), azul-petróleo, estrutura blocos secundários e seções de
  produto.
- `tertiary` (#18A7B3), o ciano/teal, é o **acento de acabamento**: rótulos eyebrow
  em CAIXA ALTA, bordas de ícones e detalhes finos. Usar com parcimônia.
- `accent-green` (#86BD51) aparece apenas em ícones de "check" e indicadores de
  sucesso.
- Superfícies escuras usam `navy-deep` (#0A1730) e `navy` (#233363), sempre com
  texto branco (`on-surface-dark`).
- Superfícies claras alternam `surface` (#FFFFFF) e `surface-variant` (#EFF7FB),
  com texto `on-surface` (#233363).

Contraste: garanta AA (4.5:1) para texto de corpo. Sobre fotografia, aplique
`overlay-navy` antes do texto branco.

## Typography

Fonte única: **Mulish** (Google Fonts) em todo o produto — mantém a identidade
oficial do site atual.

- `display` (900) — títulos de hero e seções de tela cheia.
- `headline` (800) — títulos de seção.
- `title` (700) — subtítulos, títulos de card e botões.
- `body` / `body-strong` — texto corrido (16–20px).
- `label-eyebrow` (700, CAIXA ALTA, letter-spacing 0.16em, cor `tertiary`) — o
  rótulo curto acima de cada título de seção. Ex.: "A PLATAFORMA SIAPESQ".

Títulos podem destacar uma palavra-chave em `primary`. Nunca misture outra família
tipográfica.

## Layout

- Grid centralizado, largura máxima **1280px**, com respiro lateral generoso.
- Seções de destaque (hero, plataforma, contato) ocupam **min-height: 100vh** com
  imagem de fundo `object-fit: cover` + overlay.
- Espaçamento vertical entre blocos: token `section` (120px) no desktop, reduzindo
  proporcionalmente no mobile.
- Alternância de ritmo: seção escura imersiva → seção clara → seção escura, para
  criar profundidade ao rolar.
- **Mobile-first e totalmente responsivo**: cards em coluna única no mobile, grade
  de 2–3 colunas no desktop; menu vira hambúrguer.

## Elevation & Depth

A profundidade vem de **overlays, vidro e brilho**, não de bordas duras.

- **Overlay de imagem**: gradiente `linear-gradient` de `navy-deep` (topo/lados,
  ~0.9 alfa) até quase transparente, garantindo legibilidade.
- **Glassmorphism** (`card-glass`): fundo `glass-fill`, borda `glass-border`,
  `backdrop-filter: blur(12px)` e sombra suave (`0 22px 70px rgba(3,16,31,0.16)`).
- **Glow de ícone**: badges circulares (`icon-badge`) com leve brilho ciano
  (`box-shadow: 0 0 24px rgba(37,137,189,0.28)`).
- **Interactive lift**: no hover, cards e botões sobem 3–4px com transição suave
  (~240ms).
- **Reveal on scroll**: elementos entram com fade + subida de ~24px; usar stagger
  em grupos de cards.

## Shapes

- Cantos arredondados consistentes: `sm` (8px) para detalhes, `lg` (16px) para
  cards e painéis, `full` para botões, chips e badges.
- Ícones em estilo de **linha (outline)**, traço ~2px, referência visual Lucide.
- Formas orgânicas pontuais (ondas SVG) podem separar seções, herdando a paleta.

## Components

- **button-primary** — azul profundo, texto branco, cantos totalmente
  arredondados. CTA principal em superfícies claras.
- **button-on-dark** — fundo branco, texto `primary`; no hover vira `tertiary`
  (teal) com texto escuro. CTA principal sobre fotografia escura.
- **button-outline** — contorno claro sobre fundo escuro; CTA secundário.
- **card-feature** — card branco de funcionalidade: ícone em `icon-badge`, título
  `title`, uma linha de corpo.
- **card-glass** — painel de vidro para conteúdo sobre fotografia (ex.: painel
  "O que a plataforma faz", formulário de contato).
- **eyebrow** — rótulo curto em teal, CAIXA ALTA, acima de cada título de seção.
- **icon-badge** — círculo com borda/fundo teal e ícone de linha, com glow sutil.
- **chip** — pílula translúcida para público-alvo e tags (ex.: "Pesquisadores").

## Do's and Don'ts

**Do**

- Mantenha os textos institucionais exatamente como fornecidos, em português do
  Brasil.
- Use fotografia real de natureza aquática (oceano, litoral, espécies) e capturas
  reais de interface de mapa com mapa de calor.
- Aplique overlay `navy` antes de qualquer texto branco sobre imagem.
- Use `tertiary` (teal) só como acento de acabamento.
- Preserve a estrutura e as seções existentes do site (produtos SIAPREPS e
  PhytoBloom), apenas elevando o acabamento visual.

**Don't**

- Não invente estatísticas, preços, planos, depoimentos ou funcionalidades.
- Não use fontes ou cores fora desta paleta.
- Não copie o layout plano atual do site — a aparência-alvo é escura e imersiva.
- Evite gradientes neon, sombras pesadas coloridas e visual genérico de SaaS.
- Não use texto branco sobre imagem sem overlay (perde legibilidade).
