// Applique les préférences mémorisées avant le premier rendu pour éviter le flash.
// khu-theme : dawn | day | dusk | night (absence = préférence système)
// khu-motion : reduce · khu-contrast : more · khu-text : large | xlarge
const script = `(function(){try{var d=document.documentElement,m={'khu-theme':'data-theme','khu-motion':'data-motion','khu-contrast':'data-contrast','khu-text':'data-text'};for(var k in m){var v=localStorage.getItem(k);if(v)d.setAttribute(m[k],v);}}catch(e){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
