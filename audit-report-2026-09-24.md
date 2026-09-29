# Auditoria editorial e técnica — Cozy Crochet Trail

**Data:** 24 de setembro de 2026  
**Escopo:** versão atual em `outputs/crochet-blog`; revisão dos 40 artigos, cinco categorias, página inicial, páginas informativas, imagens, navegação, metadados, consentimento de cookies e recursos locais.

## Resumo

- **54 páginas HTML analisadas:** página inicial, 40 artigos, cinco categorias e oito páginas adicionais (incluindo Contact, About, Editorial Team, políticas, termos, busca e erro 404).
- **5 achados editoriais/técnicos registrados; 4 corrigidos.** Um padrão de parágrafo repetido afetava sete artigos; uma inconsistência sobre um formulário afetava duas páginas institucionais; um relatório de diretrizes continha dados obsoletos; e muitas fotos de apoio não mostravam os gestos ensinados. A falta de um canal de contato real permanece documentada porque depende de informação externa ao projeto.
- Não foram alterados URLs, títulos, categorias, metadados SEO, schema, sitemap, robots.txt, estrutura visual, artigos não afetados ou configurações de anúncios.

## Achados e correções

| Prioridade | Achado | Ação |
|---|---|---|
| Média | O mesmo parágrafo genérico sobre trabalhar devagar aparecia em sete artigos básicos, sem acrescentar instrução específica e com explicações mais úteis logo adiante. | Removido dos artigos 2–8 que o continham: Slip Knot, Foundation Chain, Single Crochet, Counting Chains and Stitches, Turning Rows, Pattern Abbreviations e Straight Edges. |
| Média | Contact dizia que havia um formulário demonstrativo “abaixo”, mas não existia formulário. Privacy Policy também afirmava que um formulário estava inativo. | Reescritas as duas frases para declarar corretamente que não há formulário nem endereço público e que o site não coleta mensagens. A data da política passou a refletir a revisão de 24 de setembro de 2026. |
| Média | O relatório de diretrizes mencionava `example.com`, três ilustrações por artigo e meta de 1.000 palavras, dados que já não descreviam os arquivos atuais. | Atualizado `relatorio-diretrizes-google.md` com o canonical que está no site, a ausência de contato público e a ressalva de que comprimento/número de imagens não são critérios de aprovação do Google. |
| Média — pendente | O site ainda não oferece canal público de contato. Isso limita transparência e a possibilidade de leitores comunicarem correções. | Mantida a declaração explícita, sem inventar e-mail, empresa ou formulário. É preciso fornecer um endereço real ou configurar um serviço antes de publicar. |
| Média | Muitas fotos de apoio mostravam crochê em geral, mas não explicavam o movimento específico; algumas também se repetiam entre artigos. | Das 117 fotos de apoio, removi 98 e selecionei 19 fotos claras de mãos trabalhando para acompanhar movimentos físicos. Mantive os 29 diagramas de tutorial onde explicam a sequência, os pontos ou a forma do projeto. As capas únicas e os diagramas de etiqueta e gauge também foram preservados. |

## Conteúdo e linguagem

Os 40 artigos foram conferidos individualmente quanto ao alinhamento entre título e resposta, ordem dos passos, vocabulário de iniciante, problemas comuns, FAQs, links relacionados e coerência entre as instruções escritas e os recursos visuais. Os tutoriais usam terminologia de crochê dos EUA; o artigo sobre termos US/UK explica a diferença. As instruções variam conforme padrão, fio, gauge e tensão quando isso afeta o resultado. Não encontrei alegações explícitas de testes pessoais, depoimentos, certificações ou credenciais profissionais inventadas.

Além das sete ocorrências removidas, há componentes editoriais intencionalmente compartilhados entre páginas — por exemplo, byline, explicação da equipe, navegação e consentimento. Eles não foram confundidos com duplicação de conteúdo principal. Mantive o texto específico que já explica cada técnica; não aumentei artigos artificialmente.

## Institucional, confiança e AdSense

About e Editorial Team deixam claro que a publicação não reivindica experiência individual ou credenciais não comprovadas. Contact e as políticas informam que não há formulário, Analytics ou scripts de publicidade ativos. Os espaços reservados para anúncios não contêm código de anúncios.

Não encontrei problema evidente de conteúdo proibido ou navegação enganosa nesta revisão. A orientação pública do AdSense recomenda conteúdo único e relevante e navegação clara; isso é uma análise de qualidade, não uma garantia de aprovação. O Google revisa o site inteiro, e nenhuma auditoria local pode assegurar aprovação ou desempenho. [Orientação oficial sobre prontidão do site](https://support.google.com/adsense/answer/7299563?hl=en) · [Políticas oficiais do AdSense](https://support.google.com/adsense/answer/48182?hl=en).

O projeto aberto é um site estático local. O domínio canônico, sitemap e política de privacidade devem ser conferidos no ambiente real de publicação, e o contato precisa ser configurado. Não fiz alterações especulativas no domínio ou em metadados que já apontam para `www.cozycrochettrail.com`.

## Imagens e acessibilidade

- Os 40 artigos mantêm capas fotográficas reais e distintas, com texto alternativo e dimensões declaradas. Os créditos e links permanecem em `photo-credits.md`.
- Os 29 artigos com tutoriais mantêm diagramas junto da lista de passos. Em 19 deles, uma foto de mãos trabalhando acompanha também o passo físico mais pertinente; os SVGs continuam onde tornam mais clara a sequência, a contagem ou a estrutura do projeto.
- Os diagramas de leitura de etiqueta e de medição de gauge também foram mantidos. Artigos de referência sem um passo a passo visual continuam com sua foto de capa contextual.
- A estrutura verificada inclui link “Skip to content”, áreas de navegação nomeadas, títulos e rótulos de imagem. Não foi possível fazer uma inspeção visual interativa de cada navegador e largura nesta rodada; os validadores foram estáticos.

## SEO e experiência de navegação preservados

Foram preservados URLs e slugs, metadados/canonicals, títulos e headings, schema, sitemap, robots.txt, categorias, links editoriais e componentes. O verificador confirmou existência de imagens e destinos locais, navegação, conteúdo dos cartões e a sequência de oito lições para iniciantes.

## Segunda auditoria e verificações

Depois das mudanças, validei novamente os 54 documentos, os 40 artigos e 5 categorias; confirmei 40 capas diferentes, diagramas nos 29 tutoriais, 19 fotos de mãos junto a etapas físicas, ausência das sete cópias do parágrafo, consistência de Contact/Privacy, 324 destinos de navegação e controles de cookies em todas as páginas. Os validadores de links/recursos, categorias, trilha de aprendizagem e navegação passaram sem erros. `node --check` passou para `main.js`, `cookies.js` e `search.js`.

Não fiz teste visual interativo em Chrome, Firefox, Safari ou dispositivos móveis nesta rodada. As verificações não demonstram que o site publicado já foi rastreado, indexado ou aprovado para anúncios.

## Arquivos alterados nesta rodada

- `articles/how-to-count-chains-and-stitches-05.html`
- `articles/how-to-keep-edges-straight-as-a-beginner-08.html`
- `articles/how-to-make-a-foundation-chain-in-crochet-03.html`
- `articles/how-to-make-a-slip-knot-for-crochet-02.html`
- `articles/how-to-read-basic-pattern-abbreviations-07.html`
- `articles/how-to-single-a-step-by-step-beginner-guide-04.html`
- `articles/how-to-turn-your-work-at-the-end-of-a-row-06.html`
- `contact.html`
- `privacy-policy.html`
- `relatorio-diretrizes-google.md`
- `images-audit-report.md`
- `tutorial-photo-update-report.md` (identificado como registro histórico)
- `audit-report-2026-09-24.md` (este relatório)

### Páginas de tutoriais com as figuras corrigidas

- `articles/easy-scarf-pattern-for-beginners-25.html`
- `articles/how-to-a-basic-washcloth-28.html`
- `articles/how-to-a-beginner-friendly-coaster-30.html`
- `articles/how-to-a-beginner-friendly-granny-square-27.html`
- `articles/how-to-a-simple-blanket-as-a-beginner-31.html`
- `articles/how-to-a-simple-dishcloth-26.html`
- `articles/how-to-block-a-project-39.html`
- `articles/how-to-change-colors-in-crochet-14.html`
- `articles/how-to-count-chains-and-stitches-05.html`
- `articles/how-to-find-the-first-stitch-in-a-row-38.html`
- `articles/how-to-finish-a-project-neatly-40.html`
- `articles/how-to-fix-common-mistakes-37.html`
- `articles/how-to-hold-a-hook-and-yarn-as-a-beginner-01.html`
- `articles/how-to-in-rows-vs-rounds-13.html`
- `articles/how-to-join-new-yarn-in-crochet-15.html`
- `articles/how-to-keep-edges-straight-as-a-beginner-08.html`
- `articles/how-to-make-a-double-stitch-10.html`
- `articles/how-to-make-a-foundation-chain-in-crochet-03.html`
- `articles/how-to-make-a-half-double-stitch-09.html`
- `articles/how-to-make-a-simple-headband-29.html`
- `articles/how-to-make-a-slip-knot-for-crochet-02.html`
- `articles/how-to-make-a-treble-stitch-11.html`
- `articles/how-to-read-a-chart-as-a-beginner-34.html`
- `articles/how-to-read-a-pattern-step-by-step-33.html`
- `articles/how-to-single-a-step-by-step-beginner-guide-04.html`
- `articles/how-to-turn-your-work-at-the-end-of-a-row-06.html`
- `articles/how-to-weave-in-yarn-ends-neatly-16.html`
- `articles/how-to-work-in-the-round-in-crochet-12.html`
- `articles/why-is-my-project-getting-wider-or-narrower-36.html`

Os 31 diagramas SVG em `images/diagrams/` foram reaplicados: 29 explicam passos ou projetos; dois explicam etiqueta de fio e gauge. Das fotos Pexels adicionais retiradas e depois revistas, 19 foram recolocadas em artigos onde ajudam a visualizar mãos trabalhando; as demais não foram recolocadas por não mostrarem uma ação suficientemente correspondente.
