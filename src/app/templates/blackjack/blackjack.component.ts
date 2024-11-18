import {Component, OnInit, ViewChild} from '@angular/core';
import {CardComponent} from '../card/card.component';
import {HandComponent} from '../hand/hand.component';
import {HandModel} from '../Model/hand.model';
import {BlackjackService} from '../Service/blackjack.service';
import {GameModel} from '../Model/game.model';
import {PlayerModel} from '../Model/player.model';
import {GameService} from '../Service/game.service';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import {CardModel} from '../Model/card.model';

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
  valuee!:any;


  constructor(private router: Router, private blackjackService: BlackjackService, private gameService : GameService) {
  }

  ngOnInit() {

    this.player = history.state.player;
    this.game = new GameModel(0, this.player.id, new HandModel([]), new HandModel([]), 0, 0, "", new Date(), new Date(), 0);
    this.betAmount = 0;
  }

  create() : void{
    this.blackjackService.createGame(this.player.id, this.betAmount).subscribe((game: GameModel) => {
      this.valuee = game;
      this.game = this.gameService.parseGameService(game);
      this.game.dealerHand.cards[0].imagePath = 'assets/cards/BACK.png';
    });
    this.beforeCreate = false;
    this.afterCreate = true;
  }


  hit(){
    this.blackjackService.hit(this.valuee).subscribe((game : GameModel) => {
      this.valuee = game;
      this.parseGame(game);
      this.game.dealerHand.cards[0].imagePath = 'assets/cards/BACK.png';
    });
  }

  stand() {
    this.blackjackService.stand(this.valuee).subscribe((game : GameModel) => {
      this.parseGame(game)
    });
  }

  surrender() {
    this.blackjackService.surrender(this.valuee).subscribe((game : GameModel) => {
      this.parseGame(game)
      this.game.isGameOver = "LOSE";
    });
    this.isGameOver = true;
    this.betAmount = 0;
  }


  bet(amout: number) {
    if (amout > this.player.token) {
      return;
    } else {
      this.player.token -= amout;
      this.betAmount += amout;
    }
  }

  backHome() {
    this.router.navigate(['/homePage'],  { state: { player: this.player } });
  }

  parseGame(game : GameModel){
    this.game = this.gameService.parseGameService(game);
    this.player.token = this.game.tokenBalance;
    if (this.game.isGameOver == "LOSE" || this.game.isGameOver == "DRAW" || this.game.isGameOver == "WIN") {
      this.isGameOver = true;
    }
  }

  newGame() {
    this.game = new GameModel(0, this.player.id, new HandModel([new CardModel("0", 'BACK', 'assets/cards/BACK.png'), new CardModel("0", 'BACK', 'assets/cards/BACK.png')]), new HandModel([new CardModel("0", 'BACK', 'assets/cards/BACK.png'), new CardModel("0", 'BACK', 'assets/cards/BACK.png')]), 0, 0, "", new Date(), new Date(), 0);
    this.beforeCreate = true;
    this.afterCreate = false;
    this.isGameOver = false;
    this.betAmount = 0;
  }
}
