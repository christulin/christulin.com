/**
 * Inline script for FOUC (flash of unstyled content) prevention.
 *
 * This runs synchronously in <head> before the browser paints anything,
 * reading the user's saved theme preference from localStorage and applying
 * it as a data-theme attribute on <html>. Without this, the page would
 * briefly flash the wrong theme on load.
 *
 * Rules:
 * - If localStorage has a saved preference ('light' or 'dark'), use it.
 * - Otherwise, follow the OS prefers-color-scheme setting.
 * - Falls back to 'light' if neither is available.
 *
 * Must stay as a string exported for use with dangerouslySetInnerHTML in
 * _document.js. The inline execution is intentional — an external <script src>
 * would require a network round-trip and lose the synchronous blocking behavior.
 */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      document.documentElement.dataset.theme = stored;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.dataset.theme = 'dark';
    } else {
      document.documentElement.dataset.theme = 'light';
    }
  } catch (e) {}
})();
`;

export default themeScript;
