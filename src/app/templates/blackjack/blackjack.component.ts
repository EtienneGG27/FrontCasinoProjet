import {Component, OnInit, ViewChild} from '@angular/core';
import {CardComponent} from '../card/card.component';
import {HandComponent} from '../hand/hand.component';
import {HandModel} from '../Model/hand.model';
import {CARDS} from '../Constants/card.constants';
import {HandService} from '../Service/hand.service';
import {BlackjackService} from '../Service/blackjack.service';

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

export class BlackjackComponent implements OnInit {


  player: any;
  playerHand!: HandModel
  dealerHand!: HandModel

  betAmount: number = 0;


  constructor(private handService: HandService, private blackjackService: BlackjackService) {
  }

  ngOnInit() {
    this.player = history.state.player;
    this.playerHand = new HandModel([]);
    this.dealerHand = new HandModel([]);
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


  countHandPoint(hand: HandModel) {
    return this.handService.countPointHand(hand);
  }


}
