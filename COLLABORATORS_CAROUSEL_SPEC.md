# Especificação: carrossel de colaboradores

## Objetivo

Substituir a imagem única de parceiros da Home por um carrossel contínuo de logos
individuais já disponibilizados pelo usuário.

## Escopo

- Usar os 18 SVGs em `src/imgs/colaboradores`.
- Mover os logos para `src/features/institutional/assets/colaboradores`.
- Manter a seção no mesmo ponto da Home, antes do rodapé.
- Não adicionar dependências externas.
- Incluir texto alternativo descritivo para cada logo.
- Duplicar a faixa somente para criar uma rolagem contínua; a cópia será ignorada
  por tecnologias assistivas.

## Comportamento e acessibilidade

- Animação CSS linear contínua, pausada ao passar o mouse.
- Em `prefers-reduced-motion`, a animação deixa de executar e a lista passa a
  permitir rolagem horizontal manual.
- Layout responsivo, com logos renderizados por `object-fit: contain` e sem cortes.

## Fora de escopo

- Não há links de destino para colaboradores fornecidos; logos não serão links.
- Não serão removidos assets preexistentes, incluindo `parceiros2.webp`.
