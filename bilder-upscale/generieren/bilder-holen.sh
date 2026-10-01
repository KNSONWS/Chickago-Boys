#!/bin/sh
# Lädt die auf Lieferando und Uber Eats gefundenen Bilder in bilder-upscale/speisekarte/.
# Aufruf im Projektordner: sh bilder-upscale/generieren/bilder-holen.sh
set -e
cd "$(dirname "$0")/../.."
B=bilder-upscale/speisekarte
get() { echo "lade $1"; curl -fsSL --create-dirs -o "$B/$1" "$2"; }

# Menüs: echte Fotos des Restaurants (klein, nur als Referenz; die Prompts nutzen die freigegebenen Bilder der Serie)
get 06-menues/01-menue-crispy-chicken-tenders-5-stueck.jpeg "https://tb-static.uber.com/prod/image-proc/processed_images/3280a32f5f8381ffa0f359e4254118fa/bc9c318a9c96996e2d990faf2b0c65f6.jpeg"
cp "$B/06-menues/01-menue-crispy-chicken-tenders-5-stueck.jpeg" "$B/06-menues/02-menue-crispy-chicken-tenders-10-stueck.jpeg"
get 06-menues/03-menue-chicken-wings-6-stueck.png "https://just-eat-prod-eu-res.cloudinary.com/image/upload/v1/de/dishes/9217288/6fd25f9f42f6e32e7246829204e92361"
cp "$B/06-menues/03-menue-chicken-wings-6-stueck.png" "$B/06-menues/04-menue-chicken-wings-10-stueck.png"

# Getränke: Hersteller-Produktbilder (Image 1 für die Getränke-Prompts)
get 12-getraenke/03-coca-cola.jpg "https://just-eat-prod-eu-res.cloudinary.com/image/upload/v1/de/databank-products/5000112548280/default"
get 12-getraenke/05-fanta-orange.jpeg "https://tb-static.uber.com/prod/image-proc/processed_images/d648f414d0a120a3280041b3a5d996b0/0fb376d1da56c05644450062d25c5c84.jpeg"
get 12-getraenke/06-mezzo-mix.jpeg "https://tb-static.uber.com/prod/image-proc/processed_images/715f21dca8a6c758904f8b3e9063b05f/f0d1762b91fd823a1aa9bd0dab5c648d.jpeg"
get 12-getraenke/07-sprite.jpg "https://just-eat-prod-eu-res.cloudinary.com/image/upload/v1/de/databank-products/5000112548341/default"
get 12-getraenke/08-red-bull.jpg "https://just-eat-prod-eu-res.cloudinary.com/image/upload/v1/de/databank-products/90162565/default"

echo "Fertig: 9 Dateien in $B"
