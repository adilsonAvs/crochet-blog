# Crochet Tools & Calculators — Implementation Notes

Date: 2026-11-03

## What was added

- `crochet-tools-calculators.html`: central page with gauge, yarn, blanket, hook-size and US/UK stitch-name reference sections. It uses the site's existing shared header, footer, consent banner and global script references.
- `js/crochet-tools.js`: local browser calculations; no form values are sent to a server.
- `css/tools.css`: page-scoped responsive presentation.
- Contextual links from the homepage and relevant hook, yarn, gauge, blanket and terminology articles.
- The tools page URL was added to `sitemap.xml`.

## Formulas

- Gauge: `stitch gauge = swatch stitches / swatch width`; `estimated stitches = gauge × desired width`, rounded up to a whole stitch. If both optional repeat multiple `m` and fixed edge count `e` are supplied, result is `m × ceil((estimate − e) / m) + e`. The user supplies both values; no repeat or edge count is assumed.
- Yarn: `skeins = ceil((pattern yardage × (1 + optional margin / 100)) / yardage per skein)`. Both yardage inputs must use the same selected unit. Blank margin is 0%. If pattern yardage is absent, the tool explains that dimensions alone are insufficient for a reliable estimate.
- Blanket: `stitch gauge = swatch stitches / swatch width`; `row gauge = swatch rows / swatch height`; counts are gauge × target dimensions, rounded up to whole stitches or rows. Optional stitch multiple and edges use the same formula as the gauge calculator. Calculated dimensions are estimated counts divided by their respective gauges. No yarn consumption is calculated.

## Hook reference and sources

The US letter/number and metric table follows the Craft Yarn Council's hook-size table. CYC notes that letter/number labels may vary by manufacturer, advises using the millimeter measurement, and recommends comparing a swatch to the pattern gauge. The cited table has no universal UK hook label conversion, so the page does not invent one. UK stitch-name equivalences appear in a separate reference.

- [Craft Yarn Council — Hooks & Needles](https://www.craftyarncouncil.com/standards/hooks-and-needles)
- [Craft Yarn Council — Standard Yarn Weight System](https://www.craftyarncouncil.com/standards/yarn-weight-system) (hook size ranges are guidelines; the pattern gauge takes precedence)

## Example results

- Gauge: 20 stitches / 4 in = 5 stitches per inch; a 12 in target gives 60 stitches. With multiple 4 and 2 fixed edge stitches, result is 62.
- Yarn: 900 yd / 225 yd per skein = 4 skeins. 901 yd / 225 yd rounds up to 5. 300 m / 100 m with 10% margin rounds up to 4.
- Blanket: 16 stitches / 4 in and 18 rows / 4 in for 40 × 50 in gives 160 stitches and 225 rows before any pattern-repeat adjustment.

## Tests and limitations

The JavaScript was syntax-checked and calculator functions were exercised with mocked browser forms for ordinary values, minimum positive values, zero/negative invalid values, inches and centimeters, yards and meters, optional repeat/edge adjustment, ceiling behavior, missing yardage, and live `input`/`change`/`submit` listeners. These tests do not substitute for a full visual browser/device test after deployment. A pattern's instructions and swatch remain authoritative; gauge calculations cannot account for construction details unless the pattern supplies them. Yarn consumption is pattern-yardage based only.

A backup of the pre-change site files is in `outputs/crochet-tools-backup-2026-11-03/`.
