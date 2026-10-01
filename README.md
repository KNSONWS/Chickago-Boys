# Chickago Boys – Website

Statische Website für **Chickago Boys Fried Chicken & Burger**, Merkurstraße 13, 67663 Kaiserslautern.
Preview: https://chickago-boys.project.webklar.com (Deploy über den Org-Webhook bei jedem Push auf `main`).

## Aufbau

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite: Hero „Knockout“, Favoriten, Wings, Buckets, Take away, Besuch/Öffnungszeiten, CTA |
| `speisekarte.html` | Komplette Karte mit Preisen (Kategorien-Navigation, Karten mit freigestellten Fotos) |
| `impressum.html`, `datenschutz.html` | **Entwürfe** mit gelb markierten Platzhaltern |
| `assets/css/style.css` | Design-System (Farben, Typo, Komponenten) |
| `assets/js/main.js` | Öffnungsstatus, Menü, Animationen (GSAP + ScrollTrigger, Lenis) |
| `assets/img/` | Logo als Vektor (`rooster.svg`, `wordmark.svg`), Food-Freisteller `cut-*.webp`, Fotos `foto-*.webp` |
| `assets/img/menu/` | Neue Speisenfotos (mit Gemini generiert, automatisch freigestellt, Kontaktschatten bleibt erhalten). Originale in `bilder-upscale/bearbeitet/` |
| `assets/fonts/` | Anton, Titan One, Archivo, Archivo Expanded Black, Great Vibes, IBM Plex Mono – lokal eingebunden (keine Google-Verbindung) |

Kein Build-Schritt, keine Cookies, keine Tracker, keine externen Einbindungen. Karten, Instagram und Lieferando sind nur verlinkt.

## Design

Inspiration: cravburgers.shop (Konzeptseite der Agentur Anyflow). Übernommen wurden nur die Prinzipien: riesige umrandete Headlines, Farbflächen mit Wellen, Sticker, Freisteller, Wort-Pop-Animationen. Farben, Schriften und Maskottchen sind eigene: der Boxer-Hahn aus dem Chickago-Boys-Logo, Konzept „Fight Night“.

Speisekarte: Standard-Produkte als weißes Plakat mit rot-weißem Karo (Klasse `dish`), Special-Burger auf roter Studio-Fläche mit Schreibschrift und Mono-Zeile (Klasse `dish dish--special`). Ein Produkt wird zum Special, indem man der Karte `dish--special` gibt.

## Offen vor dem Livegang (vom Kunden bestätigen)

- Inhaber bzw. Rechtsform, E-Mail und USt-IdNr. für Impressum und Datenschutz
- Öffnungszeiten: aktuell „täglich 12–22 Uhr“ laut Google; ältere Einträge nennen einen Ruhetag am Montag
- Preise: übernommen aus der Lieferando-Karte vom 30.09.2026, im Restaurant eventuell abweichend
- Rechte an den Speisenfotos und Logo als Originaldatei (die Fotos stammen aus dem Lieferando-Eintrag)
- Allergen- und Zusatzstoffliste
- Domain: `chickagoboys.de` leitet heute auf Lieferando weiter
- `og:image` auf eine absolute URL umstellen, sobald die Domain feststeht
- Optional: englische Version für die US-Community (KMC)
