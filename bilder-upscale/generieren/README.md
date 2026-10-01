# Generieren: alles für Nano Banana

Stand: 01.10.2026

## Was hier liegt

| Datei / Ordner | Inhalt |
|---|---|
| [gemini-prompts.md](gemini-prompts.md) | **Hauptdatei für die Gemini-App:** alle 59 Prompts mit Anleitung, Korrektursätzen und Steingut-Anker |
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
- **Für jedes Gericht einen neuen Chat.** Ausnahme sind US Burger und Steingut-Anker (Schritt 2), die laufen im selben Chat.

## Schritt 2: Start und Steingut-Anker

**Look:** Jedes Gericht steht auf rein weißer Fläche vor rein weißem Hintergrund und hat einen weichen, gut sichtbaren grauen Kontaktschatten. Es gibt kein Holzbrett.

1. Prompt **1. US Burger** aus [prompts.md](prompts.md) mit dem angegebenen Ausgangsfoto ausführen.
2. Im selben Chat nachbessern („Keep everything the same, but …“), bis alles passt:
   - Hintergrund rein weiß bis in die Ecken
   - Schatten weich und grau
   - Kamera 30° über der Fläche
   - Burger etwa 70 % der Bildbreite
3. Speichern als `bilder-upscale/bearbeitet/04-beef-burger/01-us-burger.png`. Dieses Bild ist die Stil-Vorlage (Image 2) für alle Gerichte ohne Gefäß.
4. **Steingut-Anker**, im selben Chat. Den Prompt findest du in [gemini-prompts.md](gemini-prompts.md) unter „Steingut-Anker“. Speichern als `bilder-upscale/bearbeitet/_anker/anker-schale.png`. Das ist die Vorlage für alle Gerichte in Schale oder Schälchen.

## Schritt 3: Alle Gerichte der Reihe nach

Für jedes Gericht in [prompts.md](prompts.md):

1. Neuen Chat öffnen.
2. Die Bilder **in der angegebenen Reihenfolge** anhängen (Image 1, Image 2, ggf. Image 3).
3. Den Prompt komplett und unverändert einfügen.
4. Prüfen:
   - **Zutaten:** stimmen sie mit der Beschreibung im Prompt überein, ohne Dip und ohne Deko?
   - **Stückzahl:** nachzählen.
   - **Saucenfarbe:** passt sie?
   - **Set:** Hintergrund rein weiß, Schatten weich und grau, Winkel und Größe wie beim US Burger?
5. Weicht etwas ab, im selben Chat gezielt nachbessern. Die fertigen Sätze dafür stehen in [gemini-prompts.md](gemini-prompts.md) unter „Korrektursätze“. Nach 2–3 Korrekturen lieber einen neuen Chat starten.
6. Unter dem angegebenen Pfad in `bilder-upscale/bearbeitet/` speichern.

Die Reihenfolge in [prompts.md](prompts.md) ist wichtig: Spätere Gerichte nutzen frühere, freigegebene Bilder als Vorlage. Ein Beispiel: Die Saucen-Tenders bauen auf den Tenders auf, alle Dips auf dem Ranch-Dip, der Bucket auf Wings und Cola.

Etwa alle 10 Bilder lohnt ein Blick auf alle zusammen. Ausreißer bei Helligkeit, Winkel oder Größe fallen dann sofort auf.

## Schritt 4: Freistellen

Entfällt. Die Bilder haben einen rein weißen Hintergrund. Das Weiß blende ich auf der Website per CSS aus (`mix-blend-mode: multiply`), der graue Schatten bleibt dabei sichtbar. Für rote, gelbe und schwarze Flächen erzeuge ich daraus automatisch echte Freisteller mit Transparenz. Einzige Aufgabe: das Gemini-Funkeln unten rechts mit Weiß übermalen, falls es im Bild ist.

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
