# 🧭 Guia do Colaborador — siapesq.com

**Passo a passo para rodar e alterar o site institucional.**

Escrito para quem nunca abriu este projeto.

---

## 📋 Visão rápida

1. Instalar Node.js
2. Baixar o projeto
3. `npm install` e `npm start`
4. Achar o que você quer mudar
5. Testar nos três idiomas e em duas larguras de tela
6. Enviar para `dev`, depois `main`

Tempo estimado: **10 a 20 minutos** até ver o site rodando.

---

## 0) O que é este projeto

O site público da SIAPESQ. **Site estático** — não tem banco de dados, login nem servidor.
São arquivos HTML/CSS/JS que o GitHub Pages entrega.

A única coisa que sai da máquina do visitante é o **formulário de contato**, que manda os
dados para a API da SIAPESQ.

Duas ideias organizam o código:

**1. Página = lista de seções.** Uma página não tem conteúdo; ela lista os blocos:

```jsx
<SectionHelps /> <SectionSiapreps /> <SectionPhytobloom /> <SectionParceiros />
```

Para mudar um trecho, você procura a **seção**, não a página.

**2. Nenhum texto fica no código.** Tudo vem dos arquivos de idioma:

```jsx
<h2>{t("home.heroTitle")}</h2>
```

---

## 1) Instalar o Node.js (uma vez)

Versão **18 ou maior** (o CI usa 20).

**Windows:** instalador LTS em <https://nodejs.org>.

**Linux:**
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

---

## 2) Baixar e rodar

```bash
git clone https://github.com/siapesq/siapesq.com.git
cd siapesq.com
npm install
npm start
```

Abre em <http://localhost:3000>. **Não precisa configurar nada** — não há `.env`.

---

## 3) Onde fica cada coisa

| Quero mudar… | Vá em |
|---|---|
| Um texto | `src/i18n/locales/pt-BR.json` (**e nos outros dois**) |
| Um bloco da home | `src/components/sections/` — `helps`, `siapreps`, `phytobloom`, `parceiros` |
| A página do SIAPREPS | as seções `siapreps*` |
| A página do PHYTOBLOOM | as seções `phytobloom*` |
| O menu / cabeçalho | `src/components/layouts/header.jsx` |
| Uma cor, um espaçamento | `src/style/` — um arquivo por seção |
| A ordem das seções | `src/pages/<pagina>.jsx` |
| Uma imagem | `src/imgs/` |
| Para onde vai o formulário | `src/controllers/sendEmail.js` |

---

## 4) Mudar um texto

Os textos vivem em **três** arquivos:

```
src/i18n/locales/pt-BR.json
src/i18n/locales/en-US.json
src/i18n/locales/es-ES.json
```

Os três têm **as mesmas chaves**. Para mudar uma frase, edite a chave nos três.

⚠️ **Se você criar uma chave e esquecer de um idioma**, o visitante naquele idioma vê a chave
crua na tela — literalmente `home.novoTitulo`. Nada avisa: nem o build, nem o CI.

> Até o texto alternativo das imagens (o `alt`, que leitores de tela leem) é traduzido.
> Mantenha assim ao adicionar imagens: use `alt={t("...")}`, nunca texto solto.

---

## 5) Mudar um estilo

Os estilos ficam em `src/style/`, um arquivo por seção.

⚠️ **A armadilha:** existem arquivos `.scss` **e** `.css` compilados versionados juntos
(`style.scss` e `style.css`). Se você editar o `.scss` e não regerar o `.css`, **a mudança
simplesmente não aparece** — e nenhum erro é mostrado.

Antes de editar um `.scss`, confira se há um `.css` de mesmo nome no repositório.

---

## 6) Testar antes de enviar

- [ ] **Três idiomas** — troque no seletor e confira se não aparece nenhuma chave crua
- [ ] **Duas larguras** — janela larga (>1366px) e estreita. Alguns blocos aparecem só na
      larga, e **não reagem a redimensionar**: encolha a janela e **recarregue** a página
- [ ] **As quatro rotas** — `/#/`, `/#/siapreps`, `/#/phytobloom`, `/#/contato`
- [ ] Se mexeu em `.scss`, o `.css` foi regerado

---

## 7) Enviar

```bash
git checkout dev
git add .
git commit -m "descreva o que mudou"
git push origin dev
```

O workflow `dev-build.yml` confere se compila.

**Para publicar:** merge de `dev` em `main`. O `deploy.yml` builda e publica sozinho.

> ⚠️ **Merge em `main` põe o site no ar imediatamente.** Não existe ambiente de
> pré-visualização — ninguém consegue ver a mudança publicada antes de ela ser pública.

---

## 8) Problemas conhecidos

| Sintoma | Causa | O que fazer |
|---|---|---|
| Aparece `home.algumaCoisa` na tela | Chave faltando naquele idioma | Adicione nos três JSON |
| Mudei o `.scss` e nada aconteceu | O `.css` compilado é que está sendo usado | Regenere e commite o `.css` |
| Um bloco sumiu ao encolher a janela | `window.innerWidth` lido só no render | Recarregue a página (dívida conhecida, `documentation/04_…` §5) |
| URL errada mostra tela branca | Não há rota de 404 (está comentada) | Dívida conhecida (`04_…` §6) |
| Enviei o formulário e não sei se foi | Erro só vai para o console | Dívida conhecida (`04_…` §7) |
| Deploy passou mas o site não mudou | Cache do navegador, ou o CNAME | Force refresh; confira o branch `gh-pages` |

---

## 9) Onde ler mais

| Quero entender… | Documento |
|---|---|
| O site inteiro | [`documentation/00_…`](documentation/00_visao_geral_documentacao.md) |
| Como as páginas são montadas | [`documentation/01_…`](documentation/01_paginas_e_secoes_documentacao.md) |
| Como funcionam os idiomas | [`documentation/02_…`](documentation/02_internacionalizacao_documentacao.md) |
| Como o site vai ao ar | [`documentation/03_…`](documentation/03_deploy_e_ambientes_documentacao.md) |
| O que está frágil | [`documentation/04_…`](documentation/04_dividas_tecnicas_documentacao.md) |
