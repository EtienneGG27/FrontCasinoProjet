import {CardModel} from '../Model/card.model';
import {Injectable} from '@angular/core';



@Injectable({
    providedIn: 'root'
  }
)
export class CardService {
  // Cette méthode reçoit la valeur complète et la transforme en suit et rank


  getCardDetails(cardValue: string): CardModel {
    // Dictionnaire pour convertir les noms en valeurs numériques
    const rankMap: { [key: string]: string } = {
      "TWO": "2",
      "THREE": "3",
      "FOUR": "4",
      "FIVE": "5",
      "SIX": "6",
      "SEVEN": "7",
      "EIGHT": "8",
      "NINE": "9",
      "TEN": "10",
      "JACK": "J",
      "QUEEN": "Q",
      "KING": "K",
      "ACE": "A"
    };


    // Séparer la carte en parties
    const parts = cardValue.split('_');

    // Prendre la première lettre du troisième mot comme suit et mapper le premier mot en rank
    const suit = parts[2].charAt(0);
    const rank = rankMap[parts[0]] || parts[0]; // Utiliser la valeur mappée ou le mot original si non trouvé

    return new CardModel(
      suit,
      rank,
      'assets/cards/' + rank + '-' + suit + '.png'
    );  }

}
