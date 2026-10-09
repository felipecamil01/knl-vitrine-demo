# Validação — 9 de outubro de 2026

## Executado e aprovado

- Sintaxe do JavaScript validada com `node --check`.
- Interações executadas em DOM simulado (jsdom): filtros mostram 2 vestidos, 1 conjunto, 1 básico e 4 peças ao selecionar todas; apenas um filtro permanece ativo; contagem acessível acompanha a seleção.
- Menu mobile em DOM simulado: abrir/fechar, estado `aria-expanded`, fechamento por Escape com devolução de foco e fechamento ao escolher cada seção com foco no destino.
- Mudança de modo mobile/desktop simulada: o foco sai de controles que passam a ficar ocultos.
- Os 6 links internos apontam para IDs existentes e únicos.
- Os 7 links externos apontam exatamente para `https://www.instagram.com/knl.modafeminina/`, com nova aba e `noopener noreferrer`.
- HTML, CSS, JavaScript e `.nojekyll` retornaram HTTP 200 em servidor local, sob o subdiretório `/knl-vitrine-demo/`.
- Sem JavaScript, a marcação mantém as 4 peças e a navegação; controles de filtros e menu recolhível começam ocultos.

As ferramentas de validação não integram o projeto e não são dependências de execução ou build.

## Limitações e conferência manual

O navegador Chromium não estava instalado e o download retornou um arquivo inválido. Portanto, não foi concluído um teste visual/renderizado em navegador real, nem uma auditoria integral de acessibilidade. Os testes de interação descritos acima usam DOM simulado, sem layout.

O Instagram bloqueou a consulta automatizada. O destino de todos os links foi validado, mas a disponibilidade do perfil e o carregamento externo precisam ser conferidos manualmente. Nenhuma publicação foi realizada.

Antes de publicar, abra `index.html` em um navegador e confira:

1. Larguras de 320, 390, 768, 1024 e 1440 px: ausência de rolagem horizontal, texto legível e cartões organizados.
2. No mobile, abra Menu, escolha cada destino e teste Escape.
3. Use Tab, Shift+Tab, Enter e Espaço; confira o foco visível e o link “Pular para o conteúdo”.
4. Selecione todos os filtros e confirme as contagens 4/2/1/1.
5. Abra os links para o Instagram e confirme o perfil de destino.
6. Teste zoom de 200%, JavaScript desativado e preferência por movimento reduzido.
7. Após publicar, repita no endereço do GitHub Pages, incluindo carregamento dos estilos e do script.
