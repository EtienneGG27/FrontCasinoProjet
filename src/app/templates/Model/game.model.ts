import {CardModel} from './card.model';

export interface GameModel {
  gameId: number;
  playerId: number;
  playerHand: CardModel[];
  dealerHand: CardModel[];
  playerScore: number;
  dealerScore: number;
  isGameOver: boolean;
  startTime: Date;
  endTime: Date;
  nom?: string;
  description?: string;
  image?: string;
}
