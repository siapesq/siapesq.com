# Correção da transição Hero → pilares da Home

Data: 2026-10-26

## Investigação e causa raiz

A Home estava em `src/pages/Index.jsx`. O Hero usa `mar.webp` como imagem de
fundo e `siaprepsMonitor.webp` como mockup. A transição era composta por dois
assets independentes dentro do Hero:

- `src/imgs/wave.svg` no desktop, via `<img className="onda_desktop">`;
- `src/imgs/footerV2.png` abaixo de 1366px, via `<img className="onda_mobile">`.

O texto dos pilares ficava em um `article` com `position: absolute` sobre a
imagem. O CSS carregado combinava `bottom` de 3.8rem, 2rem e 1rem, `gap` de
20rem, 15rem e 8rem, alternância de imagens por breakpoint e uma segunda regra
que mudava o contêiner para `position: absolute`. Em 1024px o bloco inteiro era
ocultado. A imagem de fundo do oceano também era reduzida para 90% de altura em
larguras abaixo de 1600px. Essas regras independentes causavam gaps, desalinhamento
e variação vertical por viewport.

## Solução aplicada

- A seção `home-features` é irmã do Hero e contém a sua própria borda superior.
- A borda é um SVG inline responsivo, com `viewBox` e
  `preserveAspectRatio="none"`; não há imagem raster ou SVG externo usado para a
  geometria.
- A altura da curva usa `--home-wave-height: clamp(3.5rem, 6vw, 7rem)`. O Hero
  reserva essa mesma altura e a seção se sobrepõe exatamente a ela, formando uma
  composição contínua sem coordenadas dependentes de resolução.
- O SVG usa `display: block` e margem inferior de -1px apenas para evitar uma
  linha de subpixel entre o seu preenchimento e o fundo azul adjacente.
- Os pilares usam grid de três colunas com `minmax(0, 1fr)`, conteúdo centralizado,
  padding fluido e divisores CSS. Em até 768px, passam a uma coluna com divisores
  horizontais.

## Limpeza

Foram removidos os blocos CSS carregados que referenciavam
`footer_header_container`, `onda_desktop`, `onda_mobile` e `tracejado`, além da
regra que reduzia a imagem do oceano a 90%. Também foram removidos, após busca de
referências, `src/imgs/wave.svg`, `src/imgs/footerV2.png` e o stylesheet não
importado `src/style/index/index.css`.

Os fontes SCSS legados não carregados foram mantidos fora deste escopo para não
alterar o fluxo legado de geração de estilos; eles não participam do bundle React.

## Diferenças por arquivo

- `src/pages/Index.jsx`: remove os dois `<img>` de onda e o footer absoluto;
  adiciona `home-features`, SVG inline e três artigos semânticos.
- `src/styles/home-features.css`: novo layout responsivo da transição, grid e
  tipografia dos pilares.
- `src/style/style.css`: remove os offsets, alternâncias e ocultação da solução
  anterior; preserva o restante do Hero.
- `src/imgs/wave.svg`, `src/imgs/footerV2.png`, `src/style/index/index.css`:
  removidos por não possuírem mais referências.

## Validação

- `npm run build`: aprovado.
- `git diff --check`: aprovado.
- `npm test -- --watchAll=false`: o projeto não possui testes; o CRA retorna
  “No tests found”.
- Não há scripts de lint ou typecheck no `package.json`; o build CRA executou a
  checagem integrada disponível.

Não foi possível executar inspeção de screenshot nesta sessão porque não há
navegador disponível no ambiente. A validação de responsividade foi feita pela
estrutura CSS: desktop/tablet mantêm três colunas, e 768px e abaixo empilha os
três pilares sem overflow horizontal.

## Ajuste posterior de proporção vertical

A primeira versão do SVG atingia 10rem em desktop e o conteúdo começava com até
3rem de padding superior. Como o path encerra visualmente antes da base do SVG,
essas duas alturas geravam um afastamento azul excessivo antes dos títulos. Não
existia `min-height`, altura de viewport ou posicionamento absoluto reservando
espaço. A curva foi reduzida para o intervalo fluido de 3.5rem a 7rem e o padding
superior foi reduzido para 1rem a 1.75rem; o padding inferior continua confortável
e proporcional ao conteúdo.
