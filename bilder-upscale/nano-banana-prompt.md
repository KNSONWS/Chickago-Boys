# Nano-Banana-Prompt: einheitliche Speisenbilder für Chickago Boys

Stand: 01.10.2026

> **Geändert am 01.10.2026:** Der Look ist jetzt **weißer Hintergrund mit grauem Kontaktschatten statt Holzbrett**. Freigestellt wird per CSS auf der Website. Die gültigen Prompts stehen in [generieren/gemini-prompts.md](generieren/gemini-prompts.md) (Gemini-App) und [generieren/prompts.md](generieren/prompts.md). Die Abschnitte unten zu Brett, Hintergrundgrau und Blau-Freisteller sind damit überholt. Modellwahl, Saucen-Formulierungen und Beschreibungsregeln gelten weiter.

## 1. Modell, Ort und Einstellungen

**Empfohlenes Modell: Nano Banana Pro**, offiziell Gemini 3 Pro Image (`gemini-3-pro-image`). Laut Google-Doku ist es „the premium choice for the most complex visual tasks“. Nur für Pro führt die Doku eine eigene Kategorie „Up to 3 images to be used as style references“, dazu kommen bis zu 6 Objektbilder. Darauf baut dieser Leitfaden auf: Ein leeres Set-Foto (Anker) legt Brett, Hintergrund, Licht und Winkel fest.

Ein offizielles „Nano Banana 3“ gibt es nicht, auch die Übersicht zur Google I/O 2026 nennt keins. Gemeint ist vermutlich Pro (läuft auf Gemini 3) oder Nano Banana 2 (Gemini 3.1).

**Alternative: Nano Banana 2**, offiziell Gemini 3.1 Flash Image (`gemini-3.1-flash-image`). Es ist laut Doku „optimized for speed and high-volume use-cases“ und verarbeitet bis zu 10 Objektbilder. Eine Kategorie für Stil-Referenzen führt die Doku bei Nano Banana 2 nicht, der Anker zählt dort nur als normales Referenzbild. Ob die Serie damit genauso einheitlich wird, ist nicht dokumentiert. Deshalb vorher an drei Gerichten testen: eins mit Anker A, eins mit Anker B und ein Getränk.

**Nicht geeignet:**
- Nano Banana 2 Lite, weil es nur 1K liefert.
- Das alte Nano Banana / Gemini 2.5 Flash Image. Es gilt als Legacy und „works best with up to 3 images as input“.

**Wo:** Google AI Studio, Gemini API oder Vertex AI.
- Dort lassen sich Seitenverhältnis und Auflösung festlegen (API: `aspect_ratio`, `image_size`).
- Laut Pro-Blogpost vom November 2025 fällt in AI Studio das sichtbare Gemini-Funkeln weg.

Die Gemini-App eignet sich nur zum Ausprobieren:
- Pro gibt es dort nur mit Google-AI-Abo (Modell „Pro“ bzw. „Redo with Pro“). Ist das Tageskontingent für Nano Banana 2 aufgebraucht, geht auch kein „Redo with Pro“ mehr.
- Download in 2K gibt es nur mit Abo, sonst nur 1K.
- Free- und AI-Pro-Nutzer bekommen das sichtbare Gemini-Funkeln aufs Bild.
- Die Hilfe beschreibt keine Einstellung für das Seitenverhältnis. Laut API-Doku übernimmt das Modell ohne Vorgabe das Format des Eingabebilds („matches the output image size to that of your input image“). Ob die App das genauso macht, ist nicht dokumentiert. Deshalb alle Eingabebilder quadratisch zuschneiden.

Laut Doku steckt in jedem Bild ein unsichtbares SynthID-Wasserzeichen.

| Einstellung | Wert | Grund |
|---|---|---|
| Seitenverhältnis | **1:1**, zusätzlich im Prompt „aspect ratio 1:1“ | Die vorhandenen `foto-*.webp` sind quadratisch: 900×900, `foto-menu-tenders` 1400×1400. |
| Auflösung | **4K** = 4096×4096 für jedes Gericht, das einen Freisteller bekommt oder auf der Website als Datei breiter als 1000 px eingebunden ist. Sonst **2K** = 2048×2048. | Retina braucht doppelte Kantenlänge (`bilder-upscale/README.md`). Die heutigen `cut-*` sind 700–1000 px breit und brauchen also 1400–2000 px. Das Gericht füllt rund 70 % der Bildbreite, bei 2K sind das nur ca. 1430 px. |
| Schreibweise | „2K“, „4K“ mit großem K | Laut Doku wird „2k“ abgelehnt. |
| Ausgabeformat | PNG (API: `response_format` mit `"mime_type": "image/png"`) | Verlustfrei für die Nachbearbeitung. In WebP erst ganz am Ende umwandeln. |
| Prompt-Sprache | Englisch | EN gehört laut Doku zu den Sprachen mit der besten Leistung. |
| Viele Gerichte | Batch-API | Laut Doku höhere Limits, aber bis zu 24 h Bearbeitungszeit. Erst einsetzen, wenn Anker und Prompt an einigen Gerichten freigegeben sind. |

## 2. Hausstil: Ist und Soll

Die Beobachtungen stammen aus `assets/img/foto-*.webp`, `assets/img/cut-*.webp` und `bilder-upscale/speisekarte/01-chicken/`.

| | Ist | Soll (ein Shooting) |
|---|---|---|
| Unterlage | Burger, Wrap, Tenders und unsaucierte Wings liegen auf einem langen ovalen Brett in Akazien-Optik mit honigfarbenen und dunkelbraunen Streifen. Saucierte Wings und Loaded Fries stehen ohne Brett in einer eckigen Steingutschale mit zwei Henkeln: Glasur hellgrau mit leichtem Blaugrün-Stich (gemessen ca. RGB 157/158/142), feine dunkelbraune Sprenkel, karamellbrauner Rand. | Immer das Brett, die Brettenden liegen knapp außerhalb des Bildes. Steingut nur laut Tabelle in Abschnitt 4, und dann auf dem Brett. |
| Kamera | Burger fast auf Augenhöhe, Wrap und Tenders ca. 35–45°, Wings und Fries fast senkrecht von oben | Immer **frontal, Kamera 30° über der Brettfläche** (0° = Augenhöhe, 90° = senkrecht von oben). Bei Burgern bleiben die Schichten sichtbar, in Schalen sieht man noch hinein. |
| Größe im Bild | Burger ca. 35–45 % der Bildbreite, Schalen und Tenders füllen das ganze Bild | Feste Werte je Gefäß (Abschnitt 4), meist 70 % |
| Hintergrund | nahtlos hellgrau, gleichmäßig ohne Verlauf, gemessen ca. RGB 228–240 (89–94 % Helligkeit) | gleich: ein einheitlicher Ton um #E9E9E8 |
| Beigaben | Dip-Schälchen bei allen Saucen-Wings, gestreute Petersilie auf dem Wrap-Brett. In `01`/`02` außerdem Gäste, fremde Teller und eine Logo-Einblendung | Nur, was auf der Karte steht. Kräuter nur, wenn sie im Ausgangsfoto schon auf dem Essen liegen. |
| Markenfarben / „Fight Night“ | kommen von der Website (Creme, Rot), nicht aus dem Foto | Die Fotos bleiben neutral. So passen die Freisteller auf Creme `#f7ebd9` und auf Rot `#e0140e`. |

## 3. Arbeitsablauf

0. **Ausgangsfotos vorbereiten.** Das geschieht in einem Arbeitsordner außerhalb des Repos, z. B. `~/chickago-arbeit/`.
   - Jedes Foto quadratisch auf das Gericht zuschneiden. Fremde Teller, Personen, Hände und Logo-Einblendungen wegschneiden. Beispiele: `01-chicken-wings.jpg` zeigt Gäste und andere Gerichte, `02-buffalo-red-hot-wings.jpg` hat oben links das Logo.
   - Freisteller mit Transparenz (`04-teriyaki-wings.webp`, `05-sweet-chili-wings.webp`) auf das Hintergrundgrau setzen:
     `convert 04-teriyaki-wings.webp -background "#e9e9e8" -alpha remove -alpha off -gravity center -extent 900x900 04-upload.png`
   - Für jedes Foto zwei Dinge notieren:
     - Zeigt es das **echte Gericht** oder nur eine **generische Referenz**?
     - Was ist im Foto zu sehen, gehört aber nicht zum Gericht (Dip-Schälchen, Beilage)? Das kommt in `[LEAVE OUT]`.
1. **Startbild US Burger**, noch ohne Anker.
   - In AI Studio Nano Banana Pro wählen, 1:1, 4K.
   - Image 1 = `foto-us-burger.webp` oder das beste vorhandene Foto vom US Burger.
   - Den Master-Prompt aus Abschnitt 5 nehmen, mit `[SERVING]` = BOARD.
   - Unter STYLE die ersten beiden Sätze („Image 2 shows … camera angle exactly.“) **löschen**, denn es gibt noch kein Image 2.
   - Im selben Chat nachbessern, bis alles stimmt: „Keep everything the same, but …“
2. **Startbild freigeben.** Prüfen:
   - Brett waagerecht, die Enden knapp außerhalb des Bildes, die Vorderkante knapp über dem unteren Bildrand
   - Kamera 30° über dem Brett
   - Burger ca. 70 % der Bildbreite, links und rechts gleich viel Platz, etwas unter der Bildmitte
   - Hintergrund gleichmäßig hellgrau ohne Kanten, Flecken oder Verlauf, Ecke oben links ca. 90 % (Messbefehl in Abschnitt 10)
   - Licht weich von links vorn, kurzer weicher Schatten
   - Der Burger stimmt mit dem Ausgangsfoto überein.

   Das freigegebene Startbild ist zugleich das fertige Bild für den US Burger.
3. **Leere Anker ableiten.** Das passiert im selben Chat, damit Licht und Winkel gleich bleiben. Leere Anker haben einen Vorteil gegenüber einem Gericht als Stilvorlage: Es kann nichts vom Essen (Saucenfarbe, Bacon, Ei) ins nächste Gericht wandern.
   - **Anker A (Brett).** Mit diesem Prompt erzeugen und als `anker-a-brett.png` speichern:
     `Using the provided image, remove only the burger. Keep the board, backdrop, light, camera angle and framing exactly the same, so that the empty board remains. Aspect ratio 1:1.`
   - **Anker B (Schale).** Auf Anker A aufbauen und als `anker-b-schale.png` speichern:
     `Keep everything exactly the same, but place one empty square stoneware baking dish with low straight sides, rounded corners and a small loop handle on the left and right side, centred on the board, handles pointing left and right, filling about 70 percent of the image width. Glaze: pale grey with a faint blue-green tint and fine dark-brown speckles; the rim is glazed caramel brown. Aspect ratio 1:1.`
   - Prüfen: Brett, Hintergrund und Licht sind wie im Startbild. Die Schale passt zu `foto-bbq-wings.webp`.
4. **Jedes weitere Gericht in einem eigenen, neuen Chat.**
   - Reihenfolge beim Anhängen: **Image 1 = Ausgangsfoto, Image 2 = Anker** laut Tabelle in Abschnitt 4.
   - Buckets bekommen zusätzlich **Image 3 = das freigegebene Cola-Foto**.
   - Menüs und Buckets haben meist kein eigenes Foto. Dann ist Image 1 das freigegebene Bild der Hauptkomponente, z. B. Chicken Wings.
5. **Platzhalter füllen** (Abschnitte 5 und 6). Den STYLE-Block nie umformulieren, er bleibt bei jedem Bild Wort für Wort gleich.
6. **Prüfen und im selben Chat korrigieren** (Abschnitt 10). Höchstens 2–3 Korrekturen, danach einen neuen Chat beginnen.
7. **Speichern** unter `bilder-upscale/bearbeitet/<gleicher Name wie das Ausgangsfoto>.png`.
8. **Freisteller erzeugen** (Abschnitt 8). Dafür einen neuen Chat öffnen und nur das freigegebene Brett-Foto anhängen.
9. **Etwa alle 10 Bilder einen Kontaktbogen machen** (Abschnitt 10).
   - Wenn der Stil wegdriftet (Helligkeit, Winkel, Größe), bei Pro ein frisch freigegebenes Bild derselben Gefäß-Art als Image 3 mitgeben. Bei Buckets ist es Image 4.
   - Dazu ans Ende von STYLE diesen Satz anhängen:
     `Image 3 is an approved photo from the same shoot; match its light, colour, camera angle and food size as well, and take no food from it.`
   - Möglichst ein Bild mit deutlich anderem Essen nehmen, z. B. für einen Beef Burger einen freigegebenen Chicken Burger.
   - Mehr als 3 Stil-Referenzen nennt die Doku für Pro nicht.

## 4. Gefäß, Größe und Anker je Gericht

| Karte | Gerichte | `[SERVING]` | Image 2 |
|---|---|---|---|
| Chicken | Chicken Wings (ein Bild für 6/10/20 Stück, gezeigt mit 10), Crispy-Chicken Tenders · 5 Stück, Crispy-Chicken Tenders · 10 Stück | BOARD | Anker A |
| Chicken | Buffalo Red Hot Wings, Chipotle Honey BBQ Wings, Teriyaki Wings, Sweet Chili Wings, Buffalo Red Hot Tenders, Chipotle Honey BBQ Tenders, Teriyaki Tenders | TRAY | Anker B |
| Buckets | Bucket, Party Bucket | BUCKET (dazu Image 3 = Cola) | Anker A |
| Chicken Burger, Beef Burger | alle | BOARD | Anker A |
| Menüs | alle vier | COMBO | Anker A |
| Wraps | Chicken Wrap Chickago-Boys, Caesar Wrap | BOARD | Anker A |
| Salate | Caesar Chicken Salat, Fitness Salat, Gemischter Salat | BOWL | Anker B |
| Beilagen | Pommes frites, Süßkartoffel-Pommes, Jalapeños Chili Cheese Fries, Cheesy Bacon Fries | TRAY | Anker B |
| Beilagen | Onion Rings, Mozzarella Sticks | BOARD | Anker A |
| Beilagen | Krautsalat | SMALL BOWL | Anker B |
| Saucen & Dips | alle elf | DIP | Anker B |
| Getränke | alle acht | eigener Prompt (Abschnitt 7) | Anker A |
| Dessert | New York Cheesecake | SLICE | Anker A |

Ribs, Steaks und Drinks von der Bar stehen auf der Karte nur als Hinweis („Vor Ort gibt's noch mehr“). Sie bekommen erst ein Bild, wenn es ein echtes Foto und eine Beschreibung gibt.

## 5. Master-Prompt

```
Create a professional menu photograph of "[DISH NAME]" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
[DISH DESCRIPTION]
Image 1 shows the real dish. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. [LEAVE OUT] The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
[SERVING]

STYLE
Image 2 shows the empty set of this shoot, with no food in it. Match its board, backdrop, light, colour and camera angle exactly.
- Board: a long oval acacia-wood serving board with alternating warm honey and dark chocolate-brown grain stripes, oiled satin finish, lying horizontally; its rounded ends lie just outside the left and right edges of the image, and its front edge runs straight across the frame just above the bottom of the image.
- Backdrop: the board lies on a seamless light-grey paper sweep that curves up behind it; one smooth, even tone everywhere (about #E9E9E8), evenly lit from edge to edge.
- Camera: straight-on front view, camera raised 30 degrees above the board surface (0 degrees would be eye level, 90 degrees straight down), 85 mm full-frame lens look, natural perspective, level horizon.
- Framing: the whole dish in frame, centred left to right with equal space on both sides, sitting slightly below the image centre, calm backdrop above; size exactly as stated under SERVING.
- Light: large soft diffused key light from the front left, gentle fill from the right, soft short shadow directly under the food, clean soft highlights.
- Colour: neutral daylight white balance, true-to-life appetising food colours, clean whites, rich but natural saturation.
- Focus: the entire dish tack-sharp from front to back (f/8 look), crisp texture of crust, sauce, cheese and bun.
- Realism: ultra-realistic, unretouched studio photograph of real, freshly prepared food at its real portion size.

Clean, unbranded scene: only the board, what FOOD and SERVING name, and the backdrop; free of text, logos, props, cutlery, napkins and scattered garnish, except an original drink label named under SERVING. Aspect ratio 1:1.
```

So ist der Prompt aufgebaut:
- **Offizielle Regeln:** Die Szene wird ausführlich beschrieben, Zweck und Kontext stehen gleich im ersten Satz, Kamerasprache wird verwendet. Unerwünschtes wird positiv umschrieben („Clean, unbranded scene: only …“).
- **Treue zum Gericht:** Die kritischen Details werden einzeln genannt und als unveränderlich festgelegt. Das entspricht dem Muster „remain completely unchanged“ aus der Doku.
- **Rollen der Bilder:** Jedes Bild bekommt seine Aufgabe ausdrücklich zugewiesen. Google empfiehlt das so: „Use Image A for the character's pose, Image B for the art style …“
- **Konsistenz:**
  - Der STYLE-Block bleibt wörtlich gleich.
  - Gefäß und Größe stehen nur im SERVING-Baustein, nicht im STYLE-Block.
  - Der Anker enthält kein Essen.

### `[SERVING]`-Bausteine

Genau einen Baustein einsetzen, unverändert.

**BOARD**
```
The food lies directly on the board, centred, and fills about 70 percent of the image width.
```

**TRAY**
```
The food sits in one square stoneware baking dish with low straight sides, rounded corners and a small loop handle on the left and right side, exactly like the dish in image 2: glaze pale grey with a faint blue-green tint and fine dark-brown speckles, rim glazed caramel brown. The dish stands centred on the board, handles pointing left and right, and fills about 70 percent of the image width. The food is piled slightly above the rim so that it stays clearly visible.
```

**BOWL** (Salate)
```
The salad is served in one deep round stoneware bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim). The bowl stands centred on the board and fills about 70 percent of the image width. Fresh, crisp leaves; every component clearly recognisable; dressing only if the description names it.
```

**SMALL BOWL** (Krautsalat)
```
The coleslaw is served in one small round stoneware bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), centred on the board and filling about 50 percent of the image width.
```

**DIP**
```
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the board and fills about 40 percent of the image width.
```

**SLICE** (New York Cheesecake)
```
One slice lies directly on the board, its tip pointing to the front left so that the creamy cut face and the base are visible; it fills about 50 percent of the image width. Topping only if the description names it.
```

**COMBO** (Menüs)
```
This is a meal deal: all parts named in the description, on the same board. The chicken lies directly on the board in the front centre. Behind it on the left stand the fries in a small square stoneware baking dish with low sides and two loop handles; behind it on the right the coleslaw in a small round stoneware bowl. Both share one glaze: pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim. Every part is fully visible, the parts overlap slightly, and the whole group fills about 85 percent of the image width.
```

**BUCKET**
```
This is a sharing bucket: all parts named in the description, on the same board. A generous heap of chicken lies directly on the board in the front centre. Behind it stand the fries, one portion per small square stoneware baking dish with low sides and two loop handles, and, if the description lists it, the coleslaw in a small round stoneware bowl; all stoneware has one glaze: pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim. At the back right stands the drink bottle from image 3, upright, label facing the camera, exactly as in image 3, letter for letter; its label is the only lettering in the picture, and nothing else is taken from image 3. Every part is visible, and the whole group fills about 90 percent of the image width.
```

### `[LEAVE OUT]`

Hier wird genannt, was im Ausgangsfoto zu sehen ist, aber nicht zum Gericht gehört. Gibt es so etwas nicht, den Platzhalter löschen. Beispiel für die Saucen-Wings (`02` bis `05` zeigen alle einen Dip):
```
Image 1 also shows a dip in a small bowl; it is not part of this dish and stays out of the picture.
```

### Generische Referenz statt echtem Foto

Im FOOD-Absatz alles von „Image 1 shows the real dish“ bis „… are added.“ **ersetzen** durch:
```
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.
```

**Wenn es gar kein Ausgangsfoto gibt:**
- Als Image 1 ein freigegebenes Bild eines ähnlichen Gerichts aus der Serie nehmen, z. B. für den Mushroom Burger den freigegebenen Cheese Burger. Dazu den Absatz oben verwenden.
- Gibt es auch kein ähnliches Bild (z. B. beim ersten Dip), nur den Anker anhängen. Im Prompt dann:
  - den FOOD-Absatz ab „Image 1 shows“ ersetzen durch `Build the food strictly from the description: every listed component is clearly visible, and nothing else appears.`
  - überall „image 2“ durch „image 1“ ersetzen.

## 6. Beschreibung schreiben (`[DISH DESCRIPTION]`)

Für jedes Gericht gelten diese Regeln:
- **Was** ins Bild kommt, bestimmt die Karte: die Gerichtszeile plus die Sammelzeile der Kategorie, z. B. „Alle Burger mit Rindfleisch-Patty, Cheddar, Tomaten, Salat, sauren Gurken und Zwiebeln“. **Wie** es aussieht (Anordnung, Bun, Panade, Schnitt), bestimmt das Ausgangsfoto.
- Widersprechen sich Karte und Foto, nur aufnehmen, was beide zeigen. Die Abweichung in `speisekarte.md` vermerken, damit das Restaurant sie klärt. Beispiel: Die Sammelzeile der Beef Burger nennt saure Gurken und Zwiebeln, auf `foto-us-burger.webp` sind aber keine Gurken und nur karamellisierte Zwiebeln zu sehen.
- Stückzahlen kommen aus der Karte und werden ausgeschrieben, etwa „exactly 10 wings“. Was das Foto zeigt, zählt nicht. Beispiel: `06-crispy-chicken-tenders-5-stueck.webp` zeigt deutlich mehr als 5 Tenders.
- Bei Buckets (20 Wings, 20 Filets) statt einer Zahl „a generous heap of wings and filets“ schreiben. Die Zahl der Pommes-Portionen dagegen genau angeben.
- Nur sichtbare Bestandteile beschreiben. „Mild oder scharf“ und „hausgemacht“ sieht man nicht. Hat eine Sauce kein Foto als Beleg, nur allgemein beschreiben („a creamy sauce“) und als generisch markieren.
- Chicken Wings („mit Sauce nach Wahl“) ohne Sauce und ohne Dip zeigen, weil die Wahl offen ist.
- Burger in Schichten von unten nach oben beschreiben.
- Saucen immer mit derselben Formulierung aus der Tabelle beschreiben, egal ob bei Wings, Tenders oder Burgern.

| Sauce | Feste Formulierung | Grundlage |
|---|---|---|
| Buffalo Red Hot | `coated in an opaque, bright red-orange buffalo sauce that clings to the craggy crust` | `02-buffalo-red-hot-wings.jpg` |
| Chipotle Honey BBQ | `glazed in a thick, glossy, deep reddish-brown chipotle honey BBQ sauce` | `03-chipotle-honey-bbq-wings.webp` |
| Teriyaki | `glazed in a glossy, very dark chestnut-brown teriyaki sauce with reddish highlights` | `04-teriyaki-wings.webp` |
| Sweet Chili | `glazed in a glossy, light orange sweet chili sauce with small red chili flecks` | `05-sweet-chili-wings.webp` |

**Beispiel US Burger** (Karte: Cheddar, Ei, Bacon, karamellisierte Zwiebeln, BBQ-Soße. Laut Sammelzeile und Foto kommen Tomate und Salat dazu.)
`Beef burger on a glossy brioche bun, layers from bottom to top: bottom bun, green leaf lettuce, tomato slice, beef patty with melted cheddar, caramelised onions and BBQ sauce, fried egg, crispy bacon, top bun.`

**Beispiel Teriyaki Wings** (Karte: 10 Stück, in Teriyaki-Sauce.)
`Exactly 10 chicken wings, glazed in a glossy, very dark chestnut-brown teriyaki sauce with reddish highlights.`
Dazu kommt `[LEAVE OUT]` mit dem Dip-Satz aus Abschnitt 5.

## 7. Getränke-Prompt

Getränke bekommen einen eigenen Prompt, weil der Master-Prompt Etiketten ausschließt.
- **Image 1:** ein eigenes Handyfoto der echten Flasche oder Dose, kein Herstellerfoto aus dem Netz. Etikett frontal und scharf, schon leicht von oben (ca. 30°) aufgenommen, quadratisch zugeschnitten.
- **Image 2:** Anker A.
- **Home Made Peach / Lemon Iced Tea · 1,0 l** nur mit einem Foto des Gefäßes, das das Restaurant wirklich verwendet. Ohne dieses Foto gibt es kein Bild, denn das Gefäß ist unbekannt.

```
Create a professional menu photograph of "[DRINK NAME]" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

DRINK
Image 1 shows the real [bottle / can]. Recreate it exactly: shape, size, cap, liquid colour and the complete label, letter for letter. The label faces the camera and is the only lettering in the picture. The [bottle / can] is clean and dry.

SERVING
The [bottle / can] stands upright alone in the centre of the board and fills about 75 percent of the image height.

STYLE
[STYLE-Block aus Abschnitt 5, unverändert]

Clean scene: only the board, the [bottle / can] and the backdrop, free of glasses, ice, straws, props and any lettering other than the original label. Aspect ratio 1:1.
```

Laut Google gilt: „Rendering small text, fine details, and producing accurate spellings may not work perfectly“. Ist das Etikett falsch, das Original nicht neu zeichnen lassen, sondern nur die Umgebung tauschen:
```
Using image 1, change only the surroundings of the [bottle / can]: it now stands upright in the centre of the board shown in image 2, in front of the backdrop of image 2, lit like image 2, filling about 75 percent of the image height. Keep the [bottle / can], its label, cap and liquid exactly the same, letter for letter. Aspect ratio 1:1.
```

## 8. Freisteller-Variante (für `cut-*`)

Die Eingabe ist **nur das freigegebene Brett-Foto**. Damit sind Gericht, Licht und Winkel identisch mit dem Foto, nur die Umgebung wechselt. Das entspricht dem offiziellen Muster für Bearbeitungen („Using the provided image, change only …“). Auflösung wie beim Brett-Foto, also 4K.

```
Using the provided photo of "[DISH NAME]", keep the food exactly the same (same pieces, shape, colours, light, camera angle and size in the frame), together with its stoneware if there is any. Change only the surroundings: replace the wooden board and the studio backdrop with one flat, uniform, saturated chroma-key blue (#0047BB) that fills the entire frame from edge to edge. The blue is evenly lit, without shadow, gradient, texture or reflections; the underside of the food meets it with a crisp edge. The food keeps its neutral studio light: highlights stay white and every colour stays exactly as in the provided photo, with no blue tint or blue reflection on the food. The whole dish is in frame with at least 10 percent clear blue on every side. Aspect ratio 1:1.
```

**Warum nicht gleich transparent?** Google schreibt auf der Legacy-Seite der Doku: „The model does not support generating a transparent background.“ Für Assets empfiehlt Google dort „request a white background“. Paige Bailey (Google AI) hat sich von Nano Banana Pro ein Motiv „on a white background“ erzeugen lassen und ein weißes JPEG bekommen. Transparent wurde das Bild erst danach per Code (Gemini Flash mit Code Execution und OpenCV). Die Freistellung ist also immer ein eigener zweiter Schritt.

Den Schatten braucht der Freisteller nicht: Die Website setzt selbst einen Schlagschatten (`.dish__media img { filter: drop-shadow(…) }` in `assets/css/style.css`).

**Warum sattes Blau statt Weiß?**

| Farbe | Problem bei dieser Karte |
|---|---|
| Weiß / Hellgrau (Googles Standardempfehlung) | Ranch, Mayonnaise, Caesar Dressing, Spiegelei, Weißkohl im Krautsalat, Tortilla, Mozzarella, Cheesecake, die helle Bun-Unterseite und das hellgraue Steingut (ca. RGB 157/158/142) verlieren ihre Kanten. |
| Grün (Greenscreen) | Blattsalat, Jalapeños, Gurke, Kräuter und das grüne Sprite-Etikett würden mit ausgestanzt. |
| Gelb, Orange, Rot | Pommes, Cheddar, Käsesauce, Brioche, Bacon, Buffalo- und Sweet-Chili-Sauce, Tomate, Coca-Cola und Fanta. Außerdem würden Farbsäume auf dem Website-Rot `#e0140e` verschwimmen. |
| Magenta, Violett | Rotkohl im Krautsalat, Lollo rosso auf den Beef-Burgern (zu sehen in `cut-cheese-burger`, `cut-hamburger`) |
| **Blau (gewählt)** | Kommt in keinem Gericht vor. Der Farbton liegt dem Orange-Braun von Panade und Glasuren gegenüber. Weil das Blau satt und mitteldunkel ist, hebt es sich auch in der Helligkeit von weißen Saucen ab. Das Steingut ist fast neutral grau und deshalb weit genug entfernt. |

**Ausnahmen:**
- **Red Bull** (blaue Dose): Magenta `#FF00FF` statt Blau.
- **Durchsichtige Flaschen:** Das Blau scheint durch und lässt sich nicht sauber abtrennen. Solche Flaschen im Bildprogramm von Hand maskieren (Photoshop „Motiv auswählen“) oder ganz ohne Freisteller verwenden.

**Hintergrund entfernen:**
- **Am besten im Bildprogramm:** Photoshop „Auswahl > Farbbereich“, danach „Auswählen und maskieren“ mit „Farben dekontaminieren“. In GIMP „Nach Farbe auswählen“ oder „Farbe zu Alpha“.
- **Schnelltest mit ImageMagick:** Der Befehl entfernt jedes Blau, auch eingeschlossene Flächen wie das Loch eines Onion Rings. Er verkleinert den Rand um 1 px und schneidet auf das Motiv zu, wie bei den vorhandenen `cut-*`. Die Kanten bleiben hart, das Ergebnis taugt nur zur Kontrolle.
  ```
  c=$(convert in.png -format "%[pixel:p{5,5}]" info:)
  convert in.png -alpha set -fuzz 20% -transparent "$c" -channel A -morphology Erode Disk:1 +channel -trim +repage cut-test.png
  ```
- **Speichern** als `bilder-upscale/bearbeitet/cut-<Name>.png` mit Alpha, also PNG oder WebP, kein JPG.

## 9. Nicht erlaubt

- Text jeder Art im Bild: Preise, Namen, Schriftzüge auf Brett, Schale oder Hintergrund. Einzige Ausnahme ist das unveränderte Originaletikett eines Getränks.
- Logos, auch nicht das Chickago-Boys-Logo aus den vorhandenen Fotos. Logos setzt die Website.
- Das sichtbare Gemini-Funkeln. Deshalb mit AI Studio oder der API arbeiten.
- Hände, Personen, Gäste, Restaurant-Interieur, Fliesen, Tische.
- Andere Unterlagen statt des Bretts: Teller, Schieferplatte, Pappbox, Korb, Eimer (auch beim „Bucket“), Backpapier, Papiertüte, Tablett oder ein anderes Holz.
- Andere Gefäße als das Steingut aus Abschnitt 5. Ausnahme sind Getränkeflaschen und -dosen.
- Deko und Requisiten: gestreute Kräuter, Gewürze, Chilischoten, Zitronen, Salzstreuer, Besteck, Servietten, Pommesgabeln, Burger-Spieße, Fähnchen.
- Zutaten, Beilagen oder Dips, die nicht auf der Karte stehen. Außerdem falsche Stückzahlen, verwechselte Saucenfarben und ein anderes Bun.
- Effekte: Dampf, Rauch, Flammen, fliegende Zutaten, Spritzer, Kondenswasser, Vignette, HDR- oder Filter-Look.
- Markenrot, Gelb oder „Fight Night“-Elemente als Hintergrund, Licht oder Requisite.
- Angeschnittene Gerichte, schräge Horizonte, andere Kamerawinkel.

## 10. Qualitätskontrolle und Korrektur

**Pro Bild, im Vergleich mit Ausgangsfoto, Karte und Anker:**
1. **Zutaten abhaken.** Jede Komponente aus der Beschreibung muss da sein, und nichts darf dazukommen, auch kein Dip aus Image 1. Stückzahlen nachzählen:
   - Wings 10
   - Tenders 5 bzw. 10
   - Menüs 6/10 Wings bzw. 5/10 Tenders
   - Bei Buckets müssen alle Bestandteile zu sehen sein und die Pommes-Portionen genau stimmen.
2. **Saucenfarbe** mit der Tabelle in Abschnitt 6 vergleichen. Besonders leicht verwechselt werden BBQ mit Teriyaki und Buffalo mit Sweet Chili.
3. **Set mit dem Anker vergleichen:**
   - dasselbe Brett, Streifen gleich, Enden außerhalb des Bildes
   - Kamera 30°
   - Größe laut Abschnitt 5
   - Licht von links vorn
4. **Hintergrund messen.** Dieser Befehl gibt die Helligkeit der Ecke oben links aus:
   `convert bild.png -gravity northwest -crop 10%x10%+0+0 +repage -format "%[fx:round(mean*100)]\n" info:`
   Das Startbild ist der Maßstab. Jedes neue Bild darf höchstens ±3 davon abweichen.
5. **Bei 100 % Zoom ansehen.** Achten auf verschmolzene oder doppelte Wings, unmögliche Schichtung, Plastik-Look, sich wiederholende Holzmaserung und Textfragmente. Etiketten **Buchstabe für Buchstabe** prüfen.
6. **Technik prüfen:**
   - Größe: `identify -format "%f %wx%h\n" bilder-upscale/bearbeitet/*.png` muss 4096×4096 bzw. 2048×2048 ergeben.
   - Alpha bei Freistellern: `identify -format "%f %[channels] opaque=%[opaque]\n" bilder-upscale/bearbeitet/cut-*.png` muss `srgba opaque=false` zeigen.
   - Auf beiden Website-Farben testen: `convert cut-x.png -background "#e0140e" -flatten test-rot.png`, dasselbe mit `#f7ebd9`. Ein blauer Saum darf nicht zu sehen sein.
7. **Etwa alle 10 Bilder einen Kontaktbogen machen:**
   `montage $(ls bilder-upscale/bearbeitet/*.png | grep -v /cut-) -tile 6x -geometry 300x300+4+4 -background "#808080" ~/chickago-arbeit/kontaktbogen.png`
   Im Überblick fallen Ausreißer bei Winkel, Größe und Helligkeit sofort auf.

**Wenn ein Bild abweicht:** nicht neu würfeln, sondern **im selben Chat** gezielt nachbessern, wie Google es empfiehlt.

| Problem | Nachsatz |
|---|---|
| Erfundene Zutat, Beilage oder Dip aus Image 1 | `Keep everything the same, but remove the [item]; it is not part of this dish. The dish contains only: [list].` |
| Falsche Sauce oder Farbe | `Keep everything the same, but make the sauce [Formulierung aus der Saucen-Tabelle], as in image 1.` |
| Stückzahl stimmt nicht | `Keep everything the same, but show exactly [n] pieces, each clearly separate.` |
| Winkel, Größe oder Brett weichen ab | `Keep the food exactly the same, but match the board, backdrop and camera angle of image 2 exactly, with the camera 30 degrees above the board, and make the dish fill about [70] percent of the image width.` |
| Hintergrund grau, fleckig, verlaufend oder farbig | `Keep everything the same, but make the backdrop the same smooth, even light grey as image 2.` |
| Wirkt wie CGI | `Keep everything the same, but make it look like an unretouched studio photograph of real food with natural texture.` |
| Text oder Logo im Bild | `Keep everything the same, but remove all text and logos.` |
| Etikett falsch (Getränke, Bucket) | `Keep everything the same, but make the label exactly as in image [1/3], letter for letter.` Hilft das nicht, die Umgebungs-Variante aus Abschnitt 7 nehmen. |

**Wenn es nach 2–3 Korrekturen nicht stimmt:** neuer Chat mit dem unveränderten Prompt. Je nach Ursache:
- **Ausgangsfoto schuld:** enger zuschneiden, ein besseres Foto nehmen oder auf „Generische Referenz“ umstellen.
- **Stil driftet über die Serie:** Schritt 9 in Abschnitt 3 anwenden. Google weist selbst darauf hin, dass Konsistenz nicht garantiert ist („Character consistency across edits may vary“).

## Quellen

- https://ai.google.dev/gemini-api/docs/image-generation: Modelle und IDs; Referenzbild-Tabelle mit „Up to 3 images to be used as style references“ nur bei Pro; Limitations (Gemini 2.5 Flash Image „works best with up to 3 images“); Seitenverhältnisse und Pixelmaße (1:1 = 2048×2048 bei 2K, 4096×4096 bei 4K); großes „K“; Standardformat = Format des Eingabebilds; Vorlagen für Bearbeitungen und Detailtreue; semantische Negativ-Prompts; Kamerasprache; Sprachen; SynthID; Batch; `response_format` mit `mime_type`, `aspect_ratio`, `image_size`; frühere Bilder für Konsistenz mitgeben
- https://ai.google.dev/gemini-api/docs/generate-content/image-generation: Legacy-Seite mit „The model does not support generating a transparent background“ und „request a white background“
- https://blog.google/products-and-platforms/products/gemini/prompting-tips-nano-banana-pro/: Prompt-Bausteine; Rollen für Referenzbilder („Use Image A … Image B …“); Grenzen bei kleinem Text, Rechtschreibung und Konsistenz
- https://support.google.com/gemini/answer/14286560?hl=en&co=GENIE.Platform%3DDesktop: Gemini-App mit Modellwahl, Pro nur mit Google-AI-Plan, „Redo with Pro“ und Tageskontingent, Download 2K/1K, mehrere Bilder hochladen
- https://blog.google/innovation-and-ai/products/nano-banana-pro/: sichtbares Gemini-Funkeln bei Free und Pro, nicht bei Ultra und in AI Studio; Verfügbarkeit; 2K/4K
- https://blog.google/innovation-and-ai/technology/developers-tools/build-with-nano-banana-2/: Nano Banana 2 über die Gemini API in AI Studio und auf Vertex AI; Seitenverhältnisse und Auflösungen
- https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/: kein „Nano Banana 3“ genannt
- https://dev.to/googleai/image-manipulation-on-a-budget-bounding-boxes-and-transparency-with-gemini-30-flash-and-cib: weißes JPEG statt Transparenz, Freistellung per OpenCV
- Lokal:
  - `assets/img/foto-*.webp` und `cut-*.webp`: Hausstil, gemessene Hintergrund- und Steingutfarben
  - `speisekarte.html`: Gerichte, Stückzahlen, Sammelzeilen
  - `assets/css/style.css`: Schlagschatten der Freisteller
  - `bilder-upscale/README.md`: Retina, Dateinamen, Alpha
  - `bilder-upscale/speisekarte/01-chicken/`: Ausgangsfotos, Saucenfarben