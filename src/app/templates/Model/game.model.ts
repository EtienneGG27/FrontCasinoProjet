import {HandModel} from './hand.model';

export class GameModel {
  constructor(
    public gameId: number,
    public playerId: number,
    public playerHand: HandModel,
    public dealerHand: HandModel,
    public playerScore: number,
    public dealerScore: number,
    public isGameOver: boolean,
    public startTime: Date,
    public endTime: Date,
    public nom?: string,
    public description?: string,
    public image?: string
  ) {}
}
