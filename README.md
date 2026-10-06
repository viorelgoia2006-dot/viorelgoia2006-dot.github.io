# Orarul meu – varianta fără Mac

Ai două componente:

1. **PWA** – aplicația principală, instalabilă pe iPhone din Safari.
2. **Scriptable widget** – widget Home Screen real pe iPhone, fără Xcode/Mac.

## Instalare PWA
Fișierele trebuie publicate pe un site HTTPS. Poți folosi GitHub Pages, Cloudflare Pages sau Netlify.
Pe iPhone: deschide site-ul în Safari → Share → Add to Home Screen.

## Widget
Instalează aplicația Scriptable din App Store, creează un script nou și lipește conținutul din `OrarWidget_Scriptable.js`.
Apoi adaugă un widget Scriptable pe Home Screen și selectează scriptul.

## Săptămâna pară/impară
Referință: 5 octombrie 2026 = IMPARĂ. Aplicația calculează automat săptămânile următoare.

Notă: iOS PWA nu poate crea singur un widget Home Screen nativ. Scriptable este folosit pentru widget.
