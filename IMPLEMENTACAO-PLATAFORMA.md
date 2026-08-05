# Implementação — Plataforma SIAPESQ no site siapesq.com

> Documento de implementação autocontido. Leia **inteiro** antes de escrever código.
> Issue de referência: **#39 — [FRONT-END] Adaptar a landing page atual para apresentar melhor a plataforma SIAPESQ**.

---

## 1. Contexto do projeto

**Repositório:** `siapesq.com` — site institucional (guarda-chuva) da SIAPESQ.

**Stack (importante):**
- **Create React App** (`react-scripts` 5) — **NÃO é Vite, NÃO tem Tailwind**
- React 18 + `react-router-dom` v6 com **`HashRouter`** (rotas ficam `/#/rota`)
- **CSS puro** em arquivos separados sob `src/style/` — sem CSS-in-JS, sem utilitários
- Disponíveis no projeto: `bootstrap`, `bootstrap-icons`, `gsap`, `animate.css`
- Deploy: `gh-pages` → `siapesq.com`

**Estrutura de pastas:**
```
src/
  App.jsx                      # rotas
  pages/
    index.jsx                  # landing (home)
    siapreps.jsx
    phytobloom.jsx
    contato.jsx
  components/
    layouts/header.jsx         # nav do topo
    sections/                  # seções de página
      helps.jsx
      siapreps.jsx
      phytobloom.jsx
      parceiros.jsx
      siaprepsFooter.jsx
      aboutCards.jsx
    common/
      card.jsx                 # card de ícone+título+texto
      aboutCard.jsx
  style/                       # CSS por área
    style.css                  # global (importa a fonte Mulish)
    styles/header.css
    index/index.css
    principal/parceiros.css
    phytobloom/PhytoBloom.css
    siapreps/siapreps_section/style.css
    siapreps/siapreps_Footer/Footer.css
    about/cards.css
  imgs/                        # todas as imagens/SVGs
```

**Rotas atuais (`src/App.jsx`):** `/` · `/siapreps` · `/phytobloom` · `/contato`

**Composição atual da home (`src/pages/index.jsx`):**
```
Hero (mar.png + siaprepsMonitor.svg + onda + 3 pilares)
  → SectionHelps        ("Como a SIAPESQ pode te ajudar?" + 3 cards + "Conheça nossos produtos")
  → SectionSiapreps     (card do produto SIAPREPS)
  → SectionPhytobloom   (card do produto PhytoBloom)
  → SectionParceiros    (logos institucionais)
  → SectionFooter       (redes sociais + logo + copyright)
```

---

## 2. ⚠️ Regras que não podem ser quebradas

1. **NÃO use Tailwind.** O visual de referência foi prototipado num projeto Vite+Tailwind (`arca-site`). **Reconstrua tudo em CSS puro** seguindo as convenções deste projeto (um `.css` por seção em `src/style/`).
2. **NÃO copie código do `arca-site`.** Use-o só como referência visual. Nomes de classe, tokens e estrutura devem seguir **este** projeto.
3. **Reutilize os componentes existentes** sempre que possível — principalmente `src/components/common/card.jsx`.
4. **Não quebre as seções existentes** da home nem as páginas `/siapreps`, `/phytobloom`, `/contato`.
5. **Tudo responsivo.** O projeto usa breakpoints em `1600px`, `1366px`, `1024px`, `650px`, `500px` — siga esses.
6. **Todo o conteúdo em português do Brasil.** Use os textos deste documento **literalmente** — não invente dados, números, preços nem funcionalidades.
7. **Leia os arquivos antes de editar.** Especialmente `src/pages/siapreps.jsx`, `src/pages/phytobloom.jsx`, `src/components/layouts/header.jsx` e seus CSS.

---

## 3. Identidade visual

### Paleta oficial
| Token | Hex | Uso |
|---|---|---|
| Navy (texto/marca) | `#233363` | títulos e texto sobre fundo claro |
| Azul profundo | `#03045E` | botões primários |
| Azul-petróleo | `#04517B` | blocos secundários |
| Azul primário | `#2589BD` | destaques, links |
| Ciano/teal | `#18A7B3` | acento (rótulos, bordas de ícone) |
| Verde | `#86BD51` | checks / destaque da plataforma |
| Gelo | `#EFF7FB` | fundos claros alternados |
| Branco | `#FFFFFF` | superfícies e texto sobre fundo escuro |
| Navy escuro | `#0A1730` | overlay das seções imersivas |

### Tipografia
**Mulish** (já importada em `src/style/style.css` via Google Fonts). Pesos: 400 (corpo), 600/700 (destaques), 800/900 (títulos).

### Padrões existentes a respeitar
- **Botões:** `border-radius: 50px`, fundo `#03045E`, texto branco.
- **Cards (componente `Card`):** ícone no topo (~6rem) → `h2.title` → `p.content`, texto em `#233363`.
- **Ondas:** o site usa `wave.svg` / `footerV2.png` como divisor entre seções — reaproveite esse recurso.
- **Ícones marinhos existentes** em `src/imgs/`: `satelite.svg`, `lupa.svg`, `mapa.svg`, `iconChecked.png`, `peixes.svg`, `tubarao.svg`, `baleia.svg`, `tartaruga.svg`, `planta.svg`, `golfinho.svg`.

### Padrão visual das seções imersivas (novo)
Usado na página da plataforma e nos heroes dos produtos:
- Foto **full-bleed** de fundo (`object-fit: cover`)
- **Overlay escuro obrigatório** por cima da foto — gradiente de `#0A1730` (mais forte do lado do texto, suave do lado oposto). Sem overlay o texto branco fica ilegível sobre áreas claras da foto.
- Conteúdo **alinhado à esquerda**, ocupando a metade esquerda
- Painéis de vidro quando houver conteúdo sobre a foto: fundo `rgba(255,255,255,0.07)`, borda `rgba(255,255,255,0.14)`, `backdrop-filter: blur(10px)`, `border-radius: 16px`
- Badges de ícone: círculo com borda `#18A7B3`, leve brilho `0 0 24px rgba(37,137,189,0.28)`

---

## 4. O que é a plataforma SIAPESQ (conteúdo verificado no código-fonte)

> Estes fatos foram conferidos no repositório da plataforma (`SIAPESQ-Front-end`). **Não invente nada além disto.**

**Fluxo do usuário:** Categorias → Espécies → Localização no mapa → Análises

**O mapa:**
- Base **Leaflet + OpenStreetMap** — ⚠️ **NÃO existe camada de satélite / "cor real"**. Nunca escreva "satélite" ao descrever o mapa da plataforma.
- Camada principal: **GeoTIFF** renderizado com paleta *turbo* (roxo→azul→verde→amarelo→vermelho) = **mapa de calor da distribuição** da espécie
- Sobreposição: **densidade de ocorrências reais** vinda do GBIF

**Análises disponíveis:** anual, mensal (seletor de meses), e **projeções para 2050 e 2100**

**Outros recursos:** catálogo de espécies por categoria com fichas científicas, exportação de predições/relatórios, planos/assinaturas, perfil de usuário, painel administrativo

**Público-alvo:** pesquisadores · gestão pesqueira · órgãos ambientais · setores produtivos (ESG)

### Voz do texto
Linguagem **de venda, acessível**. O visitante comum **não sabe** o que é GBIF, GeoTIFF ou "densidade de ocorrências" — **nunca use esses termos na interface**. Traduza:
| Verdade técnica | Como escrever no site |
|---|---|
| GeoTIFF com paleta turbo | "mapa de calor fácil de entender" |
| densidade de ocorrências do GBIF | "dados científicos reais de observação" |
| troca de cenário anual/2050/2100 | "compare hoje com as projeções para 2050 e 2100" |

---

## 5. Fases da implementação

### FASE 1 — Nova seção da Plataforma na home

**Objetivo:** apresentar a plataforma SIAPESQ como terceiro produto, no mesmo padrão dos cards de SIAPREPS e PhytoBloom.

**Arquivos:**
- Criar `src/components/sections/plataforma.jsx`
- Criar `src/style/plataforma/plataforma.css`
- Editar `src/pages/index.jsx` — importar e inserir `<SectionPlataforma />` **depois de `<SectionPhytobloom />`** e **antes de `<SectionParceiros />`**
- Editar `src/components/layouts/header.jsx` — adicionar o link `PLATAFORMA`

**Layout:** espelhe a estrutura de `src/components/sections/siapreps.jsx` (logo do produto de um lado, lista de checks do outro, parágrafo abaixo e botão "Saiba mais"), sobre uma foto de natureza com overlay.

**Conteúdo exato:**
- Logo: `siapesqlogo.svg` (dentro de um card branco arredondado, como nos outros produtos)
- Lista com checks (usar `iconChecked.png`):
  1. `Mapas de distribuição das espécies`
  2. `Projeções para 2050 e 2100`
  3. `Predições e relatórios para exportar`
- Parágrafo:
  `A plataforma SIAPESQ disponibiliza mapas interativos que permitem localizar, monitorar e projetar a distribuição das espécies — do cenário atual às projeções de 2050 e 2100 — com facilidade e precisão científica.`
- Botão: `Saiba mais` → navega para `/plataforma` (rota criada na Fase 2), com `window.scroll(0,0)` no clique, igual às outras seções

**Header:** adicionar `PLATAFORMA` na navegação. Ordem final dos links à esquerda: `SIAPESQ` · `SIAPREPS` · `PHYTOBLOOM` · `PLATAFORMA`; à direita mantém `SOBRE NÓS` e `CONTATO`. O link da página ativa fica em destaque.

---

### FASE 2 — Página completa da Plataforma (`/plataforma`)

**Objetivo:** página dedicada e **densa de conteúdo**.

> ⚠️ **Feedback importante do cliente:** a versão prototipada "parecia slides de apresentação, não um site". **Cada seção precisa de conteúdo de verdade** — parágrafos explicativos, listas, números de etapa, descrições dos perfis de usuário. Evite seções que sejam só um título gigante + 3 bullets soltos.

**Arquivos:**
- Criar `src/pages/plataforma.jsx`
- Criar `src/components/sections/plataforma/` com um componente por seção
- Criar `src/style/plataforma/` com o CSS de cada seção
- Editar `src/App.jsx` — adicionar `<Route path="/plataforma" element={<Plataforma />} />`

**Estrutura da página (nesta ordem):**

**2.1 — Hero**
- Foto de fundo: capivara em ambiente natural (`src/imgs/`) + overlay escuro à esquerda
- Header padrão do site por cima
- Wordmark grande: `SIAPESQ`
- Título (2 linhas, a segunda em **verde `#86BD51`**):
  `Monitoramento inteligente de espécies` / `em tempo real`
- Descrição: `Visualize dados em mapas interativos, acompanhe estatísticas e analise cenários futuros com precisão científica.`
- Botão: `Acessar Plataforma`

**2.2 — Recursos** (faixa de 3 cards sobre foto com overlay)
1. **Análise inteligente** — `Acompanhe estatísticas, tendências e a evolução das espécies no tempo.`
2. **Catálogo de espécies** — `Navegue por categorias de espécies e acesse fichas científicas detalhadas.`
3. **Exportação de dados** — `Baixe predições e relatórios prontos para análise e pesquisa.`

**2.3 — Como funciona** (fundo claro, 4 etapas numeradas com descrição — não só o nome da etapa)
1. **Categorias** — `Comece escolhendo um grupo de espécies: aves, peixes, plantas, mamíferos, répteis e outros.`
2. **Espécies** — `Dentro da categoria, selecione a espécie que quer acompanhar e veja sua ficha científica.`
3. **Localização no mapa** — `Abra o mapa da espécie e veja onde ela se concentra no território.`
4. **Análises** — `Escolha a análise: anual, mensal ou as projeções para 2050 e 2100.`

**2.4 — O mapa** (seção imersiva com screenshot real da plataforma + painel de vidro)
- Imagem: screenshot real do mapa da plataforma (ver Seção 6 — Assets)
- Rótulo do painel: `O QUE VOCÊ VÊ NO MAPA`
- Itens do painel:
  1. `Veja onde cada espécie se concentra, num mapa de calor fácil de entender.`
  2. `Com base em dados científicos reais de observação das espécies.`
  3. `Compare a distribuição de hoje com as projeções para 2050 e 2100.`
- Abaixo, um parágrafo de apoio explicando que as cores do mapa indicam maior ou menor concentração da espécie.

**2.5 — Para quem é** (fundo claro, 4 perfis **com descrição** — não só chips)
1. **Pesquisadores** — `Dados científicos organizados para embasar estudos e publicações.`
2. **Gestão pesqueira** — `Informação geográfica para apoiar decisões de manejo e produção.`
3. **Órgãos ambientais** — `Suporte técnico para fiscalização, licenciamento e políticas públicas.`
4. **Setores produtivos (ESG)** — `Evidência ambiental para relatórios de sustentabilidade e adequação ESG.`

**2.6 — Acesse a plataforma** (CTA final, imersiva)
- Rótulo: `ACESSO À PLATAFORMA`
- Título: `Explore as espécies direto no seu navegador`
- Texto: `Mapas, análises e projeções climáticas numa plataforma online — sem instalar nada, de qualquer computador.`
- Três destaques: `100% online` · `Sem instalação` · `Dados científicos`
- Botão: `Acessar a plataforma`

**2.7 — Footer**
Reaproveite o footer do site. Se for criar um novo (multi-colunas), use:
- Marca: logo SIAPESQ + `Inteligência artificial em pesquisa ambiental. Monitoramento e visualização de dados de espécies.`
- **Produtos:** `SIAPREPS` · `PhytoBloom` · `Plataforma SIAPESQ`
- **Plataforma:** `Mapa` · `Análises` · `Recursos`
- **Institucional:** `Sobre nós` · `Parceiros` · `Contato`
- **Contato:** `@siapesq` · `(53) 99950-3671` · `siapesq@gmail.com`
- Barra inferior: `Copyright © 2024 SIAPESQ · Todos os direitos reservados.`

---

### FASE 3 — Padronizar os heroes de SIAPREPS e PhytoBloom

**Objetivo:** deixar os heroes das três plataformas com o **mesmo layout**, que é o do hero da Plataforma SIAPESQ (Fase 2.1) — o cliente aprovou esse como padrão.

**Arquivos:** `src/pages/siapreps.jsx`, `src/pages/phytobloom.jsx` e seus CSS. **Leia-os antes de alterar.**

**Template do hero (idêntico nos três):**
```
[ header do site sobre a foto ]
[ WORDMARK do produto — branco, muito grande ]
[ Título em 2 linhas — a 2ª linha na cor de destaque do produto ]
[ Descrição — 1 a 2 linhas, fonte menor ]
[ Botão pill ]
```
Foto full-bleed com overlay escuro à esquerda. Conteúdo alinhado à esquerda.

**Conteúdo por produto:**

| | SIAPESQ | SIAPREPS | PhytoBloom |
|---|---|---|---|
| Cor de destaque | Verde `#86BD51` | Ciano `#18A7B3` | Teal `#18A7B3` |
| Título linha 1 | `Monitoramento inteligente de espécies` | `Localize os cardumes e` | `Monitore reservatórios e` |
| Título linha 2 | `em tempo real` | `pesque com precisão` | `antecipe crises` |
| Descrição | `Visualize dados em mapas interativos, acompanhe estatísticas e analise cenários futuros com precisão científica.` | `Mapas de localização em tempo real para uma pesca mais rápida, eficiente e sustentável.` | `Identifique desregulações ambientais e evite eventos críticos com o PhytoBloom Vision.` |
| Botão | `Acessar Plataforma` | `Comece agora` | `Comece agora` |

**Mantenha as fotos de fundo atuais** de cada página (cardume para SIAPREPS, reservatório para PhytoBloom).

> **Decisão do cliente (confirmada): a maleta FICA.** O hero do SIAPREPS mantém o mockup da maleta/notebook à direita — é um destaque proposital do carro-chefe, não uma inconsistência. Padronize apenas o **bloco de texto** (wordmark → título → descrição → botão, alinhado à esquerda) e mantenha a maleta à direita.

---

## 6. Assets

**Já existem em `src/imgs/`:** `siapesqlogo.svg`, `logoBranco.svg`, `siapesqLogoB.png`, `siaprepsLogo.png`, `NomeSiapreps.svg`, `Phytobloom.svg`, `PhytobloomNome.svg`, `iconChecked.png`, `mar.png`, `wave.svg`, `footerV2.png`, `satelite.svg`, `lupa.svg`, `mapa.svg`, e os ícones de fauna.

**Precisam ser adicionados a `src/imgs/`** (peça ao cliente ou copie da pasta indicada):
- **Foto da capivara** — fundo do hero da plataforma
- **Foto de aves/paisagem** — fundo da seção de recursos *(opcional)*
- **Screenshot do mapa da plataforma** — disponível em `SIAPESQ-Front-end/public/tutorialPlataforma/img3.png` (mapa) e `img4.png` (mapa + painel de análises)

**Otimização:** as fotos de fundo são pesadas (2 MB+). Comprima antes de commitar; o site é servido por GitHub Pages.

---

## 7. Critérios de aceite (issue #39)

- [ ] A nova seção sobre a plataforma foi criada e explica claramente o que ela é
- [ ] A seção cobre: o que é, objetivo, público-alvo, principais funcionalidades, benefícios e a relação com análise, gestão e visualização de dados geoespaciais
- [ ] O design segue o padrão visual do projeto (paleta, Mulish, botões, ondas)
- [ ] A implementação reutiliza a estrutura existente de componentes/sections
- [ ] A landing continua responsiva em todos os breakpoints
- [ ] Nenhuma das demais seções da página quebrou
- [ ] `npm run build` roda sem erros nem warnings novos

---

## 8. Ordem sugerida de trabalho

1. Ler `src/pages/index.jsx`, `src/components/sections/siapreps.jsx`, `src/components/common/card.jsx`, `src/components/layouts/header.jsx` e `src/style/style.css` para absorver as convenções
2. **Fase 1** (seção na home + link no header) → validar visualmente com `npm start`
3. **Fase 2** (página `/plataforma`, seção por seção) → validar cada seção conforme criar
4. **Fase 3** (padronizar os heroes) → só depois de confirmar a decisão da maleta do SIAPREPS
5. Rodar `npm run build` e conferir responsividade em 1920 / 1366 / 1024 / 650 / 375

---

## 9. O que NÃO fazer

- ❌ Instalar Tailwind ou qualquer framework de CSS novo
- ❌ Copiar/colar código do `arca-site` (Vite + Tailwind — incompatível)
- ❌ Escrever "satélite" ou "cor real" ao descrever o mapa da plataforma de espécies
- ❌ Usar jargão técnico na interface (GBIF, GeoTIFF, raster, densidade de ocorrências)
- ❌ Inventar estatísticas, preços, planos, depoimentos ou funcionalidades
- ❌ Texto branco sobre foto sem overlay escuro
- ❌ Alterar o comportamento das rotas existentes ou o `HashRouter`
- ❌ Remover a maleta do hero do SIAPREPS — o cliente confirmou que ela **fica**
- ❌ Salvar fotografias como `.svg` — SVG é só para vetores (logos e ícones). Fotos vão em `.jpg`/`.webp` comprimidos
