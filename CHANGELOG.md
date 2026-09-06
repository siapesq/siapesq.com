# CHANGELOG — siapesq.com

> Criado em **06/09/2026**, reconstruindo o histórico a partir dos commits. Entradas
> anteriores a essa data são resumos agrupados por período.
> **A partir daqui, toda mudança relevante entra aqui junto com o commit.**

---

## 06/09/2026 — Documentação técnica

O repositório tinha um `README.md` de **uma linha** (`# landingPage`) — a única documentação
desde agosto de 2024, contra código de julho de 2026. Cerca de **dois anos** de defasagem.

Agora tem, no padrão do `tools-train-models`:

- `documentation/00` a `04` — visão geral, páginas e seções, internacionalização, deploy e
  dívidas técnicas.
- `GUIA_DO_COLABORADOR.md` — passo a passo para rodar e alterar o site.
- `README.md` reescrito como índice e porta de entrada.

### Achados registrados

Todos em `documentation/04_dividas_tecnicas_documentacao.md`, com ordem de ataque:

| Item | Descrição |
|---|---|
| Formulário | Falha de envio só vai para o `console.error` — **o visitante não é avisado**. Num site de captação, cada erro silencioso é um contato perdido |
| Rota 404 | `<Route path="*">` está comentada: URL inválida mostra **tela branca** |
| `deploy.yml` | Aponta para `siapesq/landingPage`, nome **antigo** do repositório. Funciona pelo redirecionamento do GitHub, mas quebra se alguém criar um repo com o nome antigo |
| Página "Sobre nós" | `pages/about.jsx` existe, tem **3 seções próprias**, estilos e tradução nos 3 idiomas — e a rota está **comentada**. Foi construída e nunca publicada |
| Responsividade | `window.innerWidth > 1366` lido no render, sem listener: blocos somem ao redimensionar e só voltam recarregando |
| Estilos | `style.css` compilado versionado junto do `style.scss` — editar o SCSS não tem efeito sem regerar o CSS |
| Traduções | Nada verifica paridade de chaves entre os 3 idiomas; chave faltando vira texto cru na tela |
| `package.json` | Ainda se chama `testereact` |

### O que já estava bem-feito

Também registrado: o i18n tem fallback de `pt`/`en`/`es` para as variantes regionais,
mantém o `<html lang>` sincronizado (acessibilidade e SEO), persiste a escolha do visitante,
e **traduz até os textos alternativos das imagens**. Está acima da média.

---

## 10/07/2026 — Internacionalização

O site passou de monolíngue a **trilíngue** (PT-BR, EN-US, ES-ES).

- `i18next` + `react-i18next` + `i18next-browser-languagedetector`.
- Três arquivos de tradução com estrutura idêntica de chaves.
- Detecção por `localStorage` → navegador → `htmlTag`, com a escolha persistida.
- Fallback de código base (`pt`, `en`, `es`) para a variante regional; qualquer outro idioma
  cai em pt-BR.
- `<html lang>` sincronizado a cada troca.
- `LanguageSwitcher` montado a partir de `SUPPORTED_LANGUAGES`.
- Todo texto do site — inclusive os `alt` das imagens — movido para as chaves.

## 09/11/2025 e 03–06/11/2025 — Ajustes visuais

- Ajuste de espaçamento no mobile.
- Ajustes na seção do barco (SIAPREPS).

## Até 30/06/2025 — Construção do site

Período de construção das páginas e seções:

- Home com herói, pilares (Inovação / Otimização / Impacto), "helps", chamadas para os dois
  produtos, parceiros e rodapé.
- Página **SIAPREPS**: cabeçalho, barco, cardume, plataforma, formulário, rodapé.
- Página **PHYTOBLOOM**: cabeçalho, planta, YouTube, plataforma, formulário, rodapé.
- Página de contato.
- Formulário integrado a `api.siapesq.com/v1/landingPage/`, com o campo `plataforma`
  identificando a origem.
- Publicação automática no GitHub Pages com domínio próprio via CNAME.
- Workflow separado validando builds na branch `dev`.

---

## Como escrever uma entrada aqui

Diga **o que mudou**, **por quê**, e principalmente **o que precisa ser feito junto**.

O exemplo que faltou: quando o repositório foi renomeado de `landingPage` para `siapesq.com`,
o `deploy.yml` continuou apontando para o nome antigo. Uma entrada dizendo *"repositório
renomeado — conferir o `git remote set-url` no `deploy.yml`"* teria resolvido na hora, em vez
de deixar uma bomba-relógio.
