import {GameModel} from '../Model/game.model';
import {HandService} from './hand.service';
import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root'
  }
)
export class GameService {

  constructor(public handService : HandService) {}


  parseGameService(game: GameModel) {
    // Conversion de l'objet en chaîne JSON, puis parsing en objet
    let jsonGame = JSON.parse(JSON.stringify(game));

    return {
      gameId: jsonGame.gameId,
      playerId: jsonGame.playerId,
      playerHand: this.handService.strToHand(jsonGame.playerHand),
      dealerHand: this.handService.strToHand(jsonGame.dealerHand),
      playerScore: jsonGame.playerScore,
      dealerScore: jsonGame.dealerScore,
      isGameOver: jsonGame.isGameOver,
      startTime: jsonGame.startTime,
      endTime: jsonGame.endTime,
      tokenBalance: jsonGame.betAmount,
      nom: jsonGame.nom,
      description: jsonGame.description,
      image: jsonGame.image
    };
  }


}
