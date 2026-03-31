import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class Products {
productList : Product[] = [
   {
    "name": "Vintage Lederjacke",
    "description": "Klassische Bikerjacke aus den 80ern. Echtes Leder mit einer wunderschönen, natürlichen Patina. Alle Reißverschlüsse und Druckknöpfe sind original und voll funktionsfähig.",
    "specs": "Größe: L, Material: Echtleder, Farbe: Schwarz",
    "stock": 1,
    "price": 850000000.00
  },
  {
    "name": "Kaschmir-Schal",
    "description": "Ein hauchzarter Schal aus 100% reinem Kaschmir. Sehr weich auf der Haut und in einem exzellenten Zustand ohne gezogene Fäden. Frisch professionell gereinigt.",
    "specs": "Material: Kaschmir, Farbe: Beere, Länge: 160cm",
    "stock": 2,
    "price": 4500.00
  },
  {
    "name": "Original 70er Schlaghose",
    "description": "Echte Vintage-Schlaghose aus festem Denim. Hoher Bund (High Waist) und weiter Schlag. Ein authentisches Sammlerstück für Retro-Liebhaber ohne Abnutzungen am Saum.",
    "specs": "Größe: W28/L32, Material: Baumwolle, Farbe: Hellblau",
    "stock": 1,
    "price": 65000.00
  },
  {
    "name": "Leinenhemd",
    "description": "Luftiges Hemd aus hochwertigem Leinen. Ideal für heiße Sommertage. Das Kleidungsstück ist kaum getragen, der Kragen ist noch perfekt in Form und sauber.",
    "specs": "Größe: XL, Material: 100% Leinen, Farbe: Naturweiß",
    "stock": 3,
    "price": 280000000
  },
  {
    "name": "Designer Abendkleid",
    "description": "Elegantes, bodenlanges Kleid für besondere Anlässe. Nur einmal getragen. Das Material fällt fließend und hat einen dezenten Glanz. Keine Flecken oder Mängel.",
    "specs": "Größe: 38, Marke: Vintage Boutique, Farbe: Nachtblau",
    "stock": 1,
    "price": 1222220.00
  },
  {
    "name": "Retro Trainingsjacke",
    "description": "Sportliche Jacke im Stil der frühen 2000er. Kultiges Design mit Kontraststreifen. Das Material ist formstabil und die Farben sind noch sehr kräftig.",
    "specs": "Größe: M, Material: Polyester-Mix, Farbe: Grün/Weiß",
    "stock": 2,
    "price": 390000000
  }
];


}
