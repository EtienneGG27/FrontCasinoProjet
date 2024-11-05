import {Injectable} from '@angular/core';
import {CardModel} from '../Model/card.model';
import {CARDS} from '../Constants/card.constants';
import {HandModel} from '../Model/hand.model';
import {HttpClient} from '@angular/common/http';
import {CardService} from './card.service';

@Injectable({
    providedIn: 'root'
  }
)
export class HandService {

  constructor(private http: HttpClient, public cardSerice: CardService) {}

  private player = "http://localhost:8080/hand"

  createHand(playerId: number) {
    return this.http.post<HandModel>(this.player + "/create", {playerId: playerId});
  }

  strToHand(str: string[]): HandModel {

    let hand = new HandModel([]);
    for (let i = 0; i < str.length; i++) {
      hand.cards.push(this.cardSerice.getCardDetails(str[i]));
    }
    return hand;
  }









  loadHand(hand : HandModel, cardsCARDS : CardModel[]) {  // Correction du type de retour : CardModel[]
    hand.cards = this.getRandomCards(2, cardsCARDS);
  }

  getRandomCards(count: number, cardsCARDS : CardModel[]): CardModel[] {
    const randomCards: CardModel[] = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * cardsCARDS.length);
      const randomCard = cardsCARDS[randomIndex];
      randomCards.push(randomCard);
    }
    return randomCards;
  }

  addCard(hand : HandModel, cards : CardModel[]) {
    // Ajoute une nouvelle carte aléatoire (à adapter selon vos besoins)
    hand.cards.push(this.getRandomCards(1, cards)[0]);
  }

  countPointHand(hand : HandModel): number {
    let points = 0;
    for (let i = 0; i < hand.cards.length; i++) {
      points += this.countpointCard(hand.cards[i]);
    }
    return points;
  }

  private countpointCard(card: CardModel) {
    switch (card.rank) {
      case 'A':
        return 11;
      case 'K':
        return 10;
      case 'Q':
        return 10;
      case 'J':
        return 10;
      default:
        return parseInt(card.rank);
    }
  }


}
