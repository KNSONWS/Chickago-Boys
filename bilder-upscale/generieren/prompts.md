# Prompts zum Generieren: Chickago Boys

Ein fertiger Prompt pro Gericht, in der Reihenfolge, in der generiert wird. Pfade relativ zu `bilder-upscale/`.
Den Prompt **komplett und unverändert** kopieren. Bilder genau in der angegebenen Reihenfolge anhängen (Image 1, Image 2, Image 3).
Ablauf, Einstellungen und Prüfung stehen in [README.md](README.md), Hintergründe im [Leitfaden](../nano-banana-prompt.md).

## Inhalt

- **Start** (1)
- **Echtes Foto** (14)
- **Ohne eigenes Foto, nach Beschreibung** (17)
- **Getränke mit Herstellerbild** (5)
- **Aus freigegebenen Bildern der Serie** (9)
- **Notlösung, besser mit Kundenfoto** (13)

## Start

Erst dieses Bild erzeugen und freigeben. Es ist die Stil-Vorlage für alle weiteren Bilder. Danach im selben Chat den Steingut-Anker ableiten.

### 1. US Burger

- Image 1: `generieren/eingabe/04-beef-burger__01-us-burger.png`
- Speichern als: `bearbeitet/04-beef-burger/01-us-burger.png`

```
Create a professional menu photograph of "US Burger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Beef burger on a glossy brioche bun, layers from bottom to top: bottom bun, green leaf lettuce, tomato slice, beef patty with melted cheddar, caramelised onions and BBQ sauce, fried egg, crispy bacon, top bun.
Image 1 shows the real dish; take only the food from it, not its board, plate or background. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

SERVING
The food stands directly on the white surface, centred, and fills about 70 percent of the image width.

STYLE
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

## Echtes Foto

### 2. Chicken Wings

- Image 1: `generieren/eingabe/01-chicken__01-chicken-wings.jpg`
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/01-chicken/01-chicken-wings.png`
- Hinweis: Ein Bild für 6, 10 und 20 Stück (gezeigt mit 10).

```
Create a professional menu photograph of "Chicken Wings" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 10 plain chicken wings without any sauce, with a craggy, golden-brown crispy coating.
Image 1 shows the real dish; take only the food from it, not its board, plate or background. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. Image 1 also shows far more than 10 wings, a wooden platter, dip bowls, plates and a table; show exactly 10 wings and leave everything else out of the picture. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

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

### 3. Crispy-Chicken Tenders · 5 Stück

- Image 1: `generieren/eingabe/01-chicken__06-crispy-chicken-tenders-5-stueck.png`
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/01-chicken/06-crispy-chicken-tenders-5-stueck.png`

```
Create a professional menu photograph of "Crispy Chicken Tenders, 5 pieces" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 5 long crispy chicken tenders (breaded chicken breast strips) with a craggy, golden-brown coating, without sauce.
Image 1 shows the real dish; take only the food from it, not its board, plate or background. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. Image 1 shows about ten tenders; show exactly 5. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

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

### 4. Crispy-Chicken Tenders · 10 Stück

- Image 1: `generieren/eingabe/01-chicken__06-crispy-chicken-tenders-5-stueck.png`
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/01-chicken/07-crispy-chicken-tenders-10-stueck.png`

```
Create a professional menu photograph of "Crispy Chicken Tenders, 10 pieces" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 10 long crispy chicken tenders (breaded chicken breast strips) with a craggy, golden-brown coating, without sauce.
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

### 5. Buffalo Red Hot Wings

- Image 1: `generieren/eingabe/01-chicken__02-buffalo-red-hot-wings.jpg`
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/01-chicken/02-buffalo-red-hot-wings.png`

```
Create a professional menu photograph of "Buffalo Red Hot Wings" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 10 chicken wings, coated in an opaque, bright red-orange buffalo sauce that clings to the craggy crust, sprinkled with a few flecks of chopped parsley.
Image 1 shows the real dish; take only the food from it, not its board, plate or background. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. Image 1 also shows a dip in a small bowl and a tiled wall; neither is part of this dish and both stay out of the picture. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

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

### 6. Chipotle Honey BBQ Wings

- Image 1: `generieren/eingabe/01-chicken__03-chipotle-honey-bbq-wings.png`
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/01-chicken/03-chipotle-honey-bbq-wings.png`

```
Create a professional menu photograph of "Chipotle Honey BBQ Wings" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 10 chicken wings, glazed in a thick, glossy, deep reddish-brown chipotle honey BBQ sauce.
Image 1 shows the real dish; take only the food from it, not its board, plate or background. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. Image 1 also shows a dip in a small bowl; it is not part of this dish and stays out of the picture. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

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

### 7. Teriyaki Wings

- Image 1: `generieren/eingabe/01-chicken__04-teriyaki-wings.png`
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/01-chicken/04-teriyaki-wings.png`

```
Create a professional menu photograph of "Teriyaki Wings" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 10 chicken wings, glazed in a glossy, very dark chestnut-brown teriyaki sauce with reddish highlights.
Image 1 shows the real dish; take only the food from it, not its board, plate or background. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. Image 1 also shows a dip in a small bowl; it is not part of this dish and stays out of the picture. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

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

### 8. Sweet Chili Wings

- Image 1: `generieren/eingabe/01-chicken__05-sweet-chili-wings.png`
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/01-chicken/05-sweet-chili-wings.png`

```
Create a professional menu photograph of "Sweet Chili Wings" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 10 chicken wings, glazed in a glossy, light orange sweet chili sauce with small red chili flecks.
Image 1 shows the real dish; take only the food from it, not its board, plate or background. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. Image 1 also shows a dip in a small bowl; it is not part of this dish and stays out of the picture. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

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

### 9. Chicken Home Style Honey Mustard Bacon

- Image 1: `generieren/eingabe/03-chicken-burger__01-chicken-home-style-honey-mustard-bacon.png`
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/03-chicken-burger/01-chicken-home-style-honey-mustard-bacon.png`
- Hinweis: Zwiebeln laut Karte, auf dem Foto nicht zu sehen. Deshalb weggelassen, beim Restaurant klären.

```
Create a professional menu photograph of "Chicken Home Style Honey Mustard Bacon Burger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Chicken burger on a glossy brioche bun, layers from bottom to top: bottom bun with creamy honey mustard sauce, green leaf lettuce, tomato slice, crispy breaded chicken patty with a craggy golden coating, melted cheddar, crispy bacon, top bun.
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

### 10. Steakhouse Burger

- Image 1: `generieren/eingabe/04-beef-burger__02-steakhouse-burger.png`
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/04-beef-burger/02-steakhouse-burger.png`

```
Create a professional menu photograph of "Steakhouse Burger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Beef burger on a glossy brioche bun, layers from bottom to top: bottom bun with red-brown steakhouse sauce, green leaf lettuce and red lollo rosso, beef patty with melted pale pepper jack cheese, caramelised onions, crispy bacon, top bun.
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

### 11. Cheese Burger

- Image 1: `generieren/eingabe/04-beef-burger__03-cheese-burger.png`
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/04-beef-burger/03-cheese-burger.png`

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

### 12. Hamburger

- Image 1: `generieren/eingabe/04-beef-burger__04-hamburger.png`
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/04-beef-burger/04-hamburger.png`

```
Create a professional menu photograph of "Hamburger" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Beef burger on a glossy brioche bun, layers from bottom to top: bottom bun with ketchup, green leaf lettuce and red lollo rosso, beef patty, caramelised onions, a thin layer of mayonnaise, top bun.
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

### 13. Chicken Wrap Chickago-Boys

- Image 1: `generieren/eingabe/07-wraps__01-chicken-wrap-chickago-boys.png`
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/07-wraps/01-chicken-wrap-chickago-boys.png`

```
Create a professional menu photograph of "Chicken Wrap Chickago-Boys" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A grilled wheat tortilla wrap with light grill marks, cut diagonally into two halves, one half leaning against the other so the filling shows: two crispy breaded chicken filets, green lettuce and a creamy house sauce.
Image 1 shows the real dish; take only the food from it, not its board, plate or background. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. Image 1 also shows chopped parsley scattered on the board; it is not part of this dish and stays out of the picture. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

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

### 14. Jalapeños Chili Cheese Fries

- Image 1: `generieren/eingabe/10-beilagen__01-jalapenos-chili-cheese-fries.png`
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/10-beilagen/01-jalapenos-chili-cheese-fries.png`

```
Create a professional menu photograph of "Jalapeño Chili Cheese Fries" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Golden, crispy straight-cut French fries, covered with drizzled lines of a thick, glossy orange chili cheese sauce and topped with many green jalapeño slices.
Image 1 shows the real dish; take only the food from it, not its board, plate or background. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

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

### 15. Cheesy Bacon Fries

- Image 1: `generieren/eingabe/10-beilagen__02-cheesy-bacon-fries.png`
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/10-beilagen/02-cheesy-bacon-fries.png`

```
Create a professional menu photograph of "Cheesy Bacon Fries" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Golden, crispy straight-cut French fries, covered with a thick, glossy yellow cheese sauce and topped with pieces of crispy bacon.
Image 1 shows the real dish; take only the food from it, not its board, plate or background. Recreate its food exactly as it looks there: the shape and cut of every piece, crust texture, layer order, sauce colour, gloss and coverage, cheese and bun, and any garnish that already sits on the food. The components and the number of pieces are exactly those in the description above. The picture shows only these components; no extra sides, sauces, dips, herbs or garnish are added.

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

## Ohne eigenes Foto, nach Beschreibung

### 16. Pommes frites

- Image 1: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/10-beilagen/03-pommes-frites.png`

```
Create a professional menu photograph of "French Fries" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A generous portion of golden, crispy straight-cut French fries, lightly salted.
Build the food strictly from the description: every listed component is clearly visible, and nothing else appears.

SERVING
The food sits in one square stoneware baking dish with low straight sides, rounded corners and a small loop handle on the left and right side, exactly like the dish in image 1: glaze pale grey with a faint blue-green tint and fine dark-brown speckles, rim glazed caramel brown. The dish stands centred on the white surface, handles pointing left and right, and fills about 70 percent of the image width. The food is piled slightly above the rim so that it stays clearly visible.

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

### 17. Süßkartoffel-Pommes

- Image 1: `bearbeitet/10-beilagen/03-pommes-frites.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/10-beilagen/04-suesskartoffel-pommes.png`

```
Create a professional menu photograph of "Sweet Potato Fries" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A generous portion of crispy, deep orange sweet potato fries, lightly salted.
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

### 18. Onion Rings

- Image 1: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/10-beilagen/05-onion-rings.png`

```
Create a professional menu photograph of "Onion Rings" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 6 golden, crispy breaded onion rings.
Build the food strictly from the description: every listed component is clearly visible, and nothing else appears.

SERVING
The food stands directly on the white surface, centred, and fills about 70 percent of the image width.

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

### 19. Mozzarella Sticks

- Image 1: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/10-beilagen/06-mozzarella-sticks.png`

```
Create a professional menu photograph of "Mozzarella Sticks" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Exactly 6 golden, crispy breaded mozzarella sticks.
Build the food strictly from the description: every listed component is clearly visible, and nothing else appears.

SERVING
The food stands directly on the white surface, centred, and fills about 70 percent of the image width.

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

### 20. Krautsalat

- Image 1: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/10-beilagen/07-krautsalat.png`

```
Create a professional menu photograph of "Coleslaw" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Creamy coleslaw made from finely shredded white and red cabbage.
Build the food strictly from the description: every listed component is clearly visible, and nothing else appears.

SERVING
The coleslaw is served in one small round stoneware bowl without handles, in the same glaze as the dish in image 1 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), centred on the white surface and filling about 50 percent of the image width.

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

### 21. Ranch

- Image 1: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/11-saucen-dips/01-ranch.png`
- Hinweis: Erster Dip: wird zur Vorlage für alle weiteren Dips.

```
Create a professional menu photograph of "Ranch Dip" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A creamy, pale off-white ranch dressing with fine green herb flecks.
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

### 22. Curry Mango

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/11-saucen-dips/02-curry-mango.png`

```
Create a professional menu photograph of "Curry Mango Sauce" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A smooth, glossy golden-yellow curry mango sauce.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the white surface and fills about 40 percent of the image width.

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

### 23. Barbecuesauce

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/11-saucen-dips/03-barbecuesauce.png`

```
Create a professional menu photograph of "Barbecue Sauce" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A smooth, glossy, deep reddish-brown barbecue sauce.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the white surface and fills about 40 percent of the image width.

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

### 24. Sweet-Chilisauce

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/11-saucen-dips/04-sweet-chilisauce.png`

```
Create a professional menu photograph of "Sweet Chili Sauce" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A glossy, translucent light orange sweet chili sauce with small red chili flecks.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the white surface and fills about 40 percent of the image width.

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

### 25. Cheddarsauce

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/11-saucen-dips/05-cheddarsauce.png`

```
Create a professional menu photograph of "Cheddar Cheese Sauce" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A smooth, creamy, bright yellow-orange cheddar cheese sauce.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the white surface and fills about 40 percent of the image width.

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

### 26. Chili-Cheesesauce

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/11-saucen-dips/06-chili-cheesesauce.png`

```
Create a professional menu photograph of "Chili Cheese Sauce" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A smooth, creamy orange cheese sauce with small flecks of red and green chili.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the white surface and fills about 40 percent of the image width.

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

### 27. Süß-Sauer-Sauce

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/11-saucen-dips/07-suess-sauer-sauce.png`

```
Create a professional menu photograph of "Sweet and Sour Sauce" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A glossy, translucent orange-red sweet and sour sauce.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the white surface and fills about 40 percent of the image width.

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

### 28. Caesar Dressing

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/11-saucen-dips/08-caesar-dressing.png`

```
Create a professional menu photograph of "Caesar Dressing" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A creamy, pale ivory Caesar dressing with fine flecks of grated hard cheese.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the white surface and fills about 40 percent of the image width.

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

### 29. Balsamico Dressing

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/11-saucen-dips/09-balsamico-dressing.png`

```
Create a professional menu photograph of "Balsamic Dressing" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
A dark brown balsamic vinaigrette with glossy droplets of olive oil on the surface.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the white surface and fills about 40 percent of the image width.

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

### 30. Ketchup

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/11-saucen-dips/10-ketchup.png`

```
Create a professional menu photograph of "Ketchup" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Smooth, glossy, bright red tomato ketchup.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the white surface and fills about 40 percent of the image width.

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

### 31. Mayonnaise

- Image 1: `bearbeitet/11-saucen-dips/01-ranch.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/11-saucen-dips/11-mayonnaise.png`

```
Create a professional menu photograph of "Mayonnaise" for the website of a fried chicken and burger restaurant. Square format, aspect ratio 1:1.

FOOD
Smooth, glossy, creamy white mayonnaise.
Image 1 is only a generic reference for shape and arrangement, not the real dish. Build the food strictly from the description: every listed component is clearly visible, and nothing that is not listed appears, even if image 1 shows it.

SERVING
The sauce fills one small, shallow round stoneware dip bowl without handles, in the same glaze as the dish in image 2 (pale grey with a faint blue-green tint, fine dark-brown speckles, caramel-brown rim), filled just below the rim with a smooth surface. The bowl stands centred on the white surface and fills about 40 percent of the image width.

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

### 32. New York Cheesecake

- Image 1: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/14-dessert/01-new-york-cheesecake.png`

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

Erst `bilder-holen.sh` ausführen, damit die Herstellerbilder im Ordner `speisekarte/12-getraenke/` liegen. Coca-Cola zuerst, das Bild braucht später der Bucket.

### 33. Coca-Cola · 1,0 l

- Image 1: `speisekarte/12-getraenke/03-coca-cola.jpg` (kommt mit `bilder-holen.sh`)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/12-getraenke/03-coca-cola.png`

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

### 34. Fanta Orange · 1,0 l

- Image 1: `speisekarte/12-getraenke/05-fanta-orange.jpeg` (kommt mit `bilder-holen.sh`)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/12-getraenke/05-fanta-orange.png`

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

### 35. Mezzo Mix · 1,0 l

- Image 1: `speisekarte/12-getraenke/06-mezzo-mix.jpeg` (kommt mit `bilder-holen.sh`)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/12-getraenke/06-mezzo-mix.png`

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

### 36. Sprite · 1,0 l

- Image 1: `speisekarte/12-getraenke/07-sprite.jpg` (kommt mit `bilder-holen.sh`)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/12-getraenke/07-sprite.png`

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

### 37. Red Bull · 0,25 l

- Image 1: `speisekarte/12-getraenke/08-red-bull.jpg` (kommt mit `bilder-holen.sh`)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/12-getraenke/08-red-bull.png`

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

Diese Gerichte bauen auf schon freigegebenen Bildern auf. Erst generieren, wenn die genannten Bilder fertig sind.

### 38. Buffalo Red Hot Tenders · 5 Stück

- Image 1: `bearbeitet/01-chicken/06-crispy-chicken-tenders-5-stueck.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/01-chicken/08-buffalo-red-hot-tenders.png`
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

### 39. Chipotle Honey BBQ Tenders · 5 Stück

- Image 1: `bearbeitet/01-chicken/06-crispy-chicken-tenders-5-stueck.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/01-chicken/09-chipotle-honey-bbq-tenders.png`
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

### 40. Teriyaki Tenders · 5 Stück

- Image 1: `bearbeitet/01-chicken/06-crispy-chicken-tenders-5-stueck.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/01-chicken/10-teriyaki-tenders.png`
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

### 41. Menü Crispy-Chicken Tenders · 5 Stück

- Image 1: `bearbeitet/01-chicken/06-crispy-chicken-tenders-5-stueck.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/06-menues/01-menue-crispy-chicken-tenders-5-stueck.png`

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

### 42. Menü Crispy-Chicken Tenders · 10 Stück

- Image 1: `bearbeitet/01-chicken/06-crispy-chicken-tenders-5-stueck.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/06-menues/02-menue-crispy-chicken-tenders-10-stueck.png`

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

### 43. Menü Chicken Wings · 6 Stück

- Image 1: `bearbeitet/01-chicken/01-chicken-wings.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/06-menues/03-menue-chicken-wings-6-stueck.png`

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

### 44. Menü Chicken Wings · 10 Stück

- Image 1: `bearbeitet/01-chicken/01-chicken-wings.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/06-menues/04-menue-chicken-wings-10-stueck.png`

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

### 45. Bucket

- Image 1: `bearbeitet/01-chicken/01-chicken-wings.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Image 3: `bearbeitet/12-getraenke/03-coca-cola.png` (freigegeben)
- Speichern als: `bearbeitet/02-buckets/01-bucket.png`
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

### 46. Party Bucket

- Image 1: `bearbeitet/01-chicken/01-chicken-wings.png` (freigegeben)
- Image 2: `bearbeitet/_anker/anker-schale.png`
- Image 3: `bearbeitet/12-getraenke/03-coca-cola.png` (freigegeben)
- Speichern als: `bearbeitet/02-buckets/02-party-bucket.png`
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

Für diese Gerichte gibt es kein echtes Foto. Der Prompt baut sie aus einem ähnlichen freigegebenen Bild der Serie und der Kartenbeschreibung. Das Ergebnis ist plausibel, zeigt aber nicht sicher das echte Gericht. Besser: Kundenfoto abwarten. Kommt eins, Image 1 durch das Kundenfoto ersetzen und im FOOD-Absatz den Text ab „Image 1 is only a generic reference“ durch den Standardtext aus Abschnitt 5 des Leitfadens ersetzen.

### 47. Teriyaki Chicken Burger

- Image 1: `bearbeitet/03-chicken-burger/01-chicken-home-style-honey-mustard-bacon.png` (freigegeben)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/03-chicken-burger/02-teriyaki-chicken-burger.png`

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

### 48. Chicken Burger BBQ

- Image 1: `bearbeitet/03-chicken-burger/01-chicken-home-style-honey-mustard-bacon.png` (freigegeben)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/03-chicken-burger/03-chicken-burger-bbq.png`

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

### 49. Chicken Burger

- Image 1: `bearbeitet/03-chicken-burger/01-chicken-home-style-honey-mustard-bacon.png` (freigegeben)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/03-chicken-burger/04-chicken-burger.png`

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

### 50. Teriyaki Burger

- Image 1: `bearbeitet/04-beef-burger/02-steakhouse-burger.png` (freigegeben)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/04-beef-burger/05-teriyaki-burger.png`

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

### 51. Mexico Burger

- Image 1: `bearbeitet/04-beef-burger/03-cheese-burger.png` (freigegeben)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/04-beef-burger/06-mexico-burger.png`

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

### 52. Mushroom Burger

- Image 1: `bearbeitet/04-beef-burger/03-cheese-burger.png` (freigegeben)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/04-beef-burger/07-mushroom-burger.png`

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

### 53. Chili Cheese Burger

- Image 1: `bearbeitet/04-beef-burger/03-cheese-burger.png` (freigegeben)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/04-beef-burger/08-chili-cheese-burger.png`

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

### 54. Veggie Burger

- Image 1: `bearbeitet/04-beef-burger/04-hamburger.png` (freigegeben)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/04-beef-burger/09-veggie-burger.png`

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

### 55. Caesar Wrap

- Image 1: `bearbeitet/07-wraps/01-chicken-wrap-chickago-boys.png` (freigegeben)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/07-wraps/02-caesar-wrap.png`

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

### 56. Supreme Wrap

- Image 1: `bearbeitet/07-wraps/01-chicken-wrap-chickago-boys.png` (freigegeben)
- Image 2: `bearbeitet/04-beef-burger/01-us-burger.png` (freigegebenes Startbild)
- Speichern als: `bearbeitet/07-wraps/03-supreme-wrap.png`

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

### 57. Caesar Chicken Salat

- Image 1: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/09-salate/01-caesar-chicken-salat.png`

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

### 58. Fitness Salat

- Image 1: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/09-salate/02-fitness-salat.png`

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

### 59. Gemischter Salat

- Image 1: `bearbeitet/_anker/anker-schale.png`
- Speichern als: `bearbeitet/09-salate/03-gemischter-salat.png`

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
