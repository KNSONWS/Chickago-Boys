# Generieren: alles für Nano Banana

Stand: 01.10.2026

## Was hier liegt

| Datei / Ordner | Inhalt |
|---|---|
| [gemini-prompts.md](gemini-prompts.md) | **Für die Gemini-App:** alle 59 Prompts mit Gemini-Anleitung in einer Datei |
| [prompts.md](prompts.md) | 59 fertige Prompts, einer pro Gericht, in Generier-Reihenfolge. Zu jedem steht, welche Bilder angehängt werden und wo das Ergebnis gespeichert wird. |
| `eingabe/` | 14 vorbereitete Ausgangsfotos: quadratisch, Logo und Gäste weggeschnitten, Freisteller auf Hintergrundgrau gesetzt |
| `bilder-holen.sh` | lädt die 5 Getränkebilder (und 4 kleine Menüfotos) von Lieferando und Uber Eats |
| [../nano-banana-prompt.md](../nano-banana-prompt.md) | Leitfaden mit Begründungen, Korrektur-Sätzen und Qualitätskontrolle |

**Von 70 Positionen bekommen 59 einen Prompt:**

| Gruppe | Anzahl |
|---|---|
| Start (US Burger) | 1 |
| Echtes Foto | 14 |
| Ohne eigenes Foto, nach Beschreibung (Beilagen, Dips, Cheesecake) | 17 |
| Getränke mit Herstellerbild | 5 |
| Aus freigegebenen Bildern der Serie (Tenders mit Sauce, Menüs, Buckets) | 9 |
| Notlösung, besser mit Kundenfoto (8 Burger, 2 Wraps, 3 Salate) | 13 |

Für die übrigen 11 fehlt noch etwas, siehe unten.

## Schritt 0: Vorbereiten

Auf dem Mac im Projektordner:

```
git pull
sh bilder-upscale/generieren/bilder-holen.sh
```

## Schritt 1: Einstellungen

- **Wo:** [Google AI Studio](https://aistudio.google.com). Dort gibt es kein sichtbares Gemini-Funkeln im Bild, und Seitenverhältnis und Auflösung lassen sich einstellen.
- **Modell:** Nano Banana Pro (`gemini-3-pro-image`)
- **Seitenverhältnis:** 1:1
- **Auflösung:** 4K. Wird das Kontingent knapp, reicht für Dips und Getränke 2K.
- **Für jedes Gericht einen neuen Chat.** Ausnahme sind Start und Anker (Schritt 2), die laufen im selben Chat.

## Schritt 2: Start und Anker

1. Prompt **1. US Burger** aus [prompts.md](prompts.md) mit dem angegebenen Ausgangsfoto ausführen.
2. Im selben Chat nachbessern („Keep everything the same, but …“), bis alles passt:
   - Brett waagerecht, Enden knapp außerhalb des Bildes
   - Kamera 30° über dem Brett
   - Burger etwa 70 % der Bildbreite
   - Hintergrund gleichmäßig hellgrau
   - Licht weich von links vorn
3. Speichern als `bilder-upscale/bearbeitet/04-beef-burger/01-us-burger.png`.
4. **Anker A**, im selben Chat:
   ```
   Using the provided image, remove only the burger. Keep the board, backdrop, light, camera angle and framing exactly the same, so that the empty board remains. Aspect ratio 1:1.
   ```
   Speichern als `bilder-upscale/bearbeitet/_anker/anker-a-brett.png`.
5. **Anker B**, im selben Chat, auf Anker A aufbauend:
   ```
   Keep everything exactly the same, but place one empty square stoneware baking dish with low straight sides, rounded corners and a small loop handle on the left and right side, centred on the board, handles pointing left and right, filling about 70 percent of the image width. Glaze: pale grey with a faint blue-green tint and fine dark-brown speckles; the rim is glazed caramel brown. Aspect ratio 1:1.
   ```
   Speichern als `bilder-upscale/bearbeitet/_anker/anker-b-schale.png`.

## Schritt 3: Alle Gerichte der Reihe nach

Für jedes Gericht in [prompts.md](prompts.md):

1. Neuen Chat öffnen.
2. Die Bilder **in der angegebenen Reihenfolge** anhängen (Image 1, Image 2, ggf. Image 3).
3. Den Prompt komplett und unverändert einfügen.
4. Prüfen:
   - **Zutaten:** stimmen sie mit der Beschreibung im Prompt überein, ohne Dip und ohne Deko?
   - **Stückzahl:** nachzählen.
   - **Saucenfarbe:** passt sie?
   - **Set:** Brett, Winkel, Größe und Hintergrund wie beim Anker?
5. Weicht etwas ab, im selben Chat gezielt nachbessern. Die fertigen Sätze dafür stehen im Leitfaden, Abschnitt 10. Nach 2–3 Korrekturen lieber einen neuen Chat starten.
6. Unter dem angegebenen Pfad in `bilder-upscale/bearbeitet/` speichern.

Die Reihenfolge in [prompts.md](prompts.md) ist wichtig: Spätere Gerichte nutzen frühere, freigegebene Bilder als Vorlage. Ein Beispiel: Die Saucen-Tenders bauen auf den Tenders auf, alle Dips auf dem Ranch-Dip, der Bucket auf Wings und Cola.

Etwa alle 10 Bilder lohnt ein Blick auf alle zusammen. Ausreißer bei Helligkeit, Winkel oder Größe fallen dann sofort auf.

## Schritt 4: Freisteller für die Speisekarte

Die Website zeigt die Gerichte freigestellt. Für jedes fertige Gericht:

1. Neuen Chat öffnen und **nur das fertige Brett-Foto** anhängen.
2. Diesen Prompt nehmen, `[DISH NAME]` durch den Namen aus dem Gericht-Prompt ersetzen:
   ```
   Using the provided photo of "[DISH NAME]", keep the food exactly the same (same pieces, shape, colours, light, camera angle and size in the frame), together with its stoneware if there is any. Change only the surroundings: replace the wooden board and the studio backdrop with one flat, uniform, saturated chroma-key blue (#0047BB) that fills the entire frame from edge to edge. The blue is evenly lit, without shadow, gradient, texture or reflections; the underside of the food meets it with a crisp edge. The food keeps its neutral studio light: highlights stay white and every colour stays exactly as in the provided photo, with no blue tint or blue reflection on the food. The whole dish is in frame with at least 10 percent clear blue on every side. Aspect ratio 1:1.
   ```
3. Das Blau im Bildprogramm entfernen, z. B. in Photoshop über „Auswahl > Farbbereich“.
4. Speichern als `bilder-upscale/bearbeitet/<kategorie>/cut-<name>.png`, mit Transparenz.

Ausnahmen:
- **Red Bull:** Die Dose ist blau, deshalb hier Magenta `#FF00FF` statt Blau nehmen.
- **Durchsichtige Flaschen:** von Hand freistellen.

## Schritt 5: Abgeben

```
git add bilder-upscale/bearbeitet
git commit -m "Generierte Speisenbilder"
git push
```

Danach baue ich die Bilder in die Website ein.

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

**Für den Kunden außerdem:** Bei den 13 Gerichten der Gruppe „Notlösung“ sind echte Handyfotos besser. Wie man den Prompt dann umstellt, steht in [prompts.md](prompts.md) am Anfang dieser Gruppe.

## Abweichungen zwischen Karte und Foto

Diese Punkte sind in die Prompts eingeflossen und sollten mit dem Restaurant geklärt werden:
- **Beef Burger:** Laut Karte gibt es saure Gurken und Zwiebeln, auf keinem Foto sind Gurken zu sehen. Die Prompts lassen sie weg. Tomate erscheint nur beim US Burger.
- **Chicken Home Style Honey Mustard Bacon:** Laut Karte gibt es Zwiebeln, auf dem Foto sind keine zu sehen.
- **Chicken Wings:** Ein Bild gilt für 6, 10 und 20 Stück und zeigt 10 Wings ohne Sauce, weil die Sauce frei wählbar ist.
