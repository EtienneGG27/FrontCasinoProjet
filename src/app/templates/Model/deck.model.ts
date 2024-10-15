import {CardModel} from './card.model';

export class DeckModel {
  constructor(public cards: CardModel[]) {}

  removeCard(card: CardModel) {
    this.cards = this.cards.filter(c => c !== card);
  }

}
