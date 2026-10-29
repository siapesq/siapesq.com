# Auditoria de reorganização estrutural

Data: 2026-10-26

## Escopo e garantia de preservação

Na fase de reorganização, foram movidos ou renomeados arquivos e ajustados somente
os caminhos de importação necessários. Não foram alterados regras de negócio, rotas,
URLs, dependências, configuração ou implementação do serviço de e-mail.

Não houve commit, push, PR, deploy ou qualquer envio ao GitHub.

## Estrutura anterior resumida

- `src/components/sections` misturava componentes institucionais, das três linhas
  de produto e o rodapé compartilhado.
- `src/components/layouts/header.jsx` continha o único layout global.
- `src/components/common` também continha cartões exclusivos da área institucional.
- `src/style` agrupava CSS global, institucional e de produtos.
- `src/controllers/sendEmail.js` era uma integração HTTP usada pelo formulário.
- `src/imgs` centralizava todos os assets.

## Estrutura final

```text
src/
├── components/
│   ├── common/                  # Lightbox, Reveal, ScrollToTop, Seo
│   └── layout/                  # Footer, Header
├── features/
│   ├── institutional/
│   │   ├── assets/colaboradores/
│   │   ├── components/
│   │   └── styles/
│   ├── plataforma/components/
│   ├── phytobloom/
│   │   ├── components/
│   │   └── styles/
│   └── siapreps/
│       ├── components/
│       └── styles/
├── imgs/                        # preservado por segurança
├── pages/                       # páginas em PascalCase
├── services/sendEmail.js
├── styles/                      # CSS global seguro de mover
└── style/                       # CSS/SCSS legado mantido por risco de URLs relativas
```

## Arquivos movidos e renomeados

- Layout: `header.jsx` foi renomeado para `components/layout/Header.jsx`; o
  rodapé compartilhado `siaprepsFooter.jsx` tornou-se `components/layout/Footer.jsx`.
- Páginas: `about`, `bugsNaoresolvidos`, `contato`, `index`, `phytobloom`,
  `plataforma` e `siapreps` foram renomeadas para PascalCase em `src/pages`.
- Plataforma: a seção promocional e `Acesso`, `ComoFunciona`, `Especies`, `Hero`,
  `Mapa`, `Publico` e `Recursos` foram movidos para
  `features/plataforma/components` e renomeados em PascalCase.
- SIAPREPS: as seções de página e os componentes `Siapreps`, `SiaprepsBarco`,
  `SiaprepsCardume`, `SiaprepsFormS` e `SiaprepsPlataforma` foram movidos para
  `features/siapreps/components` e renomeados em PascalCase.
- Phytobloom: a seção promocional e `Acesso`, `Camadas`, `ComoFunciona`, `Hero`,
  `Mapa`, `Publico`, `Recursos` e `Video` foram movidos para
  `features/phytobloom/components` e renomeados em PascalCase.
- Institucional: `AboutCard`, `Card`, `AboutCards`, `AboutHeader`, `Equipe`,
  `FormContato`, `Helps` e `Parceiros` estão em
  `features/institutional/components`.
- Serviço: `controllers/sendEmail.js` foi movido sem mudanças para
  `services/sendEmail.js`.
- Estilos seguros: CSS global foi para `src/styles`; CSS sem URLs relativas foi
  agrupado em `features/institutional/styles`, `features/siapreps/styles` e
  `features/phytobloom/styles`. `especies.css`, compartilhado pelas três áreas de
  produto, está em `src/styles`.

## Imports corrigidos

- `App.jsx` passou a importar páginas em PascalCase.
- As páginas importam as respectivas features e o `Footer` global.
- Componentes de produto importam `Header`, `Reveal` e `Lightbox` a partir das
  localizações globais, preservando seus módulos e constantes locais.
- O formulário SIAPREPS importa `services/sendEmail`.
- Todos os imports de CSS e imagens foram atualizados apenas quanto ao caminho.
- A busca final não encontrou referências de código aos antigos diretórios
  `components/sections`, `components/layouts`, `controllers` nem aos antigos nomes
  de páginas e CSS movidos.

## Arquivos não movidos por risco de regressão

- `src/imgs` foi preservado, com a exceção autorizada posteriormente dos logos de
  colaboradores, que pertencem exclusivamente à feature institucional e passaram
  para `features/institutional/assets/colaboradores`. Há imports JavaScript
  numerosos e URLs CSS existentes que dependem da localização dos demais assets.
- `src/style/style.css`, seus fontes SCSS/source map e os estilos com URLs relativas
  foram preservados, incluindo `style/plataforma/pagina.css`,
  `style/plataforma/plataforma.css`,
  `style/siapreps/siapreps_plataforma/plataforma.css` e
  `style/siapreps/siapreps_section/style.css`.
- Esses arquivos continuam importados pelos mesmos módulos lógicos; só o caminho de
  import dos componentes que mudaram de diretório foi ajustado quando necessário.

## Possíveis órfãos (não removidos)

Inferência estática; nenhum destes arquivos foi excluído:

- `pages/BugsNaoresolvidos.jsx` não é importada nem possui rota ativa.
- `pages/About.jsx` e seus componentes estão fora da navegação ativa porque a rota
  `/about` permanece comentada em `App.jsx`.
- `features/institutional/components/Equipe.jsx` não possui importador no código.
- `features/siapreps/components/SiaprepsCardume.jsx`, `SiaprepsFormS.jsx` e
  `SiaprepsPlataforma.jsx` não possuem importadores estáticos atuais.
- `style/index/index.css`, `style/siapreps/siapreps.css`,
  `style/siapreps/siapreps_Footer/Footer.css` e fontes SCSS legados não são
  importados pelo fluxo React atual; foram preservados por não haver autorização
  para remoção.
- Não foi feita remoção nem classificação definitiva de assets sem import estático:
  URLs em CSS e potenciais referências externas tornam essa inferência insuficiente
  para uma exclusão segura.

## Duplicações

Não foi confirmada duplicação exata de componente ou stylesheet. Há estilos de
página compartilhados entre os produtos, especialmente `pagina.css` e
`especies.css`; eles foram mantidos sem consolidação para não modificar cascata,
ordem ou aparência.

## Validações

| Validação | Resultado |
| --- | --- |
| Inventário de imports, páginas, estilos, assets e configuração | Concluído antes das movimentações |
| Busca por caminhos antigos | Aprovada; nenhuma referência de código restante |
| `npm run build` final | Aprovado: compilação concluída com sucesso |
| `npm test -- --watchAll=false` | Sem testes configurados; o CRA retorna código 1 por “No tests found” |
| Lint | Não há script de lint em `package.json`; o build CRA executou sua verificação integrada |
| `git diff --check` | Aprovado, sem saída |
| Rotas | Preservadas estaticamente em `App.jsx`: `/`, `/siapreps`, `/phytobloom`, `/plataforma`, `/contato` |

Avisos preexistentes do build: base Browserslist desatualizada e dependência
transitiva do `babel-preset-react-app`. Não houve atualização de dependências.

## Proteção contra regressão

Não houve alteração intencional de HTML/DOM, textos, classes CSS, conteúdo de
página, formulários, navegação, links, SEO, responsividade, animações, imagens ou
chamadas externas. As mudanças aceitas nesta auditoria são somente de estrutura e
resolução de imports.

## Complemento posterior: carrossel de colaboradores

Após a auditoria estrutural, foi solicitada explicitamente a substituição da imagem
única de parceiros por um carrossel de logos. Essa mudança, especificada em
`COLLABORATORS_CAROUSEL_SPEC.md`, altera apenas a seção institucional de
colaboradores: usa os 18 SVGs individuais, inclui animação contínua e respeita
`prefers-reduced-motion`. Ela é uma mudança funcional/visual autorizada e não faz
parte da garantia estrutural original acima.
