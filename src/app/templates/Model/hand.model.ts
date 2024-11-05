import {CardModel} from './card.model';

export class HandModel {

  constructor(public cards: CardModel[]) {
  }


  addCardHand(hand: HandModel, card: CardModel) {
    hand.cards.push(card);
  }

  addCardsHand(hand: HandModel, cards: CardModel[]) {
    hand.cards.push(...cards);
  }

}
