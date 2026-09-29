# Relatório de substituição de imagens dos tutoriais

> **Registro histórico — revisado em 24/09/2026:** as 117 fotos Pexels abaixo foram retiradas inicialmente por serem genéricas. Na revisão seguinte, 19 fotos com mãos trabalhando foram selecionadas para acompanhar movimentos físicos; 98 continuam removidas. Os diagramas SVG continuam nos artigos onde ajudam a entender contagens, etapas, pontos ou formas. As fotografias distintas de capa permanecem. Consulte `images-audit-report.md` e `audit-report-2026-09-24.md` para o estado atual.

## O que mudou

- Foram atualizados **29 artigos de ensino prático**. As figuras SVG que apareciam depois da lista de instruções foram substituídas por **117 fotografias Pexels**, colocadas junto ao respetivo passo: uma para cada item numerado (cinco no artigo de pegada da agulha; quatro nos outros 28 artigos).
- Cada página usa uma fotografia diferente em cada passo. As fotografias são ficheiros WebP já existentes no projeto, com fonte identificada em `photo-credits.md`; não foram criadas imagens por IA nem adicionados novos ficheiros de imagem.
- As fotografias incluem `alt` descritivo, dimensões `width` e `height`, `loading="lazy"` e `decoding="async"`. O CSS já existente mantém as figuras na largura do artigo e a altura proporcional.
- O texto, títulos, URLs, datas, metadados, categorias, layout, navegação, rodapé, funcionalidades e ficheiros de configuração do AdSense não foram alterados. Comparei as cópias antes/depois removendo apenas as figuras para confirmar a preservação do restante HTML.

## Páginas atualizadas

| Artigo | Fotos junto dos passos |
|---|---:|
| How to Hold a Crochet Hook and Yarn as a Beginner | 5 |
| How to Make a Slip Knot for Crochet | 4 |
| How to Make a Foundation Chain in Crochet | 4 |
| How to Single Crochet: A Step-by-Step Beginner Guide | 4 |
| How to Count Crochet Chains and Stitches | 4 |
| How to Turn Your Work at the End of a Crochet Row | 4 |
| How to Keep Crochet Edges Straight as a Beginner | 4 |
| How to Make a Half Double Crochet Stitch | 4 |
| How to Make a Double Crochet Stitch | 4 |
| How to Make a Treble Crochet Stitch | 4 |
| How to Work in the Round in Crochet | 4 |
| How to Crochet in Rows vs. Rounds | 4 |
| How to Change Colors in Crochet | 4 |
| How to Join New Yarn in Crochet | 4 |
| How to Weave in Yarn Ends Neatly | 4 |
| Easy Crochet Scarf Pattern for Beginners | 4 |
| How to Crochet a Simple Dishcloth | 4 |
| How to Crochet a Beginner-Friendly Granny Square | 4 |
| How to Crochet a Basic Washcloth | 4 |
| How to Make a Simple Crochet Headband | 4 |
| How to Crochet a Beginner-Friendly Coaster | 4 |
| How to Crochet a Simple Blanket as a Beginner | 4 |
| How to Read a Crochet Pattern Step by Step | 4 |
| How to Read a Crochet Chart as a Beginner | 4 |
| Why Is My Crochet Project Getting Wider or Narrower? | 4 |
| How to Fix Common Crochet Mistakes | 4 |
| How to Find the First Stitch in a Crochet Row | 4 |
| How to Block a Crochet Project | 4 |
| How to Finish a Crochet Project Neatly | 4 |

## Imagens mantidas

Mantive os diagramas de **How to Read a Yarn Label for Crochet** e **What Is Crochet Gauge and How Do You Measure It?**: eles representam dados de rótulo e medição de amostra, e uma foto genérica de mãos com agulha seria menos clara. **How to Read Basic Crochet Pattern Abbreviations** não tinha diagrama instrucional e não recebeu foto adicional. Os SVG originais continuam na pasta `images/diagrams/`, sem terem sido apagados.

## Precisão didática e limite das fotos disponíveis

As fotos gratuitas disponíveis no projeto mostram pessoas a trabalhar com agulha, fio e tecido de crochê. São fotografias de contexto do processo, e não séries preparadas para documentar cada micro movimento (por exemplo, a posição exata da ponta da agulha em cada passagem). Por isso, cada etapa continua descrita no texto e as fotos ajudam a contextualizar o trabalho; não afirmo que cada foto, isoladamente, prove todos os movimentos descritos no passo. Para uma correspondência fotográfica exata entre cada gesto e cada instrução, é necessária uma sequência de fotos de demonstração licenciada e específica para a técnica.

## Arquivos modificados e reversão

- 29 ficheiros HTML dentro de `articles/` receberam uma fotografia depois de cada item numerado e deixaram de carregar o SVG de técnica.
- O CSS, JavaScript, imagens de capa e créditos existentes não foram modificados.
- As cópias originais dos 29 HTML estão guardadas em `work/photo-update-backup/articles/`; restaurar esses ficheiros reverte a alteração. Os SVGs também continuam preservados em `images/diagrams/`.

## Verificações

- 54 páginas e 40 artigos; nenhum caminho local quebrado.
- 117 fotos de apoio verificadas: cada passo alterado tem uma foto local, com `alt`, dimensões, carregamento adiado e origem diferente das outras fotos do mesmo artigo.
- Comparação com as cópias de segurança confirmou que o conteúdo não relacionado às figuras permaneceu igual.
- Validação de navegação, dados SEO e trilha de aprendizagem passou.
- A verificação visual pelo navegador foi bloqueada pela política do browser para páginas `file://`. A responsividade foi conferida pelas dimensões intrínsecas e pela regra CSS existente `.article figure img { width: 100%; height: auto; }`.
