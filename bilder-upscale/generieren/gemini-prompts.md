# Gemini-Prompts: Speisenbilder Chickago Boys

Stand: 01.10.2026 · 59 Prompts für die Gemini-App ([gemini.google.com](https://gemini.google.com) oder die App auf dem Handy). Alle Pfade sind relativ zum Ordner `bilder-upscale/` im Projekt.

## So gehst du in Gemini vor

1. **Vorbereiten:** Im Projektordner auf dem Mac `git pull` ausführen. Dann liegen alle Bilder, die du hochladen musst, unter `Chickago-Boys/bilder-upscale/`. Für die Getränke zusätzlich einmal `sh bilder-upscale/generieren/bilder-holen.sh` ausführen.
2. **Modell:** Hast du ein Google-AI-Abo, nimm **Pro** (bzw. nach dem ersten Bild „Redo with Pro“). Damit wird die Serie einheitlicher und der Download ist 2K. Ohne Abo erzeugt Gemini das Bild mit Nano Banana 2 und lädt es in 1K herunter.
3. **Für jedes Gericht einen neuen Chat.** Ausnahme: US Burger und die beiden Anker laufen im selben Chat.
4. **Bilder in der angegebenen Reihenfolge hochladen**, also erst Image 1, dann Image 2 und gegebenenfalls Image 3. Danach den Prompt **komplett und unverändert** einfügen und absenden.
5. **Prüfen:**
   - Zutaten wie in der Beschreibung, ohne Dip und ohne Deko
   - Stückzahl
   - Saucenfarbe
   - Brett, Winkel, Größe und Hintergrund wie bei den Ankern

   Weicht etwas ab, im **selben Chat** mit einem Korrektursatz (unten) nachbessern. Nach 2–3 Versuchen lieber einen neuen Chat starten.
6. **Herunterladen** und unter dem angegebenen Namen in `bilder-upscale/bearbeitet/` speichern.
7. **Abgeben:** `git add bilder-upscale/bearbeitet && git commit -m "Generierte Speisenbilder" && git push`, oder mir Bescheid geben.

**Die Reihenfolge einhalten.** Spätere Gerichte nutzen frühere, schon freigegebene Bilder als Vorlage. Ein Beispiel: Alle Dips bauen auf dem Ranch-Dip auf, der Bucket auf Wings und Cola.

### Besonderheiten der Gemini-App

- **Format:** Das Seitenverhältnis lässt sich in der App nicht einstellen. Alle Eingabebilder sind deshalb quadratisch, und jeder Prompt verlangt 1:1. Kommt trotzdem ein anderes Format heraus:
  `Keep everything the same, but make the image square, aspect ratio 1:1.`
- **Gemini-Funkeln:** Ohne Ultra-Abo setzt Gemini ein sichtbares Funkel-Symbol unten rechts ins Bild. Es liegt auf dem grauen Hintergrund. In einem Bildprogramm mit der Hintergrundfarbe `#E9E9E8` übermalen, bei Freistellern zusammen mit dem Hintergrund wegradieren.
- **Text statt Bild:** Antwortet Gemini nur mit Text, nachschieben:
  `Generate the image now.`
- **Tageslimit:** Gemini begrenzt die Bilder pro Tag. Über mehrere Tage verteilen ist kein Problem, nur die Reihenfolge beibehalten.
- **Auflösung:** 1K (ohne Abo) ist für die Website knapp. Diese Bilder später noch hochskalieren. Dafür ist der Ordner ja ursprünglich gedacht.

## Start

Erst dieses Bild erzeugen und freigeben, dann im selben Chat die beiden leeren Anker ableiten (direkt darunter).

### 1. US Burger

- Image 1: `generieren/eingabe/04-beef-burger__01-us-burger.png`
- Speichern als: `bearbeitet/04-beef-burger/01-us-burger.png`

```
Create a professional menu photograph of "US Burger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Beef burger on a glossy brioche bun, layers from bottom to top: bottom bun, green leaf lettuce, tomato slice, beef patty with melted cheddar, caramelised onions and BBQ sauce, fried egg, crispy bacon, top bun.
Image 1 shows the real dish. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
The food lies directly on the board, centred, and fills about 70 percent of the image width.

STYLE
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

### Anker A und B (im selben Chat wie der US Burger)

Wenn der US Burger passt, im **selben Chat** weiterschreiben:

```
Using the provided image, remove only the burger. Keep the board, backdrop, light, camera angle and framing exactly the same, so that the empty board remains. Aspect ratio 1:1.
```
Herunterladen und als `bearbeitet/_anker/anker-a-brett.png` speichern. Danach, weiter im selben Chat:

```
Keep everything exactly the same, but place one empty square stoneware baking dish with low straight sides, rounded corners and a small loop handle on the left and right side, centred on the board, handles pointing left and right, filling about 70 percent of the image width. Glaze: pale grey with a faint blue-green tint and fine dark-brown speckles; the rim is glazed caramel brown. Aspect ratio 1:1.
```
Herunterladen und als `bearbeitet/_anker/anker-b-schale.png` speichern.

Prüfen: Brett, Hintergrund und Licht sehen genauso aus wie beim US Burger. Diese zwei Bilder hängst du ab jetzt bei fast jedem Gericht als Image 2 an.

## Echtes Foto

### 2. Chicken Wings

- Image 1: `generieren/eingabe/01-chicken__01-chicken-wings.jpg`
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/01-chicken/01-chicken-wings.png`
- Hinweis: Ein Bild für 6, 10 und 20 Stück (gezeigt mit 10).

```
Create a professional menu photograph of "Chicken Wings" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 10 plain chicken wings without any sauce, with a craggy, golden-brown crispy coating.
Image 1 shows the real dish. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. Image 1 also shows far more than 10 wings, a wooden platter, dip bowls, plates and a table; show exactly 10 wings and leave everything else out of the picture. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
The food lies directly on the board, centred, and fills about 70 percent of the image width.

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

### 3. Crispy-Chicken Tenders · 5 Stück

- Image 1: `generieren/eingabe/01-chicken__06-crispy-chicken-tenders-5-stueck.png`
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/01-chicken/06-crispy-chicken-tenders-5-stueck.png`

```
Create a professional menu photograph of "Crispy Chicken Tenders, 5 pieces" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 5 long crispy chicken tenders (breaded chicken breast strips) with a craggy, golden-brown coating, without sauce.
Image 1 shows the real dish. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. Image 1 shows about ten tenders; show exactly 5. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
The food lies directly on the board, centred, and fills about 70 percent of the image width.

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

### 4. Crispy-Chicken Tenders · 10 Stück

- Image 1: `generieren/eingabe/01-chicken__06-crispy-chicken-tenders-5-stueck.png`
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/01-chicken/07-crispy-chicken-tenders-10-stueck.png`

```
Create a professional menu photograph of "Crispy Chicken Tenders, 10 pieces" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 10 long crispy chicken tenders (breaded chicken breast strips) with a craggy, golden-brown coating, without sauce.
Image 1 shows the real dish. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
The food lies directly on the board, centred, and fills about 70 percent of the image width.

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

### 5. Buffalo Red Hot Wings

- Image 1: `generieren/eingabe/01-chicken__02-buffalo-red-hot-wings.jpg`
- Image 2: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/01-chicken/02-buffalo-red-hot-wings.png`

```
Create a professional menu photograph of "Buffalo Red Hot Wings" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 10 chicken wings, coated in an opaque, bright red-orange buffalo sauce that clings to the craggy crust, sprinkled with a few flecks of chopped parsley.
Image 1 shows the real dish. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. Image 1 also shows a dip in a small bowl and a tiled wall; neither is part of this dish and both stay out of the picture. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
The food sits in one square stoneware baking dish with low straight sides, rounded corners and a small loop handle on the left and right side, exactly like the dish in image 2: glaze pale grey with a faint blue-green tint and fine dark-brown speckles, rim glazed caramel brown. The dish stands centred on the board, handles pointing left and right, and fills about 70 percent of the image width. The food is piled slightly above the rim so that it stays clearly visible.

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

### 6. Chipotle Honey BBQ Wings

- Image 1: `generieren/eingabe/01-chicken__03-chipotle-honey-bbq-wings.png`
- Image 2: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/01-chicken/03-chipotle-honey-bbq-wings.png`

```
Create a professional menu photograph of "Chipotle Honey BBQ Wings" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 10 chicken wings, glazed in a thick, glossy, deep reddish-brown chipotle honey BBQ sauce.
Image 1 shows the real dish. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. Image 1 also shows a dip in a small bowl; it is not part of this dish and stays out of the picture. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
The food sits in one square stoneware baking dish with low straight sides, rounded corners and a small loop handle on the left and right side, exactly like the dish in image 2: glaze pale grey with a faint blue-green tint and fine dark-brown speckles, rim glazed caramel brown. The dish stands centred on the board, handles pointing left and right, and fills about 70 percent of the image width. The food is piled slightly above the rim so that it stays clearly visible.

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

### 7. Teriyaki Wings

- Image 1: `generieren/eingabe/01-chicken__04-teriyaki-wings.png`
- Image 2: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/01-chicken/04-teriyaki-wings.png`

```
Create a professional menu photograph of "Teriyaki Wings" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 10 chicken wings, glazed in a glossy, very dark chestnut-brown teriyaki sauce with reddish highlights.
Image 1 shows the real dish. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. Image 1 also shows a dip in a small bowl; it is not part of this dish and stays out of the picture. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
The food sits in one square stoneware baking dish with low straight sides, rounded corners and a small loop handle on the left and right side, exactly like the dish in image 2: glaze pale grey with a faint blue-green tint and fine dark-brown speckles, rim glazed caramel brown. The dish stands centred on the board, handles pointing left and right, and fills about 70 percent of the image width. The food is piled slightly above the rim so that it stays clearly visible.

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

### 8. Sweet Chili Wings

- Image 1: `generieren/eingabe/01-chicken__05-sweet-chili-wings.png`
- Image 2: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/01-chicken/05-sweet-chili-wings.png`

```
Create a professional menu photograph of "Sweet Chili Wings" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 10 chicken wings, glazed in a glossy, light orange sweet chili sauce with small red chili flecks.
Image 1 shows the real dish. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. Image 1 also shows a dip in a small bowl; it is not part of this dish and stays out of the picture. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
The food sits in one square stoneware baking dish with low straight sides, rounded corners and a small loop handle on the left and right side, exactly like the dish in image 2: glaze pale grey with a faint blue-green tint and fine dark-brown speckles, rim glazed caramel brown. The dish stands centred on the board, handles pointing left and right, and fills about 70 percent of the image width. The food is piled slightly above the rim so that it stays clearly visible.

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

### 9. Chicken Home Style Honey Mustard Bacon

- Image 1: `generieren/eingabe/03-chicken-burger__01-chicken-home-style-honey-mustard-bacon.png`
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/03-chicken-burger/01-chicken-home-style-honey-mustard-bacon.png`
- Hinweis: Zwiebeln laut Karte, auf dem Foto nicht zu sehen. Deshalb weggelassen, beim Restaurant klären.

```
Create a professional menu photograph of "Chicken Home Style Honey Mustard Bacon Burger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Chicken burger on a glossy brioche bun, layers from bottom to top: bottom bun with creamy honey mustard sauce, green leaf lettuce, tomato slice, crispy breaded chicken patty with a craggy golden coating, melted cheddar, crispy bacon, top bun.
Image 1 shows the real dish. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
The food lies directly on the board, centred, and fills about 70 percent of the image width.

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

### 10. Steakhouse Burger

- Image 1: `generieren/eingabe/04-beef-burger__02-steakhouse-burger.png`
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/04-beef-burger/02-steakhouse-burger.png`

```
Create a professional menu photograph of "Steakhouse Burger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Beef burger on a glossy brioche bun, layers from bottom to top: bottom bun with red-brown steakhouse sauce, green leaf lettuce and red lollo rosso, beef patty with melted pale pepper jack cheese, caramelised onions, crispy bacon, top bun.
Image 1 shows the real dish. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
The food lies directly on the board, centred, and fills about 70 percent of the image width.

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

### 11. Cheese Burger

- Image 1: `generieren/eingabe/04-beef-burger__03-cheese-burger.png`
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/04-beef-burger/03-cheese-burger.png`

```
Create a professional menu photograph of "Cheese Burger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Beef burger on a glossy brioche bun, layers from bottom to top: bottom bun with ketchup, green leaf lettuce and red lollo rosso, beef patty with melted cheddar, caramelised onions, a thin layer of mayonnaise, top bun.
Image 1 shows the real dish. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
The food lies directly on the board, centred, and fills about 70 percent of the image width.

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

### 12. Hamburger

- Image 1: `generieren/eingabe/04-beef-burger__04-hamburger.png`
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/04-beef-burger/04-hamburger.png`

```
Create a professional menu photograph of "Hamburger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Beef burger on a glossy brioche bun, layers from bottom to top: bottom bun with ketchup, green leaf lettuce and red lollo rosso, beef patty, caramelised onions, a thin layer of mayonnaise, top bun.
Image 1 shows the real dish. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
The food lies directly on the board, centred, and fills about 70 percent of the image width.

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

### 13. Chicken Wrap Chickago-Boys

- Image 1: `generieren/eingabe/07-wraps__01-chicken-wrap-chickago-boys.png`
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/07-wraps/01-chicken-wrap-chickago-boys.png`

```
Create a professional menu photograph of "Chicken Wrap Chickago-Boys" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A grilled wheat tortilla wrap with light grill marks, cut diagonally into two halves, one half leaning against the other so the filling shows: two crispy breaded chicken filets, green lettuce and a creamy house sauce.
Image 1 shows the real dish. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. Image 1 also shows chopped parsley scattered on the board; it is not part of this dish and stays out of the picture. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
The food lies directly on the board, centred, and fills about 70 percent of the image width.

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

### 14. Jalapeños Chili Cheese Fries

- Image 1: `generieren/eingabe/10-beilagen__01-jalapenos-chili-cheese-fries.png`
- Image 2: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/10-beilagen/01-jalapenos-chili-cheese-fries.png`

```
Create a professional menu photograph of "Jalapeño Chili Cheese Fries" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Golden, crispy straight-cut French fries, covered with drizzled lines of a thick, glossy orange chili cheese sauce and topped with many green jalapeño slices.
Image 1 shows the real dish. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
The food sits in one square stoneware baking dish with low straight sides, rounded corners and a small loop handle on the left and right side, exactly like the dish in image 2: glaze pale grey with a faint blue-green tint and fine dark-brown speckles, rim glazed caramel brown. The dish stands centred on the board, handles pointing left and right, and fills about 70 percent of the image width. The food is piled slightly above the rim so that it stays clearly visible.

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

### 15. Cheesy Bacon Fries

- Image 1: `generieren/eingabe/10-beilagen__02-cheesy-bacon-fries.png`
- Image 2: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/10-beilagen/02-cheesy-bacon-fries.png`

```
Create a professional menu photograph of "Cheesy Bacon Fries" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Golden, crispy straight-cut French fries, covered with a thick, glossy yellow cheese sauce and topped with pieces of crispy bacon.
Image 1 shows the real dish. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
The food sits in one square stoneware baking dish with low straight sides, rounded corners and a small loop handle on the left and right side, exactly like the dish in image 2: glaze pale grey with a faint blue-green tint and fine dark-brown speckles, rim glazed caramel brown. The dish stands centred on the board, handles pointing left and right, and fills about 70 percent of the image width. The food is piled slightly above the rim so that it stays clearly visible.

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

## Ohne eigenes Foto, nach Beschreibung

### 16. Pommes frites

- Image 1: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/10-beilagen/03-pommes-frites.png`

```
Create a professional menu photograph of "French Fries" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A generous portion of golden, crispy straight-cut French fries, lightly salted.
Build the food strictly from the description: every listed component is clearly visible, and nothing else appears.

SERVING
The food sits in one square stoneware baking dish with low straight sides, rounded corners and a small loop handle on the left and right side, exactly like the dish in image 1: glaze pale grey with a faint blue-green tint and fine dark-brown speckles, rim glazed caramel brown. The dish stands centred on the board, handles pointing left and right, and fills about 70 percent of the image width. The food is piled slightly above the rim so that it stays clearly visible.

STYLE
Image 1 shows the empty set of this shoot, with no food in it. Match its board, backdrop, light, colour and camera angle exactly.
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

### 17. Süßkartoffel-Pommes

- Image 1: `bearbeitet/10-beilagen/03-pommes-frites.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/10-beilagen/04-suesskartoffel-pommes.png`

```
Create a professional menu photograph of "Sweet Potato Fries" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A generous portion of crispy, deep orange sweet potato fries, lightly salted.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The food sits in one square stoneware baking dish with low straight sides, rounded corners and a small loop handle on the left and right side, exactly like the dish in image 2: glaze pale grey with a faint blue-green tint and fine dark-brown speckles, rim glazed caramel brown. The dish stands centred on the board, handles pointing left and right, and fills about 70 percent of the image width. The food is piled slightly above the rim so that it stays clearly visible.

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

### 18. Onion Rings

- Image 1: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/10-beilagen/05-onion-rings.png`

```
Create a professional menu photograph of "Onion Rings" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 6 golden, crispy breaded onion rings.
Build the food strictly from the description: every listed component is clearly visible, and nothing else appears.

SERVING
The food lies directly on the board, centred, and fills about 70 percent of the image width.

STYLE
Image 1 shows the empty set of this shoot, with no food in it. Match its board, backdrop, light, colour and camera angle exactly.
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

### 19. Mozzarella Sticks

- Image 1: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/10-beilagen/06-mozzarella-sticks.png`

```
Create a professional menu photograph of "Mozzarella Sticks" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 6 golden, crispy breaded mozzarella sticks.
Build the food strictly from the description: every listed component is clearly visible, and nothing else appears.

SERVING
The food lies directly on the board, centred, and fills about 70 percent of the image width.

STYLE
Image 1 shows the empty set of this shoot, with no food in it. Match its board, backdrop, light, colour and camera angle exactly.
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

### 20. Krautsalat

- Image 1: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/10-beilagen/07-krautsalat.png`

```
Create a professional menu photograph of "Coleslaw" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Creamy coleslaw made from finely shredded white and red cabbage.
Build the food strictly from the description: every listed component is clearly visible, and nothing else appears.

SERVING
The coleslaw is served in one small round stoneware bowl without handles, in the same glaze as the dish in image 1 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), centred on the board and filling about 50 percent of the image width.

STYLE
Image 1 shows the empty set of this shoot, with no food in it. Match its board, backdrop, light, colour and camera angle exactly.
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

### 21. Ranch

- Image 1: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/11-saucen-dips/01-ranch.png`
- Hinweis: Erster Dip: wird zur Vorlage für alle weiteren Dips.

```
Create a professional menu photograph of "Ranch Dip" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A creamy, pale off-white ranch dressing with fine green herb flecks.
Build the food strictly from the description: every listed component is clearly visible, and nothing else appears.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 1 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the board and fills about 40 percent of the image width.

STYLE
Image 1 shows the empty set of this shoot, with no food in it. Match its board, backdrop, light, colour and camera angle exactly.
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

### 22. Curry Mango

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/11-saucen-dips/02-curry-mango.png`

```
Create a professional menu photograph of "Curry Mango Sauce" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A smooth, glossy golden-yellow curry mango sauce.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the board and fills about 40 percent of the image width.

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

### 23. Barbecuesauce

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/11-saucen-dips/03-barbecuesauce.png`

```
Create a professional menu photograph of "Barbecue Sauce" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A smooth, glossy, deep reddish-brown barbecue sauce.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the board and fills about 40 percent of the image width.

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

### 24. Sweet-Chilisauce

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/11-saucen-dips/04-sweet-chilisauce.png`

```
Create a professional menu photograph of "Sweet Chili Sauce" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A glossy, translucent light orange sweet chili sauce with small red chili flecks.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the board and fills about 40 percent of the image width.

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

### 25. Cheddarsauce

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/11-saucen-dips/05-cheddarsauce.png`

```
Create a professional menu photograph of "Cheddar Cheese Sauce" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A smooth, creamy, bright yellow-orange cheddar cheese sauce.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the board and fills about 40 percent of the image width.

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

### 26. Chili-Cheesesauce

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/11-saucen-dips/06-chili-cheesesauce.png`

```
Create a professional menu photograph of "Chili Cheese Sauce" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A smooth, creamy orange cheese sauce with small flecks of red and green chili.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the board and fills about 40 percent of the image width.

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

### 27. Süß-Sauer-Sauce

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/11-saucen-dips/07-suess-sauer-sauce.png`

```
Create a professional menu photograph of "Sweet and Sour Sauce" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A glossy, translucent orange-red sweet and sour sauce.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the board and fills about 40 percent of the image width.

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

### 28. Caesar Dressing

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/11-saucen-dips/08-caesar-dressing.png`

```
Create a professional menu photograph of "Caesar Dressing" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A creamy, pale ivory Caesar dressing with fine flecks of grated hard cheese.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the board and fills about 40 percent of the image width.

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

### 29. Balsamico Dressing

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/11-saucen-dips/09-balsamico-dressing.png`

```
Create a professional menu photograph of "Balsamic Dressing" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A dark brown balsamic vinaigrette with glossy droplets of olive oil on the surface.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the board and fills about 40 percent of the image width.

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

### 30. Ketchup

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/11-saucen-dips/10-ketchup.png`

```
Create a professional menu photograph of "Ketchup" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Smooth, glossy, bright red tomato ketchup.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the board and fills about 40 percent of the image width.

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

### 31. Mayonnaise

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/11-saucen-dips/11-mayonnaise.png`

```
Create a professional menu photograph of "Mayonnaise" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Smooth, glossy, creamy white mayonnaise.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the board and fills about 40 percent of the image width.

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

### 32. New York Cheesecake

- Image 1: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/14-dessert/01-new-york-cheesecake.png`

```
Create a professional menu photograph of "New York Cheesecake" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
One slice of classic New York cheesecake with a smooth, creamy pale-ivory filling, a lightly golden top and a thin golden-brown biscuit base.
Build the food strictly from the description: every listed component is clearly visible, and nothing else appears.

SERVING
One slice lies directly on the board, its tip pointing to the front left so that the creamy cut face and the base are visible; it fills about 50 percent of the image width. Topping only if the description names it.

STYLE
Image 1 shows the empty set of this shoot, with no food in it. Match its board, backdrop, light, colour and camera angle exactly.
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

## Getränke mit Herstellerbild

Erst `bilder-holen.sh` ausführen, damit die Herstellerbilder im Ordner `speisekarte/12-getraenke/` liegen. Coca-Cola zuerst, das Bild braucht später der Bucket.

### 33. Coca-Cola · 1,0 l

- Image 1: `speisekarte/12-getraenke/03-coca-cola.jpg` (kommt mit `bilder-holen.sh`)
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/12-getraenke/03-coca-cola.png`

```
Create a professional menu photograph of "Coca-Cola 1.0 litre" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

DRINK
Image 1 shows the real bottle. Recreate it exactly: shape, size, cap, liquid colour and the complete label, letter for letter. The label faces the camera and is the only lettering in the picture. The bottle is clean and dry.

SERVING
The bottle stands upright alone in the centre of the board and fills about 75 percent of the image height.

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

Clean scene: only the board, the bottle and the backdrop, free of glasses, ice, straws, props and any lettering other than the original label. Aspect ratio 1:1.
```

### 34. Fanta Orange · 1,0 l

- Image 1: `speisekarte/12-getraenke/05-fanta-orange.jpeg` (kommt mit `bilder-holen.sh`)
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/12-getraenke/05-fanta-orange.png`

```
Create a professional menu photograph of "Fanta Orange 1.0 litre" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

DRINK
Image 1 shows the real bottle. Recreate it exactly: shape, size, cap, liquid colour and the complete label, letter for letter. The label faces the camera and is the only lettering in the picture. The bottle is clean and dry.

SERVING
The bottle stands upright alone in the centre of the board and fills about 75 percent of the image height.

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

Clean scene: only the board, the bottle and the backdrop, free of glasses, ice, straws, props and any lettering other than the original label. Aspect ratio 1:1.
```

### 35. Mezzo Mix · 1,0 l

- Image 1: `speisekarte/12-getraenke/06-mezzo-mix.jpeg` (kommt mit `bilder-holen.sh`)
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/12-getraenke/06-mezzo-mix.png`

```
Create a professional menu photograph of "Mezzo Mix 1.0 litre" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

DRINK
Image 1 shows the real bottle. Recreate it exactly: shape, size, cap, liquid colour and the complete label, letter for letter. The label faces the camera and is the only lettering in the picture. The bottle is clean and dry.

SERVING
The bottle stands upright alone in the centre of the board and fills about 75 percent of the image height.

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

Clean scene: only the board, the bottle and the backdrop, free of glasses, ice, straws, props and any lettering other than the original label. Aspect ratio 1:1.
```

### 36. Sprite · 1,0 l

- Image 1: `speisekarte/12-getraenke/07-sprite.jpg` (kommt mit `bilder-holen.sh`)
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/12-getraenke/07-sprite.png`

```
Create a professional menu photograph of "Sprite 1.0 litre" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

DRINK
Image 1 shows the real bottle. Recreate it exactly: shape, size, cap, liquid colour and the complete label, letter for letter. The label faces the camera and is the only lettering in the picture. The bottle is clean and dry.

SERVING
The bottle stands upright alone in the centre of the board and fills about 75 percent of the image height.

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

Clean scene: only the board, the bottle and the backdrop, free of glasses, ice, straws, props and any lettering other than the original label. Aspect ratio 1:1.
```

### 37. Red Bull · 0,25 l

- Image 1: `speisekarte/12-getraenke/08-red-bull.jpg` (kommt mit `bilder-holen.sh`)
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/12-getraenke/08-red-bull.png`

```
Create a professional menu photograph of "Red Bull 0.25 litre" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

DRINK
Image 1 shows the real can. Recreate it exactly: shape, size, cap, liquid colour and the complete label, letter for letter. The label faces the camera and is the only lettering in the picture. The can is clean and dry.

SERVING
The can stands upright alone in the centre of the board and fills about 75 percent of the image height.

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

Clean scene: only the board, the can and the backdrop, free of glasses, ice, straws, props and any lettering other than the original label. Aspect ratio 1:1.
```

## Aus freigegebenen Bildern der Serie

Diese Gerichte bauen auf schon freigegebenen Bildern auf. Erst generieren, wenn die genannten Bilder fertig sind.

### 38. Buffalo Red Hot Tenders · 5 Stück

- Image 1: `bearbeitet/01-chicken/06-crispy-chicken-tenders-5-stueck.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/01-chicken/08-buffalo-red-hot-tenders.png`
- Hinweis: Form der Tenders aus dem freigegebenen Tenders-Bild, Sauce wie bei den Wings.

```
Create a professional menu photograph of "Buffalo Red Hot Tenders, 5 pieces" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 5 long crispy chicken tenders (breaded chicken breast strips), coated in an opaque, bright red-orange buffalo sauce that clings to the craggy crust.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The food sits in one square stoneware baking dish with low straight sides, rounded corners and a small loop handle on the left and right side, exactly like the dish in image 2: glaze pale grey with a faint blue-green tint and fine dark-brown speckles, rim glazed caramel brown. The dish stands centred on the board, handles pointing left and right, and fills about 70 percent of the image width. The food is piled slightly above the rim so that it stays clearly visible.

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

### 39. Chipotle Honey BBQ Tenders · 5 Stück

- Image 1: `bearbeitet/01-chicken/06-crispy-chicken-tenders-5-stueck.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/01-chicken/09-chipotle-honey-bbq-tenders.png`
- Hinweis: Form der Tenders aus dem freigegebenen Tenders-Bild, Sauce wie bei den Wings.

```
Create a professional menu photograph of "Chipotle Honey BBQ Tenders, 5 pieces" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 5 long crispy chicken tenders (breaded chicken breast strips), glazed in a thick, glossy, deep reddish-brown chipotle honey BBQ sauce.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The food sits in one square stoneware baking dish with low straight sides, rounded corners and a small loop handle on the left and right side, exactly like the dish in image 2: glaze pale grey with a faint blue-green tint and fine dark-brown speckles, rim glazed caramel brown. The dish stands centred on the board, handles pointing left and right, and fills about 70 percent of the image width. The food is piled slightly above the rim so that it stays clearly visible.

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

### 40. Teriyaki Tenders · 5 Stück

- Image 1: `bearbeitet/01-chicken/06-crispy-chicken-tenders-5-stueck.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/01-chicken/10-teriyaki-tenders.png`
- Hinweis: Form der Tenders aus dem freigegebenen Tenders-Bild, Sauce wie bei den Wings.

```
Create a professional menu photograph of "Teriyaki Tenders, 5 pieces" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 5 long crispy chicken tenders (breaded chicken breast strips), glazed in a glossy, very dark chestnut-brown teriyaki sauce with reddish highlights.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The food sits in one square stoneware baking dish with low straight sides, rounded corners and a small loop handle on the left and right side, exactly like the dish in image 2: glaze pale grey with a faint blue-green tint and fine dark-brown speckles, rim glazed caramel brown. The dish stands centred on the board, handles pointing left and right, and fills about 70 percent of the image width. The food is piled slightly above the rim so that it stays clearly visible.

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

### 41. Menü Crispy-Chicken Tenders · 5 Stück

- Image 1: `bearbeitet/01-chicken/06-crispy-chicken-tenders-5-stueck.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/06-menues/01-menue-crispy-chicken-tenders-5-stueck.png`

```
Create a professional menu photograph of "Crispy Chicken Tenders Meal, 5 pieces" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 5 long crispy chicken tenders (breaded chicken breast strips) with a craggy, golden-brown coating, without sauce; one portion of golden, crispy straight-cut French fries; one portion of creamy coleslaw made from finely shredded white and red cabbage.
Image 1 shows the real chicken of this meal. Recreate the chicken exactly as it looks there: the shape and cut of every piece, crust texture and colour. Build the fries and the coleslaw from the description. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
This is a meal deal: all parts named in the description, on the same board. The chicken lies directly on the board in the front centre. Behind it on the left stand the fries in a small square stoneware baking dish with low sides and two loop handles; behind it on the right the coleslaw in a small round stoneware bowl. Both share one glaze: pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim. Every part is fully visible, the parts overlap slightly, and the whole group fills about 85 percent of the image width.

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

### 42. Menü Crispy-Chicken Tenders · 10 Stück

- Image 1: `bearbeitet/01-chicken/06-crispy-chicken-tenders-5-stueck.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/06-menues/02-menue-crispy-chicken-tenders-10-stueck.png`

```
Create a professional menu photograph of "Crispy Chicken Tenders Meal, 10 pieces" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 10 long crispy chicken tenders (breaded chicken breast strips) with a craggy, golden-brown coating, without sauce; one portion of golden, crispy straight-cut French fries; one portion of creamy coleslaw made from finely shredded white and red cabbage.
Image 1 shows the real chicken of this meal. Recreate the chicken exactly as it looks there: the shape and cut of every piece, crust texture and colour. Build the fries and the coleslaw from the description. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
This is a meal deal: all parts named in the description, on the same board. The chicken lies directly on the board in the front centre. Behind it on the left stand the fries in a small square stoneware baking dish with low sides and two loop handles; behind it on the right the coleslaw in a small round stoneware bowl. Both share one glaze: pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim. Every part is fully visible, the parts overlap slightly, and the whole group fills about 85 percent of the image width.

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

### 43. Menü Chicken Wings · 6 Stück

- Image 1: `bearbeitet/01-chicken/01-chicken-wings.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/06-menues/03-menue-chicken-wings-6-stueck.png`

```
Create a professional menu photograph of "Chicken Wings Meal, 6 pieces" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 6 plain chicken wings without any sauce, with a craggy, golden-brown crispy coating; one portion of golden, crispy straight-cut French fries; one portion of creamy coleslaw made from finely shredded white and red cabbage.
Image 1 shows the real chicken of this meal. Recreate the chicken exactly as it looks there: the shape and cut of every piece, crust texture and colour. Build the fries and the coleslaw from the description. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
This is a meal deal: all parts named in the description, on the same board. The chicken lies directly on the board in the front centre. Behind it on the left stand the fries in a small square stoneware baking dish with low sides and two loop handles; behind it on the right the coleslaw in a small round stoneware bowl. Both share one glaze: pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim. Every part is fully visible, the parts overlap slightly, and the whole group fills about 85 percent of the image width.

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

### 44. Menü Chicken Wings · 10 Stück

- Image 1: `bearbeitet/01-chicken/01-chicken-wings.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/06-menues/04-menue-chicken-wings-10-stueck.png`

```
Create a professional menu photograph of "Chicken Wings Meal, 10 pieces" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 10 plain chicken wings without any sauce, with a craggy, golden-brown crispy coating; one portion of golden, crispy straight-cut French fries; one portion of creamy coleslaw made from finely shredded white and red cabbage.
Image 1 shows the real chicken of this meal. Recreate the chicken exactly as it looks there: the shape and cut of every piece, crust texture and colour. Build the fries and the coleslaw from the description. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
This is a meal deal: all parts named in the description, on the same board. The chicken lies directly on the board in the front centre. Behind it on the left stand the fries in a small square stoneware baking dish with low sides and two loop handles; behind it on the right the coleslaw in a small round stoneware bowl. Both share one glaze: pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim. Every part is fully visible, the parts overlap slightly, and the whole group fills about 85 percent of the image width.

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

### 45. Bucket

- Image 1: `bearbeitet/01-chicken/01-chicken-wings.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Image 3: `bearbeitet/12-getraenke/03-coca-cola.png` (freigegeben)
- Speichern als: `bearbeitet/02-buckets/01-bucket.png`
- Hinweis: Image 3 = freigegebenes Coca-Cola-Bild.

```
Create a professional menu photograph of "Bucket" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A generous heap of plain chicken wings and long crispy chicken tenders (breaded chicken breast strips) with a craggy, golden-brown coating, all without sauce; exactly 2 portions of golden, crispy straight-cut French fries; exactly 1 portion of creamy coleslaw made from finely shredded white and red cabbage; one 1-litre Coca-Cola bottle.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
This is a sharing bucket: all parts named in the description, on the same board. A generous heap of chicken lies directly on the board in the front centre. Behind it stand the fries, one portion per small square stoneware baking dish with low sides and two loop handles, and, if the description lists it, the coleslaw in a small round stoneware bowl; all stoneware has one glaze: pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim. At the back right stands the drink bottle from image 3, upright, label facing the camera, exactly as in image 3, letter for letter; its label is the only lettering in the picture, and nothing else is taken from image 3. Every part is visible, and the whole group fills about 90 percent of the image width.

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

### 46. Party Bucket

- Image 1: `bearbeitet/01-chicken/01-chicken-wings.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Image 3: `bearbeitet/12-getraenke/03-coca-cola.png` (freigegeben)
- Speichern als: `bearbeitet/02-buckets/02-party-bucket.png`
- Hinweis: Image 3 = freigegebenes Coca-Cola-Bild. Kein Coleslaw (laut Karte).

```
Create a professional menu photograph of "Party Bucket" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A large, generous heap of plain chicken wings and long crispy chicken tenders (breaded chicken breast strips) with a craggy, golden-brown coating, all without sauce; exactly 4 portions of golden, crispy straight-cut French fries; one 1-litre Coca-Cola bottle.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
This is a sharing bucket: all parts named in the description, on the same board. A generous heap of chicken lies directly on the board in the front centre. Behind it stand the fries, one portion per small square stoneware baking dish with low sides and two loop handles, and, if the description lists it, the coleslaw in a small round stoneware bowl; all stoneware has one glaze: pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim. At the back right stands the drink bottle from image 3, upright, label facing the camera, exactly as in image 3, letter for letter; its label is the only lettering in the picture, and nothing else is taken from image 3. Every part is visible, and the whole group fills about 90 percent of the image width.

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

## Notlösung, besser mit Kundenfoto

Für diese Gerichte gibt es kein echtes Foto. Der Prompt baut sie aus einem ähnlichen freigegebenen Bild der Serie und der Kartenbeschreibung. Das Ergebnis ist plausibel, zeigt aber nicht sicher das echte Gericht. Besser: Kundenfoto abwarten. Kommt eins, Image 1 durch das Kundenfoto ersetzen und im FOOD-Absatz den Text ab „Image 1 is only a generic reference“ durch den Standardtext aus Abschnitt 5 des Leitfadens ersetzen.

### 47. Teriyaki Chicken Burger

- Image 1: `bearbeitet/03-chicken-burger/01-chicken-home-style-honey-mustard-bacon.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/03-chicken-burger/02-teriyaki-chicken-burger.png`

```
Create a professional menu photograph of "Teriyaki Chicken Burger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Chicken burger on a glossy brioche bun, layers from bottom to top: bottom bun, green leaf lettuce, tomato slice, crispy breaded chicken patty with a craggy golden coating glazed in a glossy, very dark chestnut-brown teriyaki sauce with reddish highlights, melted cheddar, top bun.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The food lies directly on the board, centred, and fills about 70 percent of the image width.

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

### 48. Chicken Burger BBQ

- Image 1: `bearbeitet/03-chicken-burger/01-chicken-home-style-honey-mustard-bacon.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/03-chicken-burger/03-chicken-burger-bbq.png`

```
Create a professional menu photograph of "Chicken Burger BBQ" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Chicken burger on a glossy brioche bun, layers from bottom to top: bottom bun, green leaf lettuce, tomato slice, crispy breaded chicken patty with a craggy golden coating, melted cheddar, a generous layer of glossy, deep reddish-brown barbecue sauce, top bun.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The food lies directly on the board, centred, and fills about 70 percent of the image width.

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

### 49. Chicken Burger

- Image 1: `bearbeitet/03-chicken-burger/01-chicken-home-style-honey-mustard-bacon.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/03-chicken-burger/04-chicken-burger.png`

```
Create a professional menu photograph of "Chicken Burger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Chicken burger on a glossy brioche bun, layers from bottom to top: bottom bun, green leaf lettuce, tomato slice, crispy breaded chicken patty with a craggy golden coating, melted cheddar, a creamy house sauce, top bun.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The food lies directly on the board, centred, and fills about 70 percent of the image width.

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

### 50. Teriyaki Burger

- Image 1: `bearbeitet/04-beef-burger/02-steakhouse-burger.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/04-beef-burger/05-teriyaki-burger.png`

```
Create a professional menu photograph of "Teriyaki Burger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Beef burger on a glossy brioche bun, layers from bottom to top: bottom bun, green leaf lettuce and red lollo rosso, beef patty with melted pale pepper jack cheese, caramelised onions, crispy bacon, glossy, very dark chestnut-brown teriyaki sauce with reddish highlights, top bun.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The food lies directly on the board, centred, and fills about 70 percent of the image width.

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

### 51. Mexico Burger

- Image 1: `bearbeitet/04-beef-burger/03-cheese-burger.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/04-beef-burger/06-mexico-burger.png`

```
Create a professional menu photograph of "Mexico Burger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Beef burger on a glossy brioche bun, layers from bottom to top: bottom bun, green leaf lettuce and red lollo rosso, beef patty with melted pale pepper jack cheese, green jalapeño slices, a creamy pale-green avocado sauce, top bun.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The food lies directly on the board, centred, and fills about 70 percent of the image width.

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

### 52. Mushroom Burger

- Image 1: `bearbeitet/04-beef-burger/03-cheese-burger.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/04-beef-burger/07-mushroom-burger.png`

```
Create a professional menu photograph of "Mushroom Burger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Beef burger on a glossy brioche bun, layers from bottom to top: bottom bun, green leaf lettuce and red lollo rosso, beef patty with melted cheddar, caramelised onions, sautéed sliced button mushrooms, a creamy house sauce, top bun.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The food lies directly on the board, centred, and fills about 70 percent of the image width.

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

### 53. Chili Cheese Burger

- Image 1: `bearbeitet/04-beef-burger/03-cheese-burger.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/04-beef-burger/08-chili-cheese-burger.png`

```
Create a professional menu photograph of "Chili Cheese Burger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Beef burger on a glossy brioche bun, layers from bottom to top: bottom bun, green leaf lettuce and red lollo rosso, beef patty with melted cheddar, green jalapeño slices, a thick orange chili cheese sauce, top bun.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The food lies directly on the board, centred, and fills about 70 percent of the image width.

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

### 54. Veggie Burger

- Image 1: `bearbeitet/04-beef-burger/04-hamburger.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/04-beef-burger/09-veggie-burger.png`

```
Create a professional menu photograph of "Veggie Burger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Vegetarian burger on a glossy brioche bun, layers from bottom to top: bottom bun, green leaf lettuce and red lollo rosso, tomato slice, a golden-brown vegetarian patty, a creamy house sauce, top bun.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The food lies directly on the board, centred, and fills about 70 percent of the image width.

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

### 55. Caesar Wrap

- Image 1: `bearbeitet/07-wraps/01-chicken-wrap-chickago-boys.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/07-wraps/02-caesar-wrap.png`

```
Create a professional menu photograph of "Caesar Wrap" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A grilled wheat tortilla wrap with light grill marks, cut diagonally into two halves, one half leaning against the other so the filling shows: a crispy breaded chicken filet, shaved hard cheese, croutons, tomato, green lettuce and a creamy pale Caesar dressing.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The food lies directly on the board, centred, and fills about 70 percent of the image width.

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

### 56. Supreme Wrap

- Image 1: `bearbeitet/07-wraps/01-chicken-wrap-chickago-boys.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-a-brett.png`
- Speichern als: `bearbeitet/07-wraps/03-supreme-wrap.png`

```
Create a professional menu photograph of "Supreme Wrap" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A soft wheat tortilla wrap, served cold, cut diagonally into two halves, one half leaning against the other so the filling shows: seasoned taco ground beef, diced tomato, green lettuce, grated gouda, fresh coriander leaves, green guacamole and white sour cream.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The food lies directly on the board, centred, and fills about 70 percent of the image width.

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

### 57. Caesar Chicken Salat

- Image 1: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/09-salate/01-caesar-chicken-salat.png`

```
Create a professional menu photograph of "Caesar Chicken Salad" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Crisp green lettuce with tomato wedges, cucumber slices and croutons, topped with slices of grilled chicken breast and shaved hard cheese, with a creamy pale Caesar dressing drizzled over the top.
Build the food strictly from the description: every listed component is clearly visible, and nothing else appears.

SERVING
The salad is served in one deep round stoneware bowl without handles, in the same glaze as the dish in image 1 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim). The bowl stands centred on the board and fills about 70 percent of the image width. Fresh, crisp leaves; every component clearly recognisable; dressing only if the description names it.

STYLE
Image 1 shows the empty set of this shoot, with no food in it. Match its board, backdrop, light, colour and camera angle exactly.
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

### 58. Fitness Salat

- Image 1: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/09-salate/02-fitness-salat.png`

```
Create a professional menu photograph of "Fitness Salad" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Mixed green leaf salad with tomato wedges, cucumber slices, sweetcorn, black olives and croutons, topped with slices of grilled chicken breast.
Build the food strictly from the description: every listed component is clearly visible, and nothing else appears.

SERVING
The salad is served in one deep round stoneware bowl without handles, in the same glaze as the dish in image 1 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim). The bowl stands centred on the board and fills about 70 percent of the image width. Fresh, crisp leaves; every component clearly recognisable; dressing only if the description names it.

STYLE
Image 1 shows the empty set of this shoot, with no food in it. Match its board, backdrop, light, colour and camera angle exactly.
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

### 59. Gemischter Salat

- Image 1: `bearbeitet/_anker/anker-b-schale.png`
- Speichern als: `bearbeitet/09-salate/03-gemischter-salat.png`

```
Create a professional menu photograph of "Mixed Salad" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Mixed green leaf salad with tomato wedges, cucumber slices, sweetcorn and croutons.
Build the food strictly from the description: every listed component is clearly visible, and nothing else appears.

SERVING
The salad is served in one deep round stoneware bowl without handles, in the same glaze as the dish in image 1 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim). The bowl stands centred on the board and fills about 70 percent of the image width. Fresh, crisp leaves; every component clearly recognisable; dressing only if the description names it.

STYLE
Image 1 shows the empty set of this shoot, with no food in it. Match its board, backdrop, light, colour and camera angle exactly.
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

## Freisteller für die Speisekarte

Für jedes fertige Gericht einen neuen Chat öffnen, **nur das fertige Brett-Foto** hochladen und diesen Prompt nehmen. `[DISH NAME]` durch den Namen aus dem Gericht-Prompt ersetzen (er steht dort in Anführungszeichen):

```
Using the provided photo of "[DISH NAME]", keep the food exactly the same (same pieces, shape, colours, light, camera angle and size in the frame), together with its stoneware if there is any. Change only the surroundings: replace the wooden board and the studio backdrop with one flat, uniform, saturated chroma-key blue (#0047BB) that fills the entire frame from edge to edge. The blue is evenly lit, without shadow, gradient, texture or reflections; the underside of the food meets it with a crisp edge. The food keeps its neutral studio light: highlights stay white and every colour stays exactly as in the provided photo, with no blue tint or blue reflection on the food. The whole dish is in frame with at least 10 percent clear blue on every side. Aspect ratio 1:1.
```

Danach:
1. Das Blau im Bildprogramm entfernen, z. B. in Photoshop über „Auswahl > Farbbereich“.
2. Als `bearbeitet/<kategorie>/cut-<name>.png` mit Transparenz speichern.

Bei **Red Bull** (blaue Dose) statt `#0047BB` Magenta `#FF00FF` nehmen.

## Korrektursätze (im selben Chat)

| Problem | Nachsatz |
|---|---|
| Erfundene Zutat, Beilage oder Dip aus Image 1 | `Keep everything the same, but remove the [item]; it is not part of this dish. The dish contains only: [list].` |
| Falsche Sauce oder Farbe | `Keep everything the same, but make the sauce [Formulierung aus der Saucen-Tabelle], as in image 1.` |
| Stückzahl stimmt nicht | `Keep everything the same, but show exactly [n] pieces, each clearly separate.` |
| Winkel, Größe oder Brett weichen ab | `Keep the food exactly the same, but match the board, backdrop and camera angle of image 2 exactly, with the camera 30 degrees above the board, and make the dish fill about [70] percent of the image width.` |
| Hintergrund grau, fleckig, verlaufend oder farbig | `Keep everything the same, but make the backdrop the same smooth, even light grey as image 2.` |
| Wirkt wie CGI | `Keep everything the same, but make it look like an unretouched studio photograph of real food with natural texture.` |
| Text oder Logo im Bild | `Keep everything the same, but remove all text and logos.` |
| Etikett falsch (Getränke, Bucket) | `Keep everything the same, but make the label exactly as in image [1/3], letter for letter.` Hilft das nicht, die Umgebungs-Variante aus Abschnitt 7 des Leitfadens (`nano-banana-prompt.md`) nehmen. |

## Noch nicht generieren (11)

| Position | Was fehlt |
|---|---|
| Coca-Cola Zero · 1,0 l | Foto einer einzelnen Flasche, z. B. ein Handyfoto. Lieferando zeigt nur ein 12er-Gebinde. |
| Corona Extra · 0,33 l | Foto einer Flasche |
| Home Made Peach Iced Tea · 1,0 l | Foto des Gefäßes, in dem das Restaurant den Eistee ausgibt |
| Home Made Lemon Iced Tea · 1,0 l | wie Peach |
| Chickago Boys Soße | Foto oder Beschreibung (Farbe, Konsistenz) |
| Tacos | Name auf der Karte, Anzahl und Preis. Ein echtes Foto gibt es auf Instagram. |
| Ribs | Foto und Beschreibung (Sorte, Beilage, Preis) |
| Steaks | Foto und Beschreibung |
| Karlsberg Bier · 0,5 l | Foto des Glases |
| Cocktails | Welche Cocktails, Fotos |
| Frühstücksbuffet | Gibt es das noch? Ein Buffet ist kein Einzelgericht, dafür besser ein echtes Foto vom Restaurant. |
