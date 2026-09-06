# 02 — Internacionalização (i18n)

## 1. Objetivo

O site é **trilíngue**: português, inglês e espanhol. Este documento explica como o idioma é
escolhido, onde ficam os textos e como adicionar ou traduzir conteúdo.

Arquivos: `src/i18n/index.js`, `src/i18n/locales/*.json`,
`src/components/common/LanguageSwitcher.jsx`.

---

## 2. Os três idiomas

```js
export const SUPPORTED_LANGUAGES = [
  { code: "pt-BR", label: "PT" },
  { code: "en-US", label: "EN" },
  { code: "es-ES", label: "ES" },
];
```

O `LanguageSwitcher` monta os botões a partir dessa constante — **adicionar um idioma à lista
faz o botão aparecer sozinho**.

---

## 3. Como o idioma é escolhido

```js
detection: {
  order: ["localStorage", "navigator", "htmlTag"],
  lookupLocalStorage: "i18nextLng",
  caches: ["localStorage"],
}
```

Na ordem:

1. **`localStorage`** (chave `i18nextLng`) — se o visitante já escolheu antes, essa escolha
   vence. É o comportamento certo: a preferência explícita ganha do palpite.
2. **`navigator`** — o idioma do navegador.
3. **`htmlTag`** — o `lang` do `<html>`.

A escolha é **gravada** no `localStorage` (`caches`), então persiste entre visitas.

---

## 4. O fallback por idioma base

```js
fallbackLng: {
  pt: ["pt-BR"],
  en: ["en-US"],
  es: ["es-ES"],
  default: ["pt-BR"],
},
supportedLngs: ["pt-BR", "en-US", "es-ES"],
```

O código já traz o comentário que explica: *"Mapeia códigos base do navegador ('pt', 'en',
'es') para a variante regional correspondente; qualquer outro idioma cai em pt-BR (default)."*

**Por que isso importa:** um navegador configurado como `pt-PT` (Portugal), `en-GB` ou
`es-AR` manda só o código base na negociação. Sem esse mapa, cairiam no default e um
visitante português veria o site em... português do Brasil — o que até funcionaria — mas um
argentino veria em português. Com o mapa, cada um cai na variante certa.

Qualquer outro idioma (francês, alemão) cai em **pt-BR**.

---

## 5. O atributo `lang` do `<html>`

```js
const applyDocumentLang = (lng) => {
  if (typeof document !== "undefined" && lng) {
    document.documentElement.lang = lng;
  }
};
applyDocumentLang(i18n.resolvedLanguage || i18n.language);
i18n.on("languageChanged", applyDocumentLang);
```

Mantém o `<html lang="…">` sincronizado com o idioma atual. Não é detalhe cosmético:

- **Acessibilidade** — leitores de tela usam o `lang` para escolher a pronúncia.
- **SEO** — buscadores usam para saber em que idioma indexar a página.
- **Navegador** — a oferta de tradução automática depende disso.

É um cuidado que muitos projetos esquecem. Ao adicionar um idioma, ele funciona sozinho.

---

## 6. Estrutura dos arquivos de tradução

Os três JSON têm **exatamente a mesma estrutura de chaves**, agrupadas por área:

```json
{
  "nav":      { "siapreps", "phytobloom", "about", "contact", "logoAlt…" },
  "language": { "label" },
  "cta":      { "learnMore", "startNow", "downloadSoftware" },
  "download": { "version", "availableFor", "windows" },
  "form":     { "title", … },
  "home":     { "heroTitle", "heroText", "innovationTitle", … },
  "common":   { "backgroundAlt", … }
}
```

### 6.1 Interpolação

```json
"version": "Versão {{version}}"
```

```jsx
t("download.version", { version: "1.0.5" })
```

### 6.2 Textos alternativos também são traduzidos

```json
"logoAltBlue": "Logo da SIAPESQ na coloração azul"
```

```jsx
<img src={mar} alt={t("common.backgroundAlt")} />
```

**Todo `alt` do site passa por `t()`.** Mantenha assim ao adicionar imagens.

---

## 7. Como adicionar um texto novo

1. Escolha a chave no grupo certo (`home.novoTitulo`, `form.novoCampo`…)
2. Adicione **nos três** arquivos: `pt-BR.json`, `en-US.json`, `es-ES.json`
3. Use `t("grupo.chave")` no componente

> ⚠️ **Se esquecer um idioma, o i18next mostra a própria chave na tela** (`home.novoTitulo`)
> em vez do texto. É um bug visível e constrangedor. **Sempre edite os três juntos.**

Não há verificação automática de chaves faltando — ver `04_…` §7.

---

## 8. Como adicionar um idioma

1. Crie `src/i18n/locales/<codigo>.json` copiando o `pt-BR.json` e traduzindo
2. Em `src/i18n/index.js`:
   - importe o arquivo
   - adicione em `resources`
   - adicione o código base em `fallbackLng` (ex.: `fr: ["fr-FR"]`)
   - adicione o código completo em `supportedLngs`
   - adicione a entrada em `SUPPORTED_LANGUAGES` com o rótulo do botão

O botão no `LanguageSwitcher` e o `lang` do `<html>` passam a funcionar sem mais nada.

---

## 9. Observações técnicas

- **`escapeValue: false`** na interpolação, com o comentário *"React já protege contra XSS"*.
  Está correto: o React escapa por padrão ao renderizar. Mas isso deixa de valer se algum
  texto traduzido for injetado com `dangerouslySetInnerHTML` — **não faça isso** com conteúdo
  vindo do i18n.

- **A internacionalização é recente** (commit de 10/07/2026, "adaptando para
  internacionalização do site"). É o trabalho mais novo do repositório.

- **O idioma não entra na URL.** Não existe `siapesq.com/#/en/siapreps`. Consequências: não dá
  para compartilhar link numa língua específica, e buscadores indexam só a versão padrão. Se
  o alcance internacional passar a ser prioridade, é a primeira coisa a mudar (junto com
  `hreflang`).
