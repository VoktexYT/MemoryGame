/**
 * @author Ubert Guertin
 * @file /src/Models/CardImagesManager.ts
*/
import shuffle from "../Utils/shuffle.ts";
import { CATEGORY_NUMBER, TYPE_NUMBER } from "@/Utils/constants.ts";


/**
 * Gère les images utilisées pour les cartes du jeu de mémoire.
 * 
 * La classe génère dynamiquement les chemins des images disponibles en fonction
 * des constantes `CATEGORY_NUMBER` et `TYPE_NUMBER`, puis les mélange aléatoirement.
 * 
 * À chaque appel de la propriété `imageSrc`, elle retourne et supprime la dernière image
 * de la liste mélangée, garantissant ainsi qu'une image n'est utilisée qu'une seule fois (jusqu'à épuisement).
 */
export class CardImagesManager {
  private allCardImages: Array<string> = [];

  constructor() {
    this.createPaths();
  }

  public get imageSrc(): string {
    if (this.allCardImages.length === 0) return "";

    const lastElement: string | undefined = this.allCardImages[this.allCardImages.length - 1];

    if (!lastElement) return "";

    this.allCardImages.pop();

    return lastElement;
  }

  private createPaths(): void {
    for (let c = 1; c <= CATEGORY_NUMBER; c++) {
      for (let t = 0; t < TYPE_NUMBER; t++) {
        this.allCardImages.push(
          `/assets/cards_${c}/c0${t}.png`
        );
      }
    }

    this.allCardImages = shuffle<string>(this.allCardImages);
  }
}
