/**
 * @author Ubert Guertin
 * @file /src/Utils/plurialFormat.ts
 *
 * Formate une chaîne de texte en ajoutant automatiquement 
 * un "s" au mot fourni si le nombre est supérieur à 1.
 * 
 * @param {number} n - Le nombre à afficher.
 * @param {string} text - Le mot à mettre potentiellement au pluriel.
 * @returns {string} La chaîne formatée avec le nombre et le mot.
 */
export function plurialFormat(n: number, text: string): string {
  return `${n.toString()} ${text + (n > 1 ? "s" : "")}`;
};
