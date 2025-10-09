/**
 * @author Ubert Guertin
 * @file /src/Utils/sleep.ts
 *
 * Suspend l'exécution asynchrone pendant un nombre de millisecondes spécifié.
 * 
 * Cette fonction est utile pour introduire des délais dans des fonctions `async/await`,
 * comme pour créer des animations, attendre une réponse, ou simuler un temps de chargement.
 * 
 * @param {number} ms - Durée de la pause en millisecondes.
 * @returns {Promise<void>} Une promesse qui se résout automatiquement après le délai spécifié.
 */

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}


