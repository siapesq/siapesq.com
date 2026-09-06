# siapesq.com

**Site institucional da SIAPESQ** e vitrine dos seus dois produtos:

| Produto | O que é |
|---|---|
| **SIAPREPS** | Plataforma de controle e gerenciamento de embarcações de pesca |
| **PHYTOBLOOM** | Plataforma de monitoramento de florações de algas |

Site estático em **React 18**, **trilíngue** (PT / EN / ES), publicado no **GitHub Pages** no
domínio `siapesq.com`.

🔗 <https://siapesq.com>

---

## 📚 Documentação

- **➡️ [`documentation/00_visao_geral_documentacao.md`](documentation/00_visao_geral_documentacao.md) — Manual técnico completo (porta de entrada).**
- **🧭 [`GUIA_DO_COLABORADOR.md`](GUIA_DO_COLABORADOR.md) — Passo a passo para rodar do zero.**

| # | Assunto | Documento |
|---|---|---|
| 00 | Visão geral, arquitetura e fluxo | [`00_visao_geral_documentacao.md`](documentation/00_visao_geral_documentacao.md) |
| 01 | Páginas, seções e estilos | [`01_paginas_e_secoes_documentacao.md`](documentation/01_paginas_e_secoes_documentacao.md) |
| 02 | Internacionalização | [`02_internacionalizacao_documentacao.md`](documentation/02_internacionalizacao_documentacao.md) |
| 03 | Deploy e ambientes | [`03_deploy_e_ambientes_documentacao.md`](documentation/03_deploy_e_ambientes_documentacao.md) |
| 04 | Dívidas técnicas | [`04_dividas_tecnicas_documentacao.md`](documentation/04_dividas_tecnicas_documentacao.md) |

Histórico em [`CHANGELOG.md`](CHANGELOG.md).

---

## Rodar

```bash
npm install
npm start        # http://localhost:3000
```

Não precisa de `.env` — o site não tem variáveis de ambiente.

```bash
npm run build    # gera build/
npm run deploy   # publica no GitHub Pages (normalmente quem faz é o CI)
```

---

## Estrutura

```
src/
  App.jsx              HashRouter e as 4 rotas
  pages/               index · siapreps · phytobloom · contato
  components/
    layouts/header     cabeçalho (recebe a prop `page`)
    sections/          24 seções — as peças de cada página
    common/            card, aboutCard, LanguageSwitcher
  i18n/                configuração + pt-BR · en-US · es-ES
  controllers/         sendEmail.js (o POST do formulário)
  style/               CSS e SCSS por página/seção
  imgs/ videos/        mídia

.github/workflows/
  deploy.yml           push em main → PUBLICA
  dev-build.yml        push/PR em dev → só builda
```

---

## Rotas

| URL | Página |
|---|---|
| `siapesq.com/#/` | Home |
| `siapesq.com/#/siapreps` | SIAPREPS |
| `siapesq.com/#/phytobloom` | PHYTOBLOOM |
| `siapesq.com/#/contato` | Contato |

> O `#` na URL não é descuido: o GitHub Pages não reescreve rotas, então sem ele recarregar
> uma página interna daria 404. Ver [`documentation/00_…`](documentation/00_visao_geral_documentacao.md) §2.1.

---

## Como publicar

**Merge em `main` = site no ar.** O GitHub Actions builda e publica sozinho.

Trabalhe em `dev` — o workflow `dev-build.yml` valida que compila, sem publicar.

---

## Quatro coisas que economizam tempo

1. **Para mudar um trecho do site, procure a seção**, não a página. As páginas só definem a
   ordem das seções.

2. **Texto novo vai nos três idiomas.** Se faltar em um, o site mostra a chave crua
   (`home.novoTitulo`) na tela para quem estiver naquele idioma — e nada avisa.

3. **Se editar um `.scss`, confira se existe um `.css` compilado versionado** ao lado. Se
   existir, regenere e commite os dois — senão a alteração simplesmente não tem efeito.

4. **Teste em tela larga e estreita.** Alguns trechos aparecem só acima de 1366px, decididos
   em JavaScript no momento do render — e **não reagem a redimensionamento**.

O inventário completo de dívidas está em
[`documentation/04_…`](documentation/04_dividas_tecnicas_documentacao.md).
