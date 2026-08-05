# Handoff — Continuação: PhytoBloom

Documento de contexto para continuar o trabalho (task #39: "Adaptar a landing page
para apresentar melhor as plataformas"). O SIAPESQ (`/plataforma`) e o SIAPREPS
(`/siapreps`) já foram feitos. **Próximo passo: PhytoBloom**, seguindo o mesmo
padrão. A memória local do Claude NÃO vem pelo git — este arquivo é o contexto.

Stack: Create React App, React 18, react-router-dom v6 (HashRouter), **CSS puro**
(sem Tailwind), fontes Mulish/Poppins.

---

## 1. Ideia central do design system

Cada produto tem uma **identidade de bioma por cor**, reusando a MESMA estrutura
de seções e classes CSS. Só a paleta muda:

- **SIAPESQ** = terrestre → verde/marrom (paleta no `:root`)
- **SIAPREPS** = marinho → azul-oceano (paleta na classe `.plat-mar`)
- **PhytoBloom** = algas/fitoplâncton → **verde-azulado/teal** (paleta a CRIAR)

A página é "pintada" pelo tema envolvendo tudo numa classe:
`<div className="plat-mar">...</div>` aplica a paleta azul a todas as classes
`plat_` daquela página. Para o PhytoBloom, criar uma classe análoga (ex.:
`.plat-alga`) e envolver a página nela.

---

## 2. Arquivos-chave

- `src/style/plataforma/pagina.css` — **CSS mestre** de todas as seções (prefixo
  `plat_`). Contém `:root` (terrestre) e `.plat-mar` (marítimo) com as variáveis
  `--plat-*`. É aqui que vai entrar a paleta do PhytoBloom.
- `src/style/plataforma/especies.css` — carrossel de espécies (prefixo `esp_`) +
  bloco de espécies protegidas (`esp_evitar_*`).
- `src/style/reveal.css` + `src/components/common/Reveal.jsx` — animação de
  entrada no scroll (IntersectionObserver). Uso: `<Reveal>` ou `<Reveal stagger>`.
  ⚠️ `.reveal` usa `will-change`, que cria stacking context (relevante p/ blend).
- `src/components/layouts/header.jsx` + `src/style/style.css` — header GLOBAL.
  Já tem halo no logo (`.header img`, desligado na home via `.index`), sombra +
  hover (sublinhado) nos links (`.header nav ul a.links`) e "lift" do logo no
  hover. PhytoBloom hoje usa um header PRÓPRIO (`.headerContainer`) — ver item 5.
- `src/components/sections/siaprepsFooter.jsx` — **footer temável**, prop
  `tema` = `"siapesq" | "plataforma" | "siapreps" | "phytobloom"`. CSS em
  `src/style/footer/footer.css` (blocos `.sf--{tema}`). Já tem bloco phytobloom.
- `IMPLEMENTACAO-PLATAFORMA.md` — spec original (fases 1–3), útil de contexto.

### Variáveis da paleta (o que cada `--plat-*` controla)
`--plat-dark / dark-2 / dark-3` (seções escuras + gradientes), `--plat-light`
(seções claras), `--plat-panel` (cards claros), `--plat-border`, `--plat-ink /
ink-2` (textos sobre claro), `--plat-green` (acento/destaque — no SIAPREPS é
ciano), `--plat-earth` (eyebrow/acento quente), `--plat-ring / ring-hover` (aro
das fotos do carrossel).

---

## 3. Estrutura das páginas prontas (modelo a copiar)

### SIAPESQ — `src/pages/plataforma.jsx`
Hero → Especies → Recursos → ComoFunciona → Mapa → Publico →
`<div className="plat_final">`[Acesso, Footer tema="plataforma"].
Componentes em `src/components/sections/plataforma/`.

### SIAPREPS — `src/pages/siapreps.jsx` (envolto em `.plat-mar`)
Hero → Especies(+protegidas) → Recursos → ComoFunciona → **Barco** → Mapa →
`plat_final`[Acesso, Footer tema="siapreps"].
Componentes em `src/components/sections/siapreps-plat/` (hero, especies, recursos,
comoFunciona, mapa, acesso). O Barco é o componente ANTIGO reaproveitado
(`src/components/sections/siaprepsBarco.jsx` + `src/style/siapreps/siapreps_barco/barco.css`),
com foto do mar de fundo + 3D Spline + stats 60/60/70.

Detalhes já resolvidos no SIAPREPS que valem de referência:
- Hero: foto de fundo mascarada (`.plat_hero_foto`), enquadrada por
  `background-size`/`background-position`; wordmark dimensionada por altura de
  letra; halo no logo do header.
- Carrossel `esp_` (marquee) + bloco `esp_evitar` (protegidas, SEM círculo, com
  `mix-blend-mode: multiply` + fundo `var(--plat-light)` pra sumir o fundo branco
  das ilustrações; `min-height` no nome pra alinhar itens de 1 e 2 linhas).
  A seção `.esp` vira `100vh` só no tema (escopado em `.plat-mar .esp`).
- Mapa SEM overlay (mapa vívido) + painel de vidro escuro contido à direita
  (`.plat_mapa_painel--full`, cor por tema). Imagem do mapa via `object-fit`
  ajustado. **Isto foi aplicado nos DOIS** (SIAPESQ e SIAPREPS).
- Acesso + Footer dividem 1 tela (`plat_final`); mockup com `max-height` pra caber.

---

## 4. Pendências / avisos

- **"Como funciona" do SIAPREPS** usa `passo1-4.jpg` (que são do SIAPESQ) como
  PLACEHOLDER. O usuário vai trocar pelas telas reais do app SIAPREPS depois.
- **Barco 3D (Spline)** às vezes aparece como quadro branco: é a cena externa do
  Spline não carregando (`my.spline.design/...`), NÃO é bug do código. Se cair de
  vez, trocar por imagem estática (`src/imgs/barcopesca.svg`).
- **Build de produção dá OOM** no minificador por causa de SVGs gigantes
  embutidos (`siapreps.svg` 566KB, `siaprepsMonitor.svg` 1.6MB, `siapresqPc.svg`
  1.5MB). O fluxo é revisar via `npm start` (dev). Se precisar buildar, otimizar
  esses SVGs primeiro (ou `NODE_OPTIONS=--max-old-space-size=4096`, que ainda
  assim pode estourar).

---

## 5. Como fazer o PhytoBloom (próximo passo)

1. **Criar a paleta do tema** em `src/style/plataforma/pagina.css`, uma classe
   análoga à `.plat-mar` — sugestão `.plat-alga` — com as mesmas variáveis
   `--plat-*` em tons de **teal / verde-azulado** (bioma algas/fitoplâncton).
   Confirmar as cores exatas com o usuário. Referência de cores da marca em
   `src/imgs/Phytobloom.svg` / `PhytoblooNome.svg` e no CSS existente
   `src/style/phytobloom/`.
2. **Criar a página** `src/pages/phytobloom.jsx` envolta em `.plat-alga`,
   compondo as seções no mesmo padrão (Hero → ... → `plat_final`[Acesso,
   Footer tema="phytobloom"]).
3. **Criar os componentes** em `src/components/sections/phytobloom-plat/`
   espelhando os do SIAPREPS, com o conteúdo/copy do PhytoBloom (o que é, para
   quem, como funciona). Reaproveitar as classes `plat_`/`esp_` — só o texto,
   imagens e a classe de tema mudam.
4. **Rota**: conferir/ajustar a rota `/phytobloom` no `src/App.jsx`.
5. **Footer**: usar `<SectionFooter tema="phytobloom" />` (bloco já existe no
   `footer.css`; ajustar a cor se precisar).
6. **Header**: hoje o PhytoBloom usa um header próprio (`.headerContainer`, em
   `src/style/phytobloom/`). Decidir com o usuário se padroniza para o `<Header/>`
   global (que já tem o tratamento de contraste) ou mantém o próprio.

Conteúdo/tom: copy comercial, sem jargão técnico. Sempre reusar a estrutura
existente — mudar cor + conteúdo, não reinventar o layout.

---

## 6. Regras de trabalho

- **NÃO rodar `npm run build` a cada edição.** O usuário revisa ao vivo com
  `npm start` (hot reload) e valida visualmente. Buildar só se pedido.
- **Sem travessões (—)** nos textos — o usuário não gosta; usar vírgula/ponto.
- Cabeçalho de seção: conteúdo simétrico/full-width → centralizado; texto ao lado
  de um visual → alinhado à esquerda.
- Mudanças de tema devem ser **escopadas na classe do tema** (ex.: `.plat-mar ...`)
  pra não afetar as outras páginas.
- O usuário itera bastante no visual pelos prints — fazer ajustes pequenos e
  pontuais, explicando os "botões" (quais valores mexer) pra ele calibrar.

Branch de trabalho: `feat/secao-plataforma-siapesq`.
