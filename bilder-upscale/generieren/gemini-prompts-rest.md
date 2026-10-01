# Gemini-Prompts: die restlichen Gerichte

Stand: 02.10.2026 · 33 Prompts für alles, was noch fehlt. 26 Gerichte sind fertig und schon auf der Website. Pfade relativ zu `bilder-upscale/`.

## Was anders ist als beim ersten Durchgang

- **Kein Anker mehr nötig.** Als Stil-Vorlage (Image 2) dienen deine fertigen Bilder: der US Burger für Gerichte ohne Gefäß, die Pommes-Schale für Gerichte in der eckigen Schale, das Krautsalat-Schälchen für Salate. Dips bekommen nur den fertigen Ranch-Dip als Vorlage.
- **Speichern als `.jpg`**, genau wie Gemini herunterlädt. Name und Ordner stehen bei jedem Prompt.
- **Reihenfolge einhalten.** Die Coca-Cola wird vor dem Bucket gebraucht, die Tenders mit Sauce brauchen die fertigen Tenders.
- **Getränke:** Image 1 ist das Herstellerbild aus `speisekarte/12-getraenke/`. Fehlt es auf deinem PC, den Download-Block aus dem Chat nochmal ausführen.
- **Notlösung (Burger, Wraps, Salate):** Hier gibt es kein echtes Foto. Die Bilder werden plausibel, zeigen aber nicht sicher das echte Gericht. Wenn möglich vorher ein Handyfoto vom Restaurant holen und als Image 1 nehmen.

## So gehst du vor

1. Neuen Chat in Gemini öffnen.
2. Bilder in der angegebenen Reihenfolge hochladen.
3. Prompt komplett einfügen und senden.
4. Prüfen:
   - Hintergrund weiß, Schatten weich und grau
   - Zutaten und Stückzahl stimmen
   - Bei Abweichung im selben Chat einen Korrektursatz (unten) nachschieben.
5. Unter dem angegebenen Namen speichern, Gemini-Funkeln unten rechts weiß übermalen.
6. `git add bilder-upscale/bearbeitet`, `git commit -m "Bilder Teil 2"`, `git push`. Den Rest (Freistellen, Einbau in die Website) mache ich.

## Echtes Foto

### 1. Cheese Burger

- Image 1: `generieren/eingabe/04-beef-burger__03-cheese-burger.png`
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.jpg` (fertig)
- Speichern als: `bearbeitet/04-beef-burger/03-cheese-burger.jpg`

```
Create a professional menu photograph of "Cheese Burger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Beef burger on a glossy brioche bun, layers from bottom to top: bottom bun with ketchup, green leaf lettuce and red lollo rosso, beef patty with melted cheddar, caramelised onions, a thin layer of mayonnaise, top bun.
Image 1 shows the real dish; take only the food from it, not its board, plate or background. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

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

## Ohne eigenes Foto, nach Beschreibung

### 2. Caesar Dressing

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.jpg` (fertig)
- Speichern als: `bearbeitet/11-saucen-dips/08-caesar-dressing.jpg`

```
Create a professional menu photograph of "Caesar Dressing" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A creamy, pale ivory Caesar dressing with fine flecks of grated hard cheese.
Build the food strictly from the description: every listed component is clearly visible, and nothing else appears.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 1 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the white surface and fills about 40 percent of the image width.

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

### 3. Balsamico Dressing

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.jpg` (fertig)
- Speichern als: `bearbeitet/11-saucen-dips/09-balsamico-dressing.jpg`

```
Create a professional menu photograph of "Balsamic Dressing" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A dark brown balsamic vinaigrette with glossy droplets of olive oil on the surface.
Build the food strictly from the description: every listed component is clearly visible, and nothing else appears.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 1 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the white surface and fills about 40 percent of the image width.

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

### 4. Ketchup

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.jpg` (fertig)
- Speichern als: `bearbeitet/11-saucen-dips/10-ketchup.jpg`

```
Create a professional menu photograph of "Ketchup" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Smooth, glossy, bright red tomato ketchup.
Build the food strictly from the description: every listed component is clearly visible, and nothing else appears.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 1 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the white surface and fills about 40 percent of the image width.

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

### 5. Mayonnaise

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.jpg` (fertig)
- Speichern als: `bearbeitet/11-saucen-dips/11-mayonnaise.jpg`

```
Create a professional menu photograph of "Mayonnaise" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Smooth, glossy, creamy white mayonnaise.
Build the food strictly from the description: every listed component is clearly visible, and nothing else appears.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 1 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the white surface and fills about 40 percent of the image width.

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

### 6. New York Cheesecake

- Image 1: `bearbeitet/04-beef-burger/01-us-burger.jpg` (fertig)
- Speichern als: `bearbeitet/14-dessert/01-new-york-cheesecake.jpg`

```
Create a professional menu photograph of "New York Cheesecake" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
One slice of classic New York cheesecake with a smooth, creamy pale-ivory filling, a lightly golden top and a thin golden-brown biscuit base.
Build the food strictly from the description: every listed component is clearly visible, and nothing else appears.

SERVING
One slice stands directly on the white surface, its tip pointing to the front left so that the creamy cut face and the base are visible; it fills about 50 percent of the image width. Topping only if the description names it.

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

## Getränke mit Herstellerbild

### 7. Coca-Cola · 1,0 l

- Image 1: `speisekarte/12-getraenke/03-coca-cola.jpg` (kommt mit `bilder-holen.sh`)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.jpg` (fertig)
- Speichern als: `bearbeitet/12-getraenke/03-coca-cola.jpg`

```
Create a professional menu photograph of "Coca-Cola 1.0 litre" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

DRINK
Image 1 shows the real bottle. Recreate it exactly: shape, size, cap, liquid colour and the complete label, letter for letter. The label faces the camera and is the only lettering in the picture. The bottle is clean and dry.

SERVING
The bottle stands upright alone in the centre of the white surface and fills about 75 percent of the image height.

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

Clean scene: only the bottle, its contact shadow and the pure white background, free of glasses, ice, straws, props and any lettering other than the original label. Aspect ratio 1:1.
```

### 8. Fanta Orange · 1,0 l

- Image 1: `speisekarte/12-getraenke/05-fanta-orange.jpeg` (kommt mit `bilder-holen.sh`)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.jpg` (fertig)
- Speichern als: `bearbeitet/12-getraenke/05-fanta-orange.jpg`

```
Create a professional menu photograph of "Fanta Orange 1.0 litre" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

DRINK
Image 1 shows the real bottle. Recreate it exactly: shape, size, cap, liquid colour and the complete label, letter for letter. The label faces the camera and is the only lettering in the picture. The bottle is clean and dry.

SERVING
The bottle stands upright alone in the centre of the white surface and fills about 75 percent of the image height.

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

Clean scene: only the bottle, its contact shadow and the pure white background, free of glasses, ice, straws, props and any lettering other than the original label. Aspect ratio 1:1.
```

### 9. Mezzo Mix · 1,0 l

- Image 1: `speisekarte/12-getraenke/06-mezzo-mix.jpeg` (kommt mit `bilder-holen.sh`)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.jpg` (fertig)
- Speichern als: `bearbeitet/12-getraenke/06-mezzo-mix.jpg`

```
Create a professional menu photograph of "Mezzo Mix 1.0 litre" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

DRINK
Image 1 shows the real bottle. Recreate it exactly: shape, size, cap, liquid colour and the complete label, letter for letter. The label faces the camera and is the only lettering in the picture. The bottle is clean and dry.

SERVING
The bottle stands upright alone in the centre of the white surface and fills about 75 percent of the image height.

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

Clean scene: only the bottle, its contact shadow and the pure white background, free of glasses, ice, straws, props and any lettering other than the original label. Aspect ratio 1:1.
```

### 10. Sprite · 1,0 l

- Image 1: `speisekarte/12-getraenke/07-sprite.jpg` (kommt mit `bilder-holen.sh`)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.jpg` (fertig)
- Speichern als: `bearbeitet/12-getraenke/07-sprite.jpg`

```
Create a professional menu photograph of "Sprite 1.0 litre" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

DRINK
Image 1 shows the real bottle. Recreate it exactly: shape, size, cap, liquid colour and the complete label, letter for letter. The label faces the camera and is the only lettering in the picture. The bottle is clean and dry.

SERVING
The bottle stands upright alone in the centre of the white surface and fills about 75 percent of the image height.

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

Clean scene: only the bottle, its contact shadow and the pure white background, free of glasses, ice, straws, props and any lettering other than the original label. Aspect ratio 1:1.
```

### 11. Red Bull · 0,25 l

- Image 1: `speisekarte/12-getraenke/08-red-bull.jpg` (kommt mit `bilder-holen.sh`)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.jpg` (fertig)
- Speichern als: `bearbeitet/12-getraenke/08-red-bull.jpg`

```
Create a professional menu photograph of "Red Bull 0.25 litre" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

DRINK
Image 1 shows the real can. Recreate it exactly: shape, size, cap, liquid colour and the complete label, letter for letter. The label faces the camera and is the only lettering in the picture. The can is clean and dry.

SERVING
The can stands upright alone in the centre of the white surface and fills about 75 percent of the image height.

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

Clean scene: only the can, its contact shadow and the pure white background, free of glasses, ice, straws, props and any lettering other than the original label. Aspect ratio 1:1.
```

## Aus freigegebenen Bildern der Serie

### 12. Buffalo Red Hot Tenders · 5 Stück

- Image 1: `bearbeitet/01-chicken/06-crispy-chicken-tenders-5-stueck.jpg` (fertig)
- Image 2: `bearbeitet/10-beilagen/03-pommes-frites.jpg` (fertig)
- Speichern als: `bearbeitet/01-chicken/08-buffalo-red-hot-tenders.jpg`
- Hinweis: Form der Tenders aus dem freigegebenen Tenders-Bild, Sauce wie bei den Wings.

```
Create a professional menu photograph of "Buffalo Red Hot Tenders, 5 pieces" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 5 long crispy chicken tenders (breaded chicken breast strips), coated in an opaque, bright red-orange buffalo sauce that clings to the craggy crust.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The food sits in one square stoneware baking dish with low straight sides, rounded corners and a small loop handle on the left and right side, exactly like the dish in image 2: glaze pale grey with a faint blue-green tint and fine dark-brown speckles, rim glazed caramel brown. The dish stands centred on the white surface, handles pointing left and right, and fills about 70 percent of the image width. The food is piled slightly above the rim so that it stays clearly visible.

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

### 13. Chipotle Honey BBQ Tenders · 5 Stück

- Image 1: `bearbeitet/01-chicken/06-crispy-chicken-tenders-5-stueck.jpg` (fertig)
- Image 2: `bearbeitet/10-beilagen/03-pommes-frites.jpg` (fertig)
- Speichern als: `bearbeitet/01-chicken/09-chipotle-honey-bbq-tenders.jpg`
- Hinweis: Form der Tenders aus dem freigegebenen Tenders-Bild, Sauce wie bei den Wings.

```
Create a professional menu photograph of "Chipotle Honey BBQ Tenders, 5 pieces" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 5 long crispy chicken tenders (breaded chicken breast strips), glazed in a thick, glossy, deep reddish-brown chipotle honey BBQ sauce.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The food sits in one square stoneware baking dish with low straight sides, rounded corners and a small loop handle on the left and right side, exactly like the dish in image 2: glaze pale grey with a faint blue-green tint and fine dark-brown speckles, rim glazed caramel brown. The dish stands centred on the white surface, handles pointing left and right, and fills about 70 percent of the image width. The food is piled slightly above the rim so that it stays clearly visible.

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

### 14. Teriyaki Tenders · 5 Stück

- Image 1: `bearbeitet/01-chicken/06-crispy-chicken-tenders-5-stueck.jpg` (fertig)
- Image 2: `bearbeitet/10-beilagen/03-pommes-frites.jpg` (fertig)
- Speichern als: `bearbeitet/01-chicken/10-teriyaki-tenders.jpg`
- Hinweis: Form der Tenders aus dem freigegebenen Tenders-Bild, Sauce wie bei den Wings.

```
Create a professional menu photograph of "Teriyaki Tenders, 5 pieces" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 5 long crispy chicken tenders (breaded chicken breast strips), glazed in a glossy, very dark chestnut-brown teriyaki sauce with reddish highlights.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The food sits in one square stoneware baking dish with low straight sides, rounded corners and a small loop handle on the left and right side, exactly like the dish in image 2: glaze pale grey with a faint blue-green tint and fine dark-brown speckles, rim glazed caramel brown. The dish stands centred on the white surface, handles pointing left and right, and fills about 70 percent of the image width. The food is piled slightly above the rim so that it stays clearly visible.

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

### 15. Menü Crispy-Chicken Tenders · 5 Stück

- Image 1: `bearbeitet/01-chicken/06-crispy-chicken-tenders-5-stueck.jpg` (fertig)
- Image 2: `bearbeitet/10-beilagen/03-pommes-frites.jpg` (fertig)
- Speichern als: `bearbeitet/06-menues/01-menue-crispy-chicken-tenders-5-stueck.jpg`

```
Create a professional menu photograph of "Crispy Chicken Tenders Meal, 5 pieces" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 5 long crispy chicken tenders (breaded chicken breast strips) with a craggy, golden-brown coating, without sauce; one portion of golden, crispy straight-cut French fries; one portion of creamy coleslaw made from finely shredded white and red cabbage.
Image 1 shows the real chicken of this meal. Recreate the chicken exactly as it looks there: the shape and cut of every piece, crust texture and colour. Build the fries and the coleslaw from the description. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
This is a meal deal: all parts named in the description, together on the white surface. The chicken lies directly on the white surface in the front centre. Behind it on the left stand the fries in a small square stoneware baking dish with low sides and two loop handles; behind it on the right the coleslaw in a small round stoneware bowl. Both share one glaze: pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim. Every part is fully visible, the parts overlap slightly, and the whole group fills about 85 percent of the image width.

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

### 16. Menü Crispy-Chicken Tenders · 10 Stück

- Image 1: `bearbeitet/01-chicken/06-crispy-chicken-tenders-5-stueck.jpg` (fertig)
- Image 2: `bearbeitet/10-beilagen/03-pommes-frites.jpg` (fertig)
- Speichern als: `bearbeitet/06-menues/02-menue-crispy-chicken-tenders-10-stueck.jpg`

```
Create a professional menu photograph of "Crispy Chicken Tenders Meal, 10 pieces" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 10 long crispy chicken tenders (breaded chicken breast strips) with a craggy, golden-brown coating, without sauce; one portion of golden, crispy straight-cut French fries; one portion of creamy coleslaw made from finely shredded white and red cabbage.
Image 1 shows the real chicken of this meal. Recreate the chicken exactly as it looks there: the shape and cut of every piece, crust texture and colour. Build the fries and the coleslaw from the description. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
This is a meal deal: all parts named in the description, together on the white surface. The chicken lies directly on the white surface in the front centre. Behind it on the left stand the fries in a small square stoneware baking dish with low sides and two loop handles; behind it on the right the coleslaw in a small round stoneware bowl. Both share one glaze: pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim. Every part is fully visible, the parts overlap slightly, and the whole group fills about 85 percent of the image width.

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

### 17. Menü Chicken Wings · 6 Stück

- Image 1: `bearbeitet/01-chicken/01-chicken-wings.jpg` (fertig)
- Image 2: `bearbeitet/10-beilagen/03-pommes-frites.jpg` (fertig)
- Speichern als: `bearbeitet/06-menues/03-menue-chicken-wings-6-stueck.jpg`

```
Create a professional menu photograph of "Chicken Wings Meal, 6 pieces" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 6 plain chicken wings without any sauce, with a craggy, golden-brown crispy coating; one portion of golden, crispy straight-cut French fries; one portion of creamy coleslaw made from finely shredded white and red cabbage.
Image 1 shows the real chicken of this meal. Recreate the chicken exactly as it looks there: the shape and cut of every piece, crust texture and colour. Build the fries and the coleslaw from the description. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
This is a meal deal: all parts named in the description, together on the white surface. The chicken lies directly on the white surface in the front centre. Behind it on the left stand the fries in a small square stoneware baking dish with low sides and two loop handles; behind it on the right the coleslaw in a small round stoneware bowl. Both share one glaze: pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim. Every part is fully visible, the parts overlap slightly, and the whole group fills about 85 percent of the image width.

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

### 18. Menü Chicken Wings · 10 Stück

- Image 1: `bearbeitet/01-chicken/01-chicken-wings.jpg` (fertig)
- Image 2: `bearbeitet/10-beilagen/03-pommes-frites.jpg` (fertig)
- Speichern als: `bearbeitet/06-menues/04-menue-chicken-wings-10-stueck.jpg`

```
Create a professional menu photograph of "Chicken Wings Meal, 10 pieces" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 10 plain chicken wings without any sauce, with a craggy, golden-brown crispy coating; one portion of golden, crispy straight-cut French fries; one portion of creamy coleslaw made from finely shredded white and red cabbage.
Image 1 shows the real chicken of this meal. Recreate the chicken exactly as it looks there: the shape and cut of every piece, crust texture and colour. Build the fries and the coleslaw from the description. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
This is a meal deal: all parts named in the description, together on the white surface. The chicken lies directly on the white surface in the front centre. Behind it on the left stand the fries in a small square stoneware baking dish with low sides and two loop handles; behind it on the right the coleslaw in a small round stoneware bowl. Both share one glaze: pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim. Every part is fully visible, the parts overlap slightly, and the whole group fills about 85 percent of the image width.

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

### 19. Bucket

- Image 1: `bearbeitet/01-chicken/01-chicken-wings.jpg` (fertig)
- Image 2: `bearbeitet/10-beilagen/03-pommes-frites.jpg` (fertig)
- Image 3: `bearbeitet/12-getraenke/03-coca-cola.jpg` (vorher erzeugen, steht weiter oben)
- Speichern als: `bearbeitet/02-buckets/01-bucket.jpg`
- Hinweis: Image 3 = freigegebenes Coca-Cola-Bild.

```
Create a professional menu photograph of "Bucket" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A generous heap of plain chicken wings and long crispy chicken tenders (breaded chicken breast strips) with a craggy, golden-brown coating, all without sauce; exactly 2 portions of golden, crispy straight-cut French fries; exactly 1 portion of creamy coleslaw made from finely shredded white and red cabbage; one 1-litre Coca-Cola bottle.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
This is a sharing bucket: all parts named in the description, together on the white surface. A generous heap of chicken lies directly on the white surface in the front centre. Behind it stand the fries, one portion per small square stoneware baking dish with low sides and two loop handles, and, if the description lists it, the coleslaw in a small round stoneware bowl; all stoneware has one glaze: pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim. At the back right stands the drink bottle from image 3, upright, label facing the camera, exactly as in image 3, letter for letter; its label is the only lettering in the picture, and nothing else is taken from image 3. Every part is visible, and the whole group fills about 90 percent of the image width.

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

### 20. Party Bucket

- Image 1: `bearbeitet/01-chicken/01-chicken-wings.jpg` (fertig)
- Image 2: `bearbeitet/10-beilagen/03-pommes-frites.jpg` (fertig)
- Image 3: `bearbeitet/12-getraenke/03-coca-cola.jpg` (vorher erzeugen, steht weiter oben)
- Speichern als: `bearbeitet/02-buckets/02-party-bucket.jpg`
- Hinweis: Image 3 = freigegebenes Coca-Cola-Bild. Kein Coleslaw (laut Karte).

```
Create a professional menu photograph of "Party Bucket" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A large, generous heap of plain chicken wings and long crispy chicken tenders (breaded chicken breast strips) with a craggy, golden-brown coating, all without sauce; exactly 4 portions of golden, crispy straight-cut French fries; one 1-litre Coca-Cola bottle.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
This is a sharing bucket: all parts named in the description, together on the white surface. A generous heap of chicken lies directly on the white surface in the front centre. Behind it stand the fries, one portion per small square stoneware baking dish with low sides and two loop handles, and, if the description lists it, the coleslaw in a small round stoneware bowl; all stoneware has one glaze: pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim. At the back right stands the drink bottle from image 3, upright, label facing the camera, exactly as in image 3, letter for letter; its label is the only lettering in the picture, and nothing else is taken from image 3. Every part is visible, and the whole group fills about 90 percent of the image width.

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

## Notlösung, besser mit Kundenfoto

### 21. Teriyaki Chicken Burger

- Image 1: `bearbeitet/03-chicken-burger/01-chicken-home-style-honey-mustard-bacon.jpg` (fertig)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.jpg` (fertig)
- Speichern als: `bearbeitet/03-chicken-burger/02-teriyaki-chicken-burger.jpg`

```
Create a professional menu photograph of "Teriyaki Chicken Burger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Chicken burger on a glossy brioche bun, layers from bottom to top: bottom bun, green leaf lettuce, tomato slice, crispy breaded chicken patty with a craggy golden coating glazed in a glossy, very dark chestnut-brown teriyaki sauce with reddish highlights, melted cheddar, top bun.
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

### 22. Chicken Burger BBQ

- Image 1: `bearbeitet/03-chicken-burger/01-chicken-home-style-honey-mustard-bacon.jpg` (fertig)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.jpg` (fertig)
- Speichern als: `bearbeitet/03-chicken-burger/03-chicken-burger-bbq.jpg`

```
Create a professional menu photograph of "Chicken Burger BBQ" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Chicken burger on a glossy brioche bun, layers from bottom to top: bottom bun, green leaf lettuce, tomato slice, crispy breaded chicken patty with a craggy golden coating, melted cheddar, a generous layer of glossy, deep reddish-brown barbecue sauce, top bun.
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

### 23. Chicken Burger

- Image 1: `bearbeitet/03-chicken-burger/01-chicken-home-style-honey-mustard-bacon.jpg` (fertig)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.jpg` (fertig)
- Speichern als: `bearbeitet/03-chicken-burger/04-chicken-burger.jpg`

```
Create a professional menu photograph of "Chicken Burger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Chicken burger on a glossy brioche bun, layers from bottom to top: bottom bun, green leaf lettuce, tomato slice, crispy breaded chicken patty with a craggy golden coating, melted cheddar, a creamy house sauce, top bun.
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

### 24. Teriyaki Burger

- Image 1: `bearbeitet/04-beef-burger/02-steakhouse-burger.jpg` (fertig)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.jpg` (fertig)
- Speichern als: `bearbeitet/04-beef-burger/05-teriyaki-burger.jpg`

```
Create a professional menu photograph of "Teriyaki Burger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Beef burger on a glossy brioche bun, layers from bottom to top: bottom bun, green leaf lettuce and red lollo rosso, beef patty with melted pale pepper jack cheese, caramelised onions, crispy bacon, glossy, very dark chestnut-brown teriyaki sauce with reddish highlights, top bun.
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

### 25. Mexico Burger

- Image 1: `bearbeitet/04-beef-burger/03-cheese-burger.jpg` (vorher erzeugen, steht weiter oben)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.jpg` (fertig)
- Speichern als: `bearbeitet/04-beef-burger/06-mexico-burger.jpg`

```
Create a professional menu photograph of "Mexico Burger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Beef burger on a glossy brioche bun, layers from bottom to top: bottom bun, green leaf lettuce and red lollo rosso, beef patty with melted pale pepper jack cheese, green jalapeño slices, a creamy pale-green avocado sauce, top bun.
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

### 26. Mushroom Burger

- Image 1: `bearbeitet/04-beef-burger/03-cheese-burger.jpg` (vorher erzeugen, steht weiter oben)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.jpg` (fertig)
- Speichern als: `bearbeitet/04-beef-burger/07-mushroom-burger.jpg`

```
Create a professional menu photograph of "Mushroom Burger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Beef burger on a glossy brioche bun, layers from bottom to top: bottom bun, green leaf lettuce and red lollo rosso, beef patty with melted cheddar, caramelised onions, sautéed sliced button mushrooms, a creamy house sauce, top bun.
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

### 27. Chili Cheese Burger

- Image 1: `bearbeitet/04-beef-burger/03-cheese-burger.jpg` (vorher erzeugen, steht weiter oben)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.jpg` (fertig)
- Speichern als: `bearbeitet/04-beef-burger/08-chili-cheese-burger.jpg`

```
Create a professional menu photograph of "Chili Cheese Burger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Beef burger on a glossy brioche bun, layers from bottom to top: bottom bun, green leaf lettuce and red lollo rosso, beef patty with melted cheddar, green jalapeño slices, a thick orange chili cheese sauce, top bun.
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

### 28. Veggie Burger

- Image 1: `bearbeitet/04-beef-burger/04-hamburger.jpg` (fertig)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.jpg` (fertig)
- Speichern als: `bearbeitet/04-beef-burger/09-veggie-burger.jpg`

```
Create a professional menu photograph of "Veggie Burger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Vegetarian burger on a glossy brioche bun, layers from bottom to top: bottom bun, green leaf lettuce and red lollo rosso, tomato slice, a golden-brown vegetarian patty, a creamy house sauce, top bun.
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

### 29. Caesar Wrap

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

### 30. Supreme Wrap

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

### 31. Caesar Chicken Salat

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

### 32. Fitness Salat

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

### 33. Gemischter Salat

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
