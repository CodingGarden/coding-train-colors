const colorsElement = document.querySelector('#colors');

const hexColors = [
  '#0b6a88',
  '#2dc5f4',
  '#70327e',
  '#9253a1',
  '#a42963',
  '#ec015a',
  '#f063a4',
  '#f16164',
  '#f89e4f',
  '#fcee21'
];

function hexToRgb(hex) {
  const [,r, g, b] = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)];
}

colorsElement.innerHTML = hexColors
  .reduce((html, hexColor, i) => html + `
    <div class="color-item">
      <div class="color-block" data-clipboard-target="#copy-${hexColor.slice(1)}" style="background: ${hexColor};">
      </div>
      <p class="color-label" id="copy-${hexColor.slice(1)}" data-clipboard-target="#copy-${hexColor.slice(1)}">${hexColor.toUpperCase()}</p>
      <p class="color-label" id="copy-${hexToRgb(hexColor).join('-')}" data-clipboard-target="#copy-${hexToRgb(hexColor).join('-')}">${hexToRgb(hexColor).join(', ')}</p>
    </div>
  `, '');

new ClipboardJS(".color-label")
