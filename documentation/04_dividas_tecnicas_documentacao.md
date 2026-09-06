# 04 — Dívidas técnicas

> Inventário do que está frágil. Este é um site institucional, não um sistema crítico —
> várias entradas abaixo são cosméticas. As duas primeiras não são.

---

## 1. O que está bem-feito

| Prática | Onde |
|---|---|
| i18n com fallback por idioma base | `i18n/index.js` |
| `<html lang>` sincronizado com o idioma | `i18n/index.js` |
| Preferência de idioma persistida e priorizada | `detection.order` |
| **Todo `alt` de imagem traduzido** | páginas e seções |
| Composição por seções | `pages/*` + `components/sections/` |
| `HashRouter` — escolha correta para GitHub Pages | `App.jsx` |
| CI separando validação (`dev`) de publicação (`main`) | `.github/workflows/` |
| `--cname` no deploy preservando o domínio | `package.json` |

A internacionalização, em particular, está acima do que se costuma ver — inclusive na parte
de acessibilidade.

---

## 2. 🟡 `deploy.yml` aponta para o nome antigo do repositório

```yaml
git remote set-url origin https://…@github.com/siapesq/landingPage.git
```

O repositório é `siapesq/siapesq.com`. Funciona hoje pelo redirecionamento automático do
GitHub (verificado), mas **deixa de funcionar se alguém criar um repositório novo com o nome
antigo** — e o sintoma seria "o deploy passou e o site não mudou".

**Correção:** usar `siapesq/siapesq.com`, ou `${{ github.repository }}`.

---

## 3. 🟡 O `package.json` ainda se chama `testereact`

```json
{ "name": "testereact", "version": "0.1.0" }
```

Nome de rascunho que sobreviveu. Não afeta o site publicado (é privado e não vai ao npm), mas
aparece em logs de build e confunde quem chega.

---

## 4. 🟡 Três páginas órfãs

| Arquivo | Situação |
|---|---|
| `pages/about.jsx` | A rota **está comentada** no `App.jsx` |
| `pages/bugsNaoresolvidos.jsx` | Sem rota; o nome sugere rascunho |
| `pages/siaprepsbootstrap.jsx` | Sem rota; parece versão alternativa do SIAPREPS |

`about.jsx` é o caso que mais importa: existem **três seções inteiras** dedicadas a ele
(`aboutHeader`, `aboutCards`, `equipe`), mais os estilos `style/about/` e
`style/equipe/carrosel.css`, e a entrada `nav.about` ("SOBRE NÓS") **traduzida nos três
idiomas**. Ou seja: alguém construiu a página "Sobre nós" por inteiro e ela **nunca foi
publicada**.

**Decisão a tomar:** descomentar a rota (a página existe e está traduzida) ou remover o
conjunto. Deixar assim custa manutenção sem entregar nada.

---

## 5. 🟡 `window.innerWidth` lido direto no render

```jsx
<img src={window.innerWidth > 1366 ? wave : footerV2} … />
{(window.innerWidth > 1366) ? ( <article>…</article> ) : <></>}
```

O valor é lido **uma vez, no momento do render**, e não há listener de `resize`.

**Consequência:** redimensionar a janela ou girar um tablet **não** troca o conteúdo — só
recarregar a página. Num monitor de 1920px que o usuário divide ao meio, o bloco dos três
pilares (Inovação / Otimização / Impacto) **some e não volta**.

**Correções, da melhor para a mais simples:**
1. Resolver em CSS (`@media`), que já é usado no resto do site — o conteúdo existe no DOM e
   o navegador decide.
2. Um hook `useMediaQuery` com listener de `resize`.

O breakpoint `1366` também não corresponde a nenhum do Bootstrap 5 (`xl` é 1200, `xxl` é
1400), então convive mal com o resto da grade.

---

## 6. 🟡 Sem rota de 404

```jsx
{/* <Route path="*" element={<Index/>} /> */}
```

Comentada. Uma URL inválida (`/#/qualquercoisa`) renderiza **página em branco**, não a home
nem um aviso.

**Correção:** descomentar. É uma linha.

---

## 7. 🟡 Falha de envio do formulário é invisível ao visitante

`sendEmail.js` trata erro apenas com `console.error`:

```js
.catch(error => { console.error("Erro ao enviar email: ", error); });
```

Se a API estiver fora do ar, **o visitante não recebe nenhum aviso**. Pior: pode achar que a
mensagem foi enviada.

Num site cujo objetivo é **captar contato**, essa é a falha com maior custo de negócio da
lista — cada erro silencioso é um lead perdido sem ninguém saber.

**Correção:** devolver o resultado ao componente e exibir sucesso ou erro na tela.

Relacionado: a função mistura `async/await` com `.then()/.catch()` e retorna a promessa
não-resolvida (`return response` antes do `await`), então quem chama não consegue saber se
deu certo mesmo que queira.

---

## 8. 🟡 CSS compilado versionado junto do SCSS

`style/style.css` e `style/style.css.map` estão no git ao lado de `style/style.scss`.

**Consequência:** editar o `.scss` **não muda nada** se o `.css` não for regerado e commitado
junto. É uma armadilha silenciosa — a alteração some sem erro nenhum.

**Correção:** ou remover os `.css` gerados do git e compilar no build, ou documentar
claramente o passo de regeneração (feito em `01_…` §5).

---

## 9. 🟡 Sem verificação de chaves de tradução

Se uma chave existir em `pt-BR.json` e faltar em `en-US.json`, o site **mostra a chave crua**
na tela (`home.novoTitulo`) para quem estiver em inglês. Nada avisa: nem o build, nem o CI.

**Correção barata:** um script que compare as chaves dos três arquivos e falhe se divergirem,
rodando no `dev-build.yml`.

---

## 10. 🟢 Menores

| Item | Onde |
|---|---|
| Idioma não aparece na URL — sem link por idioma, sem `hreflang` | `App.jsx`, `i18n/` |
| `agua.MOV` versionado; `.MOV` tem suporte irregular em navegador | `src/videos/` |
| Mistura de `.css` e `.scss` sem critério evidente | `src/style/` |
| Sem testes (a suíte do CRA está instalada) | — |
| Sem ambiente de pré-visualização — `dev` builda mas não publica | `.github/workflows/` |
| README era uma linha (`# landingPage`) | corrigido em 06/09/2026 |

---

## 11. Ordem sugerida de ataque

| # | Item | Custo | Por quê |
|---|---|---|---|
| 1 | Feedback de erro no formulário (§7) | baixo | **Cada falha silenciosa é um contato perdido** |
| 2 | Descomentar a rota `*` (§6) | trivial | URL errada mostra tela branca |
| 3 | Corrigir o repositório no `deploy.yml` (§2) | trivial | Bomba-relógio de deploy |
| 4 | Decidir sobre a página "Sobre nós" (§4) | baixo | Página pronta e traduzida, invisível |
| 5 | Trocar `window.innerWidth` por CSS (§5) | médio | Conteúdo some ao redimensionar |
| 6 | Script de paridade de traduções (§9) | baixo | Chave crua na tela é bug visível |
| 7 | Resolver o CSS compilado no git (§8) | médio | Alteração de estilo some sem aviso |
| 8 | Renomear `testereact` (§3) | trivial | Higiene |
