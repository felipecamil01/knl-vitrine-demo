# knl-vitrine-demo

Demonstração independente e não oficial de uma vitrine de moda feminina da KNL, baseada no HTML fornecido. Não representa uma loja online autorizada, uma parceria nem um catálogo real. Não realiza vendas e não apresenta preços, estoque, tamanhos ou contatos inventados. O único destino externo é o Instagram informado: https://www.instagram.com/knl.modafeminina/.

## Arquivos

- `index.html`: página principal na raiz, conteúdo e placeholders SVG incorporados.
- `assets/styles.css`: estilos responsivos, foco visível e redução de movimento.
- `assets/script.js`: menu mobile e filtros por categoria.
- `.nojekyll`: desativa o processamento Jekyll.
- `TESTES.md`: escopo e resultados da validação.

Somente HTML, CSS e JavaScript nativos. Sem backend, banco de dados, bibliotecas externas, fontes remotas, rastreamento ou build. Os SVGs são ilustrações vetoriais incorporadas ao HTML, sem arquivos de imagem externos.

## Abrir localmente

Abra `index.html` no navegador. Opcionalmente, na pasta do projeto execute `python3 -m http.server 8000` e visite http://localhost:8000. Python é apenas uma opção para pré-visualização, não uma dependência do site.

Os filtros exigem JavaScript. Sem ele, todos os exemplos e os links de navegação continuam disponíveis.

## Publicar no GitHub Pages — somente após autorização

Nenhum repositório foi criado e nenhum site foi publicado durante a preparação deste projeto. Execute as etapas seguintes apenas depois de autorizar a criação e a publicação.

1. Crie no GitHub um repositório chamado `knl-vitrine-demo`. Um repositório público é compatível com GitHub Free; o uso de repositórios privados depende do plano. O site publicado será público na configuração usual do Pages.
2. Extraia o ZIP e envie **o conteúdo** da pasta `knl-vitrine-demo` à raiz do repositório. Não envie apenas o ZIP nem coloque outra pasta acima de `index.html`. Inclua `.nojekyll`, que pode estar oculto no gerenciador de arquivos.
3. Confirme os arquivos no branch `main`.
4. Em **Settings → Pages → Build and deployment**, selecione **Deploy from a branch**.
5. Selecione **main**, pasta **/(root)**, e clique em **Save**.
6. Aguarde a conclusão da publicação na aba **Actions** e abra o endereço mostrado em **Settings → Pages**. O formato esperado é `https://SEU-USUARIO.github.io/knl-vitrine-demo/`; substitua `SEU-USUARIO` pelo nome da conta. Esse endereço é um modelo, não um site já criado.
7. Confira o menu mobile, todos os filtros e os links para o Instagram no endereço publicado.

Os caminhos `./assets/...` são relativos e funcionam no subdiretório do GitHub Pages. Não é necessário configurar domínio próprio, segredos ou um workflow personalizado. Alterações futuras enviadas ao branch de publicação atualizam o site.

Documentação: https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Personalizar

Edite os artigos `.product` em `index.html`. Os valores de `data-category` devem corresponder aos `data-filter` dos botões. Para trocar cores e espaçamento, edite as variáveis e regras em `assets/styles.css`. Preserve o aviso de demonstração. Nomes e desenhos das peças são exemplos fictícios, não afirmações sobre produtos vendidos pela KNL.

O nome KNL é usado apenas para contextualizar a proposta. Imagens reais, identidade visual oficial e informações comerciais devem ser validadas com a marca antes de transformar o protótipo em site oficial.

## Acessibilidade

Idioma `pt-BR`, estrutura semântica, link para pular ao conteúdo, foco visível, botões nativos, `aria-expanded` no menu, `aria-pressed` nos filtros e anúncio da contagem de resultados. Escape fecha o menu e devolve o foco. Links externos anunciam nova aba e usam `noopener noreferrer`. O layout respeita a preferência por redução de movimento.
