# Gemini-Prompts: Runde 3

Stand: 02.10.2026 · 54 von 59 Gerichten sind fertig. Hier stehen die letzten 5 Prompts, dazu Coca-Cola Zero und die Liste, was für den Rest noch fehlt. Pfade relativ zu `bilder-upscale/`.

## So gehst du vor

1. Neuen Chat in Gemini öffnen.
2. Bilder in der angegebenen Reihenfolge hochladen.
3. Prompt komplett einfügen und senden.
4. Prüfen: Hintergrund weiß, Schatten weich und grau, Zutaten wie beschrieben. Bei Abweichung einen Korrektursatz (unten) im selben Chat nachschieben.
5. Unter dem angegebenen Namen speichern, Gemini-Funkeln unten rechts weiß übermalen.
6. Hochladen wie bisher. Zuordnen, Freistellen und Einbau mache ich.

**Hinweis:** Für Wraps und Salate gibt es kein echtes Foto. Die Bilder werden plausibel, zeigen aber nicht sicher das echte Gericht. Hast du ein Handyfoto vom Restaurant, nimm es als Image 1 und ersetze im FOOD-Absatz den Satz ab „Image 1 is only a generic reference“ bzw. „Build the food strictly“ durch: `Image 1 shows the real dish; take only the food from it, not its plate or background. Recreate its food exactly as it looks there.`

## Notlösung, besser mit Kundenfoto

### 1. Caesar Wrap

- Image 1: `bearbeitet/07-wraps/01-chicken-wrap-chickago-boys.jpg` (fertig)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.jpg` (fertig)
- Speichern als: `bearbeitet/07-wraps/02-caesar-wrap.jpg`

```
Create a professional menu photograph of "Caesar Wrap" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A grilled wheat tortilla wrap with light grill marks, cut diagonally into two halves, one half leaning against the other so the filling shows: a crispy breaded chicken filet, shaved hard cheese, croutons, tomato, green lettuce and a creamy pale Caesar dressing.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The food stands directly on the white surface, centred, and fills about 70 percent of the image width.

STYLE
Image 2 is an approved photo from the same shoot. Match its pure white background, light, shadow, colour and camera angle exactly, and take no food from it.
- Surface and background: the food stands on a seamless, pure white surface that continues without any edge, fold or horizon line into a pure white background. The white is clean, evenly lit pure white (#FFFFFF) everywhere, including all four corners, with no grey tint, gradient, vignette, texture or reflection.
- Shadow: exactly one soft, neutral grey contact shadow directly beneath the food, extending slightly towards the back right. It is darkest where the food touches the surface (a medium grey, about #8A8A8A) and fades smoothly into pure white within a short distance. The shadow is clearly visible but never coloured, and there are no other shadows.
- Camera: straight-on front view, camera raised 30 degrees above the surface (0 degrees would be eye level, 90 degrees straight down), 85 mm full-frame lens look, natural perspective, level horizon.
- Framing: the whole dish in frame, centred left to right with equal space on both sides, sitting slightly below the image centre, with at least 12 percent pure white margin on every side; size exactly as stated under SERVING.
- Light: large soft diffused key light from the front left, gentle fill from the right, clean soft highlights on the food.
- Colour: neutral daylight white balance, true-to-life appetising food colours, rich but natural saturation. White and cream parts of the food (sauces, egg white, cabbage, cheese, tortilla) are a slightly warm off-white, never pure #FFFFFF, so they never merge with the background.
- Focus: the entire dish tack-sharp from front to back (f/8 look), crisp texture of crust, sauce, cheese and bun.
- Realism: ultra-realistic, unretouched studio photograph of real, freshly prepared food at its real portion size.

Clean, unbranded product shot: only what FOOD and SERVING name, its contact shadow and the pure white background; free of text, logos, boards, plates, props, cutlery, napkins and scattered garnish, except an original drink label named under SERVING. Aspect ratio 1:1.
```

### 2. Supreme Wrap

- Image 1: `bearbeitet/07-wraps/01-chicken-wrap-chickago-boys.jpg` (fertig)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.jpg` (fertig)
- Speichern als: `bearbeitet/07-wraps/03-supreme-wrap.jpg`

```
Create a professional menu photograph of "Supreme Wrap" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A soft wheat tortilla wrap, served cold, cut diagonally into two halves, one half leaning against the other so the filling shows: seasoned taco ground beef, diced tomato, green lettuce, grated gouda, fresh coriander leaves, green guacamole and white sour cream.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The food stands directly on the white surface, centred, and fills about 70 percent of the image width.

STYLE
Image 2 is an approved photo from the same shoot. Match its pure white background, light, shadow, colour and camera angle exactly, and take no food from it.
- Surface and background: the food stands on a seamless, pure white surface that continues without any edge, fold or horizon line into a pure white background. The white is clean, evenly lit pure white (#FFFFFF) everywhere, including all four corners, with no grey tint, gradient, vignette, texture or reflection.
- Shadow: exactly one soft, neutral grey contact shadow directly beneath the food, extending slightly towards the back right. It is darkest where the food touches the surface (a medium grey, about #8A8A8A) and fades smoothly into pure white within a short distance. The shadow is clearly visible but never coloured, and there are no other shadows.
- Camera: straight-on front view, camera raised 30 degrees above the surface (0 degrees would be eye level, 90 degrees straight down), 85 mm full-frame lens look, natural perspective, level horizon.
- Framing: the whole dish in frame, centred left to right with equal space on both sides, sitting slightly below the image centre, with at least 12 percent pure white margin on every side; size exactly as stated under SERVING.
- Light: large soft diffused key light from the front left, gentle fill from the right, clean soft highlights on the food.
- Colour: neutral daylight white balance, true-to-life appetising food colours, rich but natural saturation. White and cream parts of the food (sauces, egg white, cabbage, cheese, tortilla) are a slightly warm off-white, never pure #FFFFFF, so they never merge with the background.
- Focus: the entire dish tack-sharp from front to back (f/8 look), crisp texture of crust, sauce, cheese and bun.
- Realism: ultra-realistic, unretouched studio photograph of real, freshly prepared food at its real portion size.

Clean, unbranded product shot: only what FOOD and SERVING name, its contact shadow and the pure white background; free of text, logos, boards, plates, props, cutlery, napkins and scattered garnish, except an original drink label named under SERVING. Aspect ratio 1:1.
```

### 3. Caesar Chicken Salat

- Image 1: `bearbeitet/10-beilagen/07-krautsalat.jpg` (fertig)
- Speichern als: `bearbeitet/09-salate/01-caesar-chicken-salat.jpg`

```
Create a professional menu photograph of "Caesar Chicken Salad" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Crisp green lettuce with tomato wedges, cucumber slices and croutons, topped with slices of grilled chicken breast and shaved hard cheese, with a creamy pale Caesar dressing drizzled over the top.
Build the food strictly from the description: every listed component is clearly visible, and nothing else appears.

SERVING
The salad is served in one deep round stoneware bowl without handles, in the same glaze as the dish in image 1 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim). The bowl stands centred on the white surface and fills about 70 percent of the image width. Fresh, crisp leaves; every component clearly recognisable; dressing only if the description names it.

STYLE
Image 1 is an approved photo from the same shoot. Match its pure white background, light, shadow, colour and camera angle exactly, and take no food from it.
- Surface and background: the food stands on a seamless, pure white surface that continues without any edge, fold or horizon line into a pure white background. The white is clean, evenly lit pure white (#FFFFFF) everywhere, including all four corners, with no grey tint, gradient, vignette, texture or reflection.
- Shadow: exactly one soft, neutral grey contact shadow directly beneath the food, extending slightly towards the back right. It is darkest where the food touches the surface (a medium grey, about #8A8A8A) and fades smoothly into pure white within a short distance. The shadow is clearly visible but never coloured, and there are no other shadows.
- Camera: straight-on front view, camera raised 30 degrees above the surface (0 degrees would be eye level, 90 degrees straight down), 85 mm full-frame lens look, natural perspective, level horizon.
- Framing: the whole dish in frame, centred left to right with equal space on both sides, sitting slightly below the image centre, with at least 12 percent pure white margin on every side; size exactly as stated under SERVING.
- Light: large soft diffused key light from the front left, gentle fill from the right, clean soft highlights on the food.
- Colour: neutral daylight white balance, true-to-life appetising food colours, rich but natural saturation. White and cream parts of the food (sauces, egg white, cabbage, cheese, tortilla) are a slightly warm off-white, never pure #FFFFFF, so they never merge with the background.
- Focus: the entire dish tack-sharp from front to back (f/8 look), crisp texture of crust, sauce, cheese and bun.
- Realism: ultra-realistic, unretouched studio photograph of real, freshly prepared food at its real portion size.

Clean, unbranded product shot: only what FOOD and SERVING name, its contact shadow and the pure white background; free of text, logos, boards, plates, props, cutlery, napkins and scattered garnish, except an original drink label named under SERVING. Aspect ratio 1:1.
```

### 4. Fitness Salat

- Image 1: `bearbeitet/10-beilagen/07-krautsalat.jpg` (fertig)
- Speichern als: `bearbeitet/09-salate/02-fitness-salat.jpg`

```
Create a professional menu photograph of "Fitness Salad" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Mixed green leaf salad with tomato wedges, cucumber slices, sweetcorn, black olives and croutons, topped with slices of grilled chicken breast.
Build the food strictly from the description: every listed component is clearly visible, and nothing else appears.

SERVING
The salad is served in one deep round stoneware bowl without handles, in the same glaze as the dish in image 1 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim). The bowl stands centred on the white surface and fills about 70 percent of the image width. Fresh, crisp leaves; every component clearly recognisable; dressing only if the description names it.

STYLE
Image 1 is an approved photo from the same shoot. Match its pure white background, light, shadow, colour and camera angle exactly, and take no food from it.
- Surface and background: the food stands on a seamless, pure white surface that continues without any edge, fold or horizon line into a pure white background. The white is clean, evenly lit pure white (#FFFFFF) everywhere, including all four corners, with no grey tint, gradient, vignette, texture or reflection.
- Shadow: exactly one soft, neutral grey contact shadow directly beneath the food, extending slightly towards the back right. It is darkest where the food touches the surface (a medium grey, about #8A8A8A) and fades smoothly into pure white within a short distance. The shadow is clearly visible but never coloured, and there are no other shadows.
- Camera: straight-on front view, camera raised 30 degrees above the surface (0 degrees would be eye level, 90 degrees straight down), 85 mm full-frame lens look, natural perspective, level horizon.
- Framing: the whole dish in frame, centred left to right with equal space on both sides, sitting slightly below the image centre, with at least 12 percent pure white margin on every side; size exactly as stated under SERVING.
- Light: large soft diffused key light from the front left, gentle fill from the right, clean soft highlights on the food.
- Colour: neutral daylight white balance, true-to-life appetising food colours, rich but natural saturation. White and cream parts of the food (sauces, egg white, cabbage, cheese, tortilla) are a slightly warm off-white, never pure #FFFFFF, so they never merge with the background.
- Focus: the entire dish tack-sharp from front to back (f/8 look), crisp texture of crust, sauce, cheese and bun.
- Realism: ultra-realistic, unretouched studio photograph of real, freshly prepared food at its real portion size.

Clean, unbranded product shot: only what FOOD and SERVING name, its contact shadow and the pure white background; free of text, logos, boards, plates, props, cutlery, napkins and scattered garnish, except an original drink label named under SERVING. Aspect ratio 1:1.
```

### 5. Gemischter Salat

- Image 1: `bearbeitet/10-beilagen/07-krautsalat.jpg` (fertig)
- Speichern als: `bearbeitet/09-salate/03-gemischter-salat.jpg`

```
Create a professional menu photograph of "Mixed Salad" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Mixed green leaf salad with tomato wedges, cucumber slices, sweetcorn and croutons.
Build the food strictly from the description: every listed component is clearly visible, and nothing else appears.

SERVING
The salad is served in one deep round stoneware bowl without handles, in the same glaze as the dish in image 1 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim). The bowl stands centred on the white surface and fills about 70 percent of the image width. Fresh, crisp leaves; every component clearly recognisable; dressing only if the description names it.

STYLE
Image 1 is an approved photo from the same shoot. Match its pure white background, light, shadow, colour and camera angle exactly, and take no food from it.
- Surface and background: the food stands on a seamless, pure white surface that continues without any edge, fold or horizon line into a pure white background. The white is clean, evenly lit pure white (#FFFFFF) everywhere, including all four corners, with no grey tint, gradient, vignette, texture or reflection.
- Shadow: exactly one soft, neutral grey contact shadow directly beneath the food, extending slightly towards the back right. It is darkest where the food touches the surface (a medium grey, about #8A8A8A) and fades smoothly into pure white within a short distance. The shadow is clearly visible but never coloured, and there are no other shadows.
- Camera: straight-on front view, camera raised 30 degrees above the surface (0 degrees would be eye level, 90 degrees straight down), 85 mm full-frame lens look, natural perspective, level horizon.
- Framing: the whole dish in frame, centred left to right with equal space on both sides, sitting slightly below the image centre, with at least 12 percent pure white margin on every side; size exactly as stated under SERVING.
- Light: large soft diffused key light from the front left, gentle fill from the right, clean soft highlights on the food.
- Colour: neutral daylight white balance, true-to-life appetising food colours, rich but natural saturation. White and cream parts of the food (sauces, egg white, cabbage, cheese, tortilla) are a slightly warm off-white, never pure #FFFFFF, so they never merge with the background.
- Focus: the entire dish tack-sharp from front to back (f/8 look), crisp texture of crust, sauce, cheese and bun.
- Realism: ultra-realistic, unretouched studio photograph of real, freshly prepared food at its real portion size.

Clean, unbranded product shot: only what FOOD and SERVING name, its contact shadow and the pure white background; free of text, logos, boards, plates, props, cutlery, napkins and scattered garnish, except an original drink label named under SERVING. Aspect ratio 1:1.
```

## Getränk ohne Herstellerbild

### 6. Coca-Cola Zero · 1,0 l

- Image 1: `bearbeitet/12-getraenke/03-coca-cola.jpg` (fertig)
- Speichern als: `bearbeitet/12-getraenke/04-coca-cola-zero.jpg`
- Hinweis: Etikett Buchstabe für Buchstabe prüfen. Stimmt es nicht, ein Handyfoto einer echten Coca-Cola-Zero-Flasche als Image 1 nehmen und den Getränke-Prompt aus `gemini-prompts.md` verwenden.

```
Create a professional menu photograph of "Coca-Cola Zero Sugar 1.0 litre" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

DRINK
Image 1 shows the 1-litre Coca-Cola bottle from this shoot. Keep its exact bottle shape, size, position in the frame, light, contact shadow and pure white background. Change only the bottle into Coca-Cola Zero Sugar: black cap, black label with the white Coca-Cola script logo and the words "ZERO SUGAR", dark cola inside. The label faces the camera and is the only lettering in the picture. The bottle is clean and dry.

Clean scene: only the bottle, its contact shadow and the pure white background, free of glasses, ice, straws, props and any other lettering. Aspect ratio 1:1.
```

## Korrektursätze (im selben Chat)

| Problem | Nachsatz |
|---|---|
| Hintergrund nicht rein weiß (grau, Verlauf, Kante, dunkle Ecken) | `Keep everything the same, but make the background and the surface pure, evenly lit white (#FFFFFF) everywhere, including the corners, with no edge, horizon line or gradient; keep only the soft grey contact shadow under the food.` |
| Schatten fehlt oder ist zu schwach | `Keep everything the same, but add a soft, clearly visible neutral grey contact shadow directly beneath the food, darkest where it touches the surface (about #8A8A8A), fading smoothly to pure white within a short distance.` |
| Schatten zu groß, farbig oder mehrfach | `Keep everything the same, but reduce the shadow to one soft, neutral grey contact shadow directly beneath the food; no coloured shadow and no other shadows.` |
| Weiße Teile verschwimmen mit dem Hintergrund | `Keep everything the same, but make the white parts of the food a slightly warm off-white so their edges stay clearly visible against the pure white background.` |
| Brett, Teller oder Tablett im Bild | `Keep the food exactly the same, but remove the board or plate; the food stands directly on the pure white surface.` |
| Erfundene Zutat, Beilage oder Dip | `Keep everything the same, but remove the [item]; it is not part of this dish. The dish contains only: [list].` |
| Falsche Sauce oder Farbe | `Keep everything the same, but make the sauce [Saucen-Formulierung aus dem Gericht-Prompt].` |
| Stückzahl stimmt nicht | `Keep everything the same, but show exactly [n] pieces, each clearly separate.` |
| Winkel oder Größe weichen ab | `Keep the food exactly the same, but match the camera angle and light of image 2, with the camera 30 degrees above the surface, and make the dish fill about 70 percent of the image width.` |
| Wirkt wie CGI | `Keep everything the same, but make it look like an unretouched studio photograph of real food with natural texture.` |
| Text oder Logo im Bild | `Keep everything the same, but remove all text and logos.` |
| Etikett falsch (Getränke, Bucket) | `Keep everything the same, but make the label exactly as in image 1, letter for letter.` |

## Noch offen: dafür braucht es Infos oder Fotos vom Restaurant (10)

| Position | Was fehlt |
|---|---|
| Corona Extra · 0,33 l | Foto einer Flasche (steht nur auf Wolt, nicht auf der Website-Karte) |
| Home Made Peach Iced Tea · 1,0 l | Foto des Gefäßes, in dem das Restaurant den Eistee ausgibt |
| Home Made Lemon Iced Tea · 1,0 l | wie Peach |
| Chickago Boys Soße | Foto oder Beschreibung (Farbe, Konsistenz) |
| Tacos | Name auf der Karte, Anzahl, Preis (ein echtes Foto gibt es auf Instagram) |
| Ribs | Foto und Beschreibung (Sorte, Beilage, Preis) |
| Steaks | Foto und Beschreibung |
| Karlsberg Bier · 0,5 l | Foto des Glases |
| Cocktails | Welche Cocktails, Fotos |
| Frühstücksbuffet | Gibt es das noch? Am besten ein echtes Foto |

Tacos, Ribs, Steaks, Bier, Cocktails und Frühstück stehen bisher nicht auf der Website-Karte. Für die Website fehlen also nur die beiden Eistees und die Chickago Boys Soße.
