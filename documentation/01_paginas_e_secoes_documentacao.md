# 01 — Páginas, seções e estilos

## 1. Objetivo

Descrever como uma página é montada, onde mexer para mudar cada trecho do site, e como os
estilos estão organizados.

---

## 2. O modelo de composição

Uma página **não contém conteúdo** — ela lista seções:

```jsx
// pages/phytobloom.jsx
<SectionHeader />
<SectionPlanta />
<SectionYoutube />
<SectionPlataforma />
<SectionForm />
<SectionFooter />
```

> **Onde mexer:** para mudar um trecho do site, encontre a **seção**, não a página. As páginas
> só definem a ordem.

---

## 3. Mapa das seções

`src/components/sections/` — 24 arquivos, nomeados pelo produto.

### Home (`pages/index.jsx`)

| Seção | Conteúdo |
|---|---|
| *(inline na página)* | Herói: imagem de fundo, monitor, título e texto |
| *(inline)* | Faixa com os 3 pilares: Inovação · Otimização · Impacto |
| `helps.jsx` | O que a SIAPESQ resolve |
| `siapreps.jsx` | Chamada para o SIAPREPS |
| `phytobloom.jsx` | Chamada para o PHYTOBLOOM |
| `parceiros.jsx` | Logos dos parceiros |
| `siaprepsFooter.jsx` | Rodapé (compartilhado com o SIAPREPS) |

### SIAPREPS (`pages/siapreps.jsx`)

`siaprepsHeader` · `siaprepsBarco` · `siaprepsCardume` · `siaprepsPlataforma` ·
`siaprepsFormS` · `siaprepsFooter`

### PHYTOBLOOM (`pages/phytobloom.jsx`)

`phytobloomHeader` · `phytobloomPlanta` · `phytobloomyoutube` · `phytobloomPlataforma` ·
`phytobloomForm` · `phytobloomFooter`

### Outras

`aboutHeader` · `aboutCards` · `equipe` · `formContato`

> ⚠️ `aboutHeader`, `aboutCards` e `equipe` alimentam `pages/about.jsx`, que **não está
> roteada** (a rota está comentada no `App.jsx`). O conteúdo existe e não é acessível.
> Ver `04_dividas_tecnicas_documentacao.md` §3.

---

## 4. Componentes comuns

`src/components/common/`

| Componente | Papel |
|---|---|
| `card.jsx` | Cartão genérico |
| `aboutCard.jsx` | Cartão da página "sobre" |
| `LanguageSwitcher.jsx` | Troca de idioma (PT / EN / ES) |

`src/components/layouts/header.jsx` é o cabeçalho, e recebe a prop **`page`**
(`<Header page={'index'} />`) — é assim que ele sabe qual item destacar e qual variante da
logo usar.

---

## 5. Estilos

Convivem **CSS e SCSS**, organizados por página e por seção:

```
style/
  style.scss · style.css · style.css.map      globais
  styles/_styles.scss · _variables.scss       variáveis e base
  styles/header.css · languageSwitcher.css
  index/index.css
  about/cards.css · header.css
  contato/form.css
  equipe/carrosel.css
  principal/parceiros.css
  phytobloom/    PhytoBloom · header · planta · plataforma · youtube · form · footer
  siapreps/      siapreps.css + _header/_index/_siapreps.scss
                 siapreps_Header/ · _barco/ · _cardume/ · _plataforma/ ·
                 _FormS/ · _Footer/ · _section/
  modules/_about.scss · _header.scss · _index.scss
```

> ⚠️ **`style.css` e `style.css.map` estão versionados** junto do `style.scss` que os gera.
> Isso significa que uma alteração no SCSS **não tem efeito** se o CSS compilado não for
> regerado e commitado junto. É a pegadinha mais provável para quem chega.
>
> Antes de editar um `.scss`, confira se existe um `.css` correspondente versionado — e, se
> existir, regenere e commite os dois.

A convenção geral: **um arquivo de estilo por seção**, com o mesmo nome da seção.

---

## 6. Mídia

| Pasta | Conteúdo |
|---|---|
| `src/imgs/` | Imagens e SVGs, importados como módulo (`import mar from "../imgs/mar.png"`) |
| `src/videos/agua.MOV` | Vídeo de fundo |

Importar a imagem em vez de referenciar por caminho faz o CRA versionar o arquivo com hash no
build (cache busting automático).

> ⚠️ `agua.MOV` — arquivo de vídeo versionado em git e no formato `.MOV`, que não é o mais
> compatível com navegadores (`.mp4`/`.webm` são). Vale conferir se ele é realmente usado.

---

## 7. Textos

**Nenhum texto visível deve ser escrito direto no JSX.** Tudo passa por `t()`:

```jsx
const { t } = useTranslation();
<h2>{t("home.heroTitle")}</h2>
<img src={mar} alt={t("common.backgroundAlt")} />
```

Repare que **até o `alt` das imagens é traduzido** — é acessibilidade feita direito.

Ver `02_internacionalizacao_documentacao.md`.

---

## 8. Responsividade

Duas técnicas convivem:

1. **CSS** (`@media`) — a forma padrão, usada na maior parte.
2. **JavaScript** — `window.innerWidth > 1366` decidindo o que renderizar:

```jsx
<img src={window.innerWidth > 1366 ? wave : footerV2} … />
{(window.innerWidth > 1366) ? ( <article>…</article> ) : <></>}
```

⚠️ **Isso não reage a redimensionamento.** O valor é lido uma vez, no render. Girar um tablet
ou redimensionar a janela **não** troca o conteúdo até a página ser recarregada. Ver
`04_dividas_tecnicas_documentacao.md` §4.

---

## 9. Formulário de contato

`src/controllers/sendEmail.js`:

```js
POST https://api.siapesq.com/v1/landingPage/landingPage/
{ email, nome, sobrenome, mensagem, plataforma }
```

O campo **`plataforma`** identifica de qual formulário veio (contato geral, SIAPREPS ou
PHYTOBLOOM) — é o que permite direcionar o atendimento.

Há três formulários no site, todos usando essa mesma função: `formContato`,
`siaprepsFormS` e `phytobloomForm`.

⚠️ A URL da API está **fixa no código** — não há variável de ambiente. E o tratamento de erro
só faz `console.error`: **uma falha de envio não é comunicada ao visitante**. Ver
`04_…` §6.
