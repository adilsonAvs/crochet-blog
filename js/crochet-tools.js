(() => {
  'use strict';

  const number = (form, name) => {
    const raw = String(form.elements.namedItem(name)?.value ?? '').trim();
    return raw === '' ? null : Number(raw);
  };
  const validPositive = value => Number.isFinite(value) && value > 0;
  const fmt = (value, digits = 2) => new Intl.NumberFormat('en-US', { maximumFractionDigits: digits }).format(value);
  const show = (form, message, error = false) => {
    const out = form.querySelector('[data-result]');
    out.textContent = message;
    out.dataset.state = error ? 'error' : 'success';
  };
  const unitLabel = unit => unit === 'cm' ? 'cm' : 'in';

  function optionalRepeat(form, rawCount) {
    const multRaw = String(form.elements.namedItem('multiple')?.value ?? '').trim();
    const edgeRaw = String(form.elements.namedItem('edges')?.value ?? '').trim();
    if (!multRaw && !edgeRaw) return { count: Math.ceil(rawCount), note: '' };
    if (!multRaw || !edgeRaw) throw new Error('For pattern adjustments, enter both the repeat multiple and edge-stitch count. Enter 0 edge stitches if your pattern has none.');
    const multiple = Number(multRaw), edges = Number(edgeRaw);
    if (!Number.isInteger(multiple) || multiple < 1 || !Number.isInteger(edges) || edges < 0) {
      throw new Error('Repeat multiple must be a whole number of at least 1, and edge stitches must be a whole number of 0 or more.');
    }
    if (edges > rawCount) throw new Error('Edge stitches exceed the estimated stitch count. Check the inputs or pattern repeat.');
    const count = multiple * Math.ceil((rawCount - edges) / multiple) + edges;
    return { count, note: `Adjusted to a multiple of ${multiple}, plus ${edges} edge stitch${edges === 1 ? '' : 'es'}.` };
  }

  function calculateGauge(form) {
    const stitches = number(form, 'stitches'), sample = number(form, 'sampleWidth'), target = number(form, 'targetWidth');
    if (![stitches, sample, target].every(validPositive)) throw new Error('Enter positive values for stitches, swatch width, and project width.');
    if (!Number.isInteger(stitches)) throw new Error('Stitch count must be a whole number.');
    const unit = unitLabel(form.elements.namedItem('unit').value);
    const gauge = stitches / sample, raw = gauge * target;
    const adjusted = optionalRepeat(form, raw);
    const width = adjusted.count / gauge;
    show(form, `Gauge: ${fmt(gauge)} stitches per ${unit}\nEstimated before pattern adjustment: ${fmt(raw)} stitches\nStitch count to use: ${adjusted.count} stitches${adjusted.note ? `\n${adjusted.note}` : '\nNo repeat or edge adjustment was applied.'}\nApproximate width at this gauge: ${fmt(width)} ${unit}\nFormula: stitches ÷ swatch width = gauge; gauge × target width = estimated stitches; round up to a whole stitch${adjusted.note ? ', then apply the entered repeat and edge stitches' : ''}.`);
  }

  function calculateYarn(form) {
    const required = number(form, 'required'), perSkein = number(form, 'perSkein');
    if (!validPositive(required) || !validPositive(perSkein)) throw new Error('Enter the pattern’s total yarn amount and the amount in one skein. Dimensions alone cannot provide a reliable yarn estimate; use yardage from the pattern or another suitable source.');
    const marginRaw = String(form.elements.namedItem('margin').value ?? '').trim();
    const margin = marginRaw === '' ? 0 : Number(marginRaw);
    if (!Number.isFinite(margin) || margin < 0) throw new Error('Extra margin must be a non-negative number. Leave it blank for no added margin.');
    const unit = form.elements.namedItem('unit').value;
    const needed = required * (1 + margin / 100), skeins = Math.ceil(needed / perSkein);
    if (!Number.isFinite(needed) || !Number.isFinite(skeins)) throw new Error('These values are too large to calculate. Check the yardage and margin.');
    show(form, `Yarn after ${fmt(margin)}% optional margin: ${fmt(needed)} ${unit}\nSkeins to buy: ${skeins}\nFormula: pattern yardage × (1 + margin ÷ 100) ÷ yardage per skein, rounded up.\nThis estimate depends on the pattern yardage and the label amount; it does not predict actual use or account for substitutions.`);
  }

  function calculateBlanket(form) {
    const width = number(form, 'targetWidth'), length = number(form, 'targetLength');
    const stitches = number(form, 'stitches'), stitchSpan = number(form, 'sampleWidth');
    const rows = number(form, 'rows'), rowSpan = number(form, 'sampleHeight');
    if (![width, length, stitches, stitchSpan, rows, rowSpan].every(validPositive)) throw new Error('Enter positive values for blanket dimensions and both stitch and row gauge measurements.');
    if (!Number.isInteger(stitches) || !Number.isInteger(rows)) throw new Error('Swatch stitch and row counts must be whole numbers.');
    const unit = unitLabel(form.elements.namedItem('unit').value);
    const stitchGauge = stitches / stitchSpan, rowGauge = rows / rowSpan;
    const rawStitches = stitchGauge * width, adjusted = optionalRepeat(form, rawStitches);
    const estimatedRows = Math.ceil(rowGauge * length);
    const calculatedWidth = adjusted.count / stitchGauge, calculatedLength = estimatedRows / rowGauge;
    show(form, `Stitch gauge: ${fmt(stitchGauge)} stitches per ${unit}\nRow gauge: ${fmt(rowGauge)} rows per ${unit}\nEstimated stitch count: ${adjusted.count}\nEstimated row count: ${estimatedRows}${adjusted.note ? `\n${adjusted.note}` : '\nNo repeat or edge adjustment was applied.'}\nDimensions at your entered gauge: about ${fmt(calculatedWidth)} ${unit} wide × ${fmt(calculatedLength)} ${unit} long.\nFormula: gauge × target dimension, rounded up to whole stitches or rows; adjusted stitch count uses the repeat and edge values you entered. This is a mathematical estimate. Actual dimensions depend on your tension and pattern. It does not estimate yarn.`);
  }

  const calculators = { gauge: calculateGauge, yarn: calculateYarn, blanket: calculateBlanket };
  document.querySelectorAll('form[data-tool]').forEach(form => {
    const calculate = () => {
      try { calculators[form.dataset.tool](form); }
      catch (error) { show(form, error.message, true); }
    };
    form.addEventListener('input', calculate);
    form.addEventListener('change', calculate);
    form.addEventListener('submit', event => { event.preventDefault(); calculate(); });
    calculate();
  });
})();
