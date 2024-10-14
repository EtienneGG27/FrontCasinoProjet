import {Component, OnInit, ViewChild} from '@angular/core';
import {CardComponent} from '../card/card.component';
import {HandComponent} from '../hand/hand.component';
import {HandModel} from '../Model/hand.model';
import {DeckModel} from '../Model/deck.model';
import {CARDS} from '../Constants/card.constants';

@Component({
  selector: 'app-blackjack',
  standalone: true,
  imports: [
    CardComponent,
    HandComponent
  ],
  templateUrl: './blackjack.component.html',
  styleUrl: './blackjack.component.css'
})

export class BlackjackComponent implements OnInit{


  player: any;
  playerHand!: HandModel
  dealerHand!: HandModel

  betAmount: number = 0;

  deck!: DeckModel;

  constructor() {}

  ngOnInit() {
    this.player = history.state.player;
    this.playerHand = new HandModel(0, []);
    this.dealerHand = new HandModel(0, []);
    this.deck.cards = CARDS;
    this.playerHand.loadCards(this.deck.cards);
    this.dealerHand.loadCards(this.deck.cards);
  }


  countHandPlayer(){
    this.playerHand.countpointHand()
  }

  countHandDealer(){
    this.dealerHand.countpointHand()
  }

  bet(amout: number) {
    if (amout > this.player.token) {
      return;
    }
    else{
      this.player.token -= amout;
      this.betAmount += amout;
    }
  }

  cancelBet(){
    this.player.token += this.betAmount;
    this.betAmount = 0;
  }

}
