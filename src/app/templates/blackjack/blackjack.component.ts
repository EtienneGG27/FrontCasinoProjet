import {Component, OnInit, ViewChild} from '@angular/core';
import {CardComponent} from '../card/card.component';
import {HandComponent} from '../hand/hand.component';
import {HandModel} from '../Model/hand.model';
import {BlackjackService} from '../Service/blackjack.service';
import {GameModel} from '../Model/game.model';
import {PlayerModel} from '../Model/player.model';
import {GameService} from '../Service/game.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-blackjack',
  standalone: true,
  imports: [
    CardComponent,
    HandComponent,
    CommonModule
  ],
  templateUrl: './blackjack.component.html',
  styleUrl: './blackjack.component.css'
})

export class BlackjackComponent implements OnInit {


  player!: PlayerModel;
  game!: GameModel;

  betAmount: number = 0;
  beforeCreate: boolean = true;
  afterCreate: boolean = false;
  isGameOver: boolean = false;


  constructor(private blackjackService: BlackjackService, private gameService : GameService) {
  }

  ngOnInit() {
    this.player = history.state.player;
    this.game = new GameModel(0, this.player.id, new HandModel([]), new HandModel([]), 0, 0, false, new Date(), new Date());
  }

  create() : void{
    this.blackjackService.createGame(this.player.id, this.betAmount).subscribe((game: GameModel) => {
      this.game = this.gameService.parseGameService(game);
    });
    this.beforeCreate = false;
    this.afterCreate = true;
  }


  hit(){
    this.blackjackService.hit(this.game.gameId).subscribe((game : GameModel) => {
      this.parseGame(game);
    });
  }

  stand() {
    this.blackjackService.stand(this.game.gameId).subscribe((game : GameModel) => {
      this.parseGame(game)
    });
  }

  double() {
    this.blackjackService.double(this.game.gameId).subscribe((game : GameModel) => {
      this.parseGame(game)
    });
  }

  split() {
    this.blackjackService.split(this.game.gameId).subscribe((game : GameModel) => {
      this.parseGame(game)
    });
  }

  surrender() {
    this.blackjackService.surrender(this.game.gameId).subscribe((game : GameModel) => {
      this.parseGame(game)
    });
    this.isGameOver = true;
  }


  bet(amout: number) {
    if (amout > this.player.token) {
      return;
    } else {
      this.player.token -= amout;
      this.betAmount += amout;
    }
  }

  cancelBet() {
    this.player.token += this.betAmount;
    this.betAmount = 0;
  }

  parseGame(game : GameModel){
    this.game = this.gameService.parseGameService(game);
    if (this.game.isGameOver){
      this.isGameOver = true;
    }
  }

  newGame() {
    this.game = new GameModel(0, this.player.id, new HandModel([]), new HandModel([]), 0, 0, false, new Date(), new Date());
    this.beforeCreate = true;
    this.afterCreate = false;
    this.isGameOver = false;
  }
}
