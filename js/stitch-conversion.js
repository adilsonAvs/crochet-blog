(() => {
  const terms = {
    sc: { US: 'sc (single crochet)', UK: 'dc (double crochet)' },
    hdc: { US: 'hdc (half double crochet)', UK: 'htr (half treble)' },
    dc: { US: 'dc (double crochet)', UK: 'tr (treble)' },
    tr: { US: 'tr (treble)', UK: 'dtr (double treble)' },
    dtr: { US: 'dtr (double treble)', UK: 'trtr (triple treble)' }
  };
  const system = document.getElementById('conversion-system');
  const stitch = document.getElementById('conversion-stitch');
  const result = document.getElementById('conversion-result');
  if (!system || !stitch || !result) return;
  const update = () => {
    const from = system.value;
    const to = from === 'US' ? 'UK' : 'US';
    result.textContent = from + ' ' + terms[stitch.value][from] + ' is commonly called ' + to + ' ' + terms[stitch.value][to] + '. Check the pattern key for special stitches.';
  };
  system.addEventListener('change', update);
  stitch.addEventListener('change', update);
  update();
})();
