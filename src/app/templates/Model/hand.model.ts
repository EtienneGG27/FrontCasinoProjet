import {CardModel} from './card.model';

export class HandModel {

  constructor(public idPlayer: number, public cards: CardModel[]) {}

  countpointHand(): number {
    let points = 0;
    for (let i = 0; i < this.cards.length; i++) {
      points += this.countpointCard(this.cards[i]);
    }
    return points;
  }

  addCard(card: CardModel) {
    this.cards.push(card);
  }

  loadHand(cards: CardModel[]) {
    this.cards = cards;
  }

  cleanHand() {
    this.cards = [];
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
