// Applique le thème mémorisé avant le premier rendu pour éviter le flash.
// Valeurs possibles : dawn | day | dusk | night ; absence = préférence système.
const script = `(function(){try{var t=localStorage.getItem('khu-theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
