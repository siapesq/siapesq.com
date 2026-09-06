# MASTER DOCUMENTATION — siapesq.com

**Manual técnico do site institucional da SIAPESQ.**

> Consolida arquitetura, páginas, internacionalização, publicação e dívidas técnicas.
> Escrito para que outra pessoa consiga **manter e evoluir o site sem ler o código-fonte**.

**Índice**
0. Fluxo · 1. O que é · 2. Arquitetura · 3. Estrutura · 4. Páginas · 5. Execução ·
6. Dependências · 7. Índice dos componentes · 8. Diagnóstico

---

## 0. Fluxo

```
  visitante abre siapesq.com
        │
        ▼
  i18next detecta o idioma
     ordem: localStorage → navegador → atributo lang do <html>
     pt / en / es → variante regional;  qualquer outro → pt-BR
        │
        ▼
  HashRouter escolhe a página
     /#/            institucional (home)
     /#/siapreps    produto SIAPREPS
     /#/phytobloom  produto PHYTOBLOOM
     /#/contato     formulário
        │
        ▼
  a página compõe SEÇÕES (components/sections/)
        │
        ▼
  formulário preenchido → POST api.siapesq.com/v1/landingPage/…
```

---

## 1. O que é

Site institucional e vitrine dos dois produtos da SIAPESQ:

| Produto | O que é |
|---|---|
| **SIAPREPS** | Plataforma de controle e gerenciamento de embarcações de pesca |
| **PHYTOBLOOM** | Plataforma de monitoramento de florações de algas |

É um site **estático** publicado no GitHub Pages, no domínio `siapesq.com`. Não tem banco,
sessão nem área logada. A única integração é o formulário de contato, que envia para a API da
SIAPESQ.

**Trilíngue:** português, inglês e espanhol.

---

## 2. Arquitetura

React 18 criado com Create React App, publicado como arquivos estáticos.

```
┌──────────────────────────────────────────────┐
│  GitHub Pages  (branch gh-pages, CNAME)      │
│  domínio: siapesq.com                        │
└───────────────────┬──────────────────────────┘
                    │
        ┌───────────┴────────────┐
        │  React 18 + CRA        │
        │  HashRouter (4 rotas)  │
        │  i18next (3 idiomas)   │
        │  Bootstrap 5 + GSAP    │
        └───────────┬────────────┘
                    │ só o formulário
        ┌───────────┴────────────┐
        │  api.siapesq.com/v1    │
        │  /landingPage/         │
        └────────────────────────┘
```

### 2.1 Por que `HashRouter` e não `BrowserRouter`

As URLs levam `#`: `siapesq.com/#/siapreps`.

O GitHub Pages serve arquivos estáticos e **não sabe reescrever rotas** para o `index.html`.
Com `BrowserRouter`, alguém que abrisse `siapesq.com/siapreps` direto (ou recarregasse a
página) receberia **404**. O `HashRouter` resolve porque tudo depois do `#` nunca chega ao
servidor.

**Custo:** URLs menos bonitas e indexação de SEO um pouco pior. **Se isso passar a importar**,
a alternativa clássica no GitHub Pages é duplicar o `index.html` como `404.html`.

### 2.2 Composição por seções

Cada página é uma **lista de seções**. `pages/index.jsx`, por exemplo:

```jsx
<SectionHelps /> <SectionSiapreps /> <SectionPhytobloom />
<SectionParceiros /> <SectionFooter />
```

Reordenar a home é mover uma linha. As seções ficam em `components/sections/`, nomeadas pelo
produto a que pertencem (`phytobloom*`, `siapreps*`).

---

## 3. Estrutura

```
src/
  App.jsx                    HashRouter e as 4 rotas
  index.js                   ponto de entrada
  pages/                     index · siapreps · phytobloom · contato
                             (+ about, bugsNaoresolvidos, siaprepsbootstrap —
                              NÃO roteadas, ver 04_…)
  components/
    layouts/header.jsx       cabeçalho, recebe prop `page`
    sections/                24 seções (as peças das páginas)
    common/                  card, aboutCard, LanguageSwitcher
  i18n/
    index.js                 configuração do i18next
    locales/                 pt-BR.json · en-US.json · es-ES.json
  controllers/sendEmail.js   POST do formulário
  style/                     CSS e SCSS, organizados por página/seção
  imgs/ videos/              mídia

.github/workflows/
  deploy.yml                 push em main → publica no GitHub Pages
  dev-build.yml              push/PR em dev → só builda (não publica)
```

---

## 4. Páginas

| Rota | Arquivo | Conteúdo |
|---|---|---|
| `/#/` | `pages/index.jsx` | Home: herói, "helps", SIAPREPS, PHYTOBLOOM, parceiros, rodapé |
| `/#/siapreps` | `pages/siapreps.jsx` | Cabeçalho, barco, cardume, plataforma, formulário, rodapé |
| `/#/phytobloom` | `pages/phytobloom.jsx` | Cabeçalho, planta, YouTube, plataforma, formulário, rodapé |
| `/#/contato` | `pages/contato.jsx` | Formulário de contato |

Três arquivos em `pages/` **não estão roteados**: `about.jsx` (a rota está comentada no
`App.jsx`), `bugsNaoresolvidos.jsx` e `siaprepsbootstrap.jsx`. Ver
`04_dividas_tecnicas_documentacao.md`.

---

## 5. Execução

```bash
npm install
npm start        # http://localhost:3000
npm run build    # gera build/
npm run deploy   # publica no GitHub Pages (normalmente o CI faz isso)
```

Não precisa de `.env` — não há variável de ambiente. A URL da API está fixa em
`src/controllers/sendEmail.js`.

Passo a passo: [`GUIA_DO_COLABORADOR.md`](../GUIA_DO_COLABORADOR.md).

---

## 6. Dependências

| Pacote | Papel |
|---|---|
| `react` 18 + `react-dom` | base |
| `react-router-dom` 6 | roteamento (HashRouter) |
| `i18next` + `react-i18next` + `i18next-browser-languagedetector` | trilíngue |
| `bootstrap` 5 + `react-bootstrap` + `bootstrap-icons` | grade e componentes |
| `gsap` | animações |
| `animate.css` | animações de entrada |
| `axios` | o POST do formulário |
| `gh-pages` (dev) | publicação |

---

## 7. Índice dos componentes

| # | Assunto | Documento |
|---|---|---|
| 00 | Visão geral (este arquivo) | `00_visao_geral_documentacao.md` |
| 01 | Páginas, seções e estilos | `01_paginas_e_secoes_documentacao.md` |
| 02 | Internacionalização | `02_internacionalizacao_documentacao.md` |
| 03 | Deploy e ambientes | `03_deploy_e_ambientes_documentacao.md` |
| 04 | Dívidas técnicas | `04_dividas_tecnicas_documentacao.md` |

---

## 8. Diagnóstico

| Ponto | Situação |
|---|---|
| i18n bem configurado e comentado | ✅ Fallback por idioma base, `lang` do `<html>` sincronizado |
| Composição por seções | ✅ Reordenar página é mover uma linha |
| CI separando `dev` (build) e `main` (deploy) | ✅ |
| `HashRouter` adequado ao GitHub Pages | ✅ Escolha correta para o host |
| `deploy.yml` aponta para o nome **antigo** do repositório | ⚠️ `04_…` §1 |
| `package.json` ainda se chama `testereact` | ⚠️ `04_…` §2 |
| 3 páginas órfãs em `src/pages/` | ⚠️ `04_…` §3 |
| `window.innerWidth` lido direto no render | ⚠️ `04_…` §4 |
| Sem rota de 404 | ⚠️ `04_…` §5 |
| Documentação | ✅ Criada em 06/09/2026 (este conjunto) |
