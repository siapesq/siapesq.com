# 03 — Deploy e ambientes

## 1. Como o site vai ao ar

**Push em `main` → GitHub Actions → `gh-pages` → `siapesq.com`.**

Não há servidor. O site é um conjunto de arquivos estáticos servidos pelo GitHub Pages, com
domínio próprio via CNAME.

```
push em main
   │
   ▼
.github/workflows/deploy.yml   (ubuntu-latest, Node 20, environment: build)
   ├─ checkout
   ├─ git config user.email / user.name        ← secrets EMAIL e USERNAME
   ├─ git remote set-url origin …              ← ver §3
   ├─ npm install
   └─ npm run deploy
         = predeploy: npm run build
         + gh-pages -d build --cname siapesq.com
   │
   ▼
branch gh-pages → GitHub Pages → https://siapesq.com
```

O `--cname siapesq.com` **recria o arquivo CNAME a cada publicação**. Sem ele, o GitHub Pages
perderia o domínio customizado e o site voltaria para `siapesq.github.io`.

---

## 2. Os dois workflows

| Workflow | Gatilho | O que faz |
|---|---|---|
| `deploy.yml` | push em **`main`** | Builda **e publica** |
| `dev-build.yml` | push ou PR em **`dev`** | **Só builda** — não publica |

O `dev-build.yml` é a rede de segurança: garante que o que está em `dev` compila antes de
chegar em `main`. O nome do passo final ("Build and Deploy to GitHub Pages") é enganoso — ele
roda apenas `npm run build`.

**Fluxo de trabalho implícito:** trabalhe em `dev`, abra PR para `dev`, e só faça merge para
`main` quando quiser publicar. **Merge em `main` = site no ar.**

---

## 3. ⚠️ O `deploy.yml` aponta para o nome antigo do repositório

```yaml
- name: Set up GitHub repository
  run: git remote set-url origin https://x-access-token:${{ secrets.GITHUB_TOKEN }}@github.com/siapesq/landingPage.git
```

O repositório hoje se chama **`siapesq/siapesq.com`**. `siapesq/landingPage` é o nome antigo.

**Funciona hoje** porque o GitHub mantém redirecionamento automático de repositórios
renomeados — verificado: `siapesq/landingPage` resolve para `siapesq/siapesq.com`.

**Por que corrigir mesmo assim:** o redirecionamento deixa de valer se alguém criar um
repositório novo com o nome antigo na mesma organização. Nesse dia, a publicação passaria a
empurrar para o repositório errado — e o sintoma seria "o deploy passou mas o site não mudou",
que é dos piores de diagnosticar.

**Correção:** trocar para `siapesq/siapesq.com`, ou usar
`${{ github.repository }}` e não depender de nome nenhum.

---

## 4. Segredos usados

| Segredo | Uso |
|---|---|
| `EMAIL` | `git config user.email` do commit de publicação |
| `USERNAME` | `git config user.name` |
| `GITHUB_TOKEN` | Fornecido automaticamente pelo Actions |

Ambos estão no *environment* `build` do repositório.

---

## 5. Publicar manualmente

Se o CI estiver indisponível:

```bash
npm install
npm run deploy      # predeploy roda o build automaticamente
```

Exige permissão de escrita no repositório e o `gh-pages` instalado (já está em
`devDependencies`).

---

## 6. Ambientes

**Não há ambiente de homologação.** São dois estados:

| Onde | O que é |
|---|---|
| `npm start` na sua máquina | desenvolvimento (`localhost:3000`) |
| `siapesq.com` | produção |

O `dev-build.yml` valida que compila, mas **não publica em lugar nenhum** — ninguém consegue
*ver* a mudança antes de ela ir ao ar.

> Se um ambiente de pré-visualização passar a fazer falta, o caminho mais simples é publicar a
> branch `dev` num segundo alvo (outro repositório de Pages, ou Netlify/Vercel apontando para
> `dev`).

---

## 7. Configuração

**Não há `.env` e nenhuma variável de ambiente.** Duas configurações estão fixas no código:

| O quê | Onde |
|---|---|
| `homepage: "https://siapesq.com"` | `package.json` |
| URL da API do formulário | `src/controllers/sendEmail.js` |

Para um site institucional isso é aceitável — mas significa que **apontar o formulário para
outra API exige editar o código e publicar**.

---

## 8. Checklist de publicação

- [ ] A mudança foi validada em `dev` (o `dev-build` passou)
- [ ] Se mexeu em `.scss`, o `.css` compilado foi regerado e commitado (ver `01_…` §5)
- [ ] Textos novos existem **nos três** arquivos de idioma (ver `02_…` §7)
- [ ] Testado em tela larga **e** estreita — há trechos que dependem de
      `window.innerWidth > 1366` (ver `04_…` §4)
- [ ] Merge em `main`
- [ ] Após o deploy, conferir `siapesq.com` (não `siapesq.github.io`) e as 4 rotas
