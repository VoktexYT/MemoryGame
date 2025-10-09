import { CardImagesManager } from "./CardImagesManager";
import { DEFAULT_CARD_IS_VISIBLE } from "@/Utils/constants";

const cardImagesManager = new CardImagesManager();

/**
 * Représente une carte du jeu de mémoire.
 * 
 * Cette classe génère des cartes avec un identifiant unique (`uniqueId`) et un identifiant de motif (`patternId`)
 * partagé entre les paires. Le champ `src` contient l'image à afficher sur la carte.
 * 
 * Le fonctionnement repose sur un mécanisme de duplication : à chaque création de deux cartes consécutives,
 * la première reçoit un nouvel identifiant de motif et une nouvelle image, tandis que la deuxième copie ces valeurs.
 * Cela permet de former des paires de cartes identiques.
 */
export default class CardModel {
  private static patternId: number = 0;
  private static uniqueId: number = 0;
  private static imageSrc: string = "";
  private static isDuplicate: boolean = false;

  public uniqueId: number = 0;
  public patternId: number = 0;
  public src: string = "";
  public isVisible: boolean = DEFAULT_CARD_IS_VISIBLE;

  constructor() {
    if (CardModel.patternId > 40) {
      CardModel.patternId = 0;
    }

    if (!CardModel.isDuplicate) {
      CardModel.patternId++;
      CardModel.imageSrc = cardImagesManager.imageSrc;
    }

    CardModel.isDuplicate = !CardModel.isDuplicate;
    CardModel.uniqueId++;

    this.patternId = CardModel.patternId;
    this.src = CardModel.imageSrc;
    this.uniqueId = CardModel.uniqueId;
  }
}

