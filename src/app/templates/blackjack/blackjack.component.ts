import {Component, OnInit} from '@angular/core';
import {CardComponent} from '../card/card.component';
import {HandComponent} from '../hand/hand.component';
import {HandModel} from '../Model/hand.model';

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

  betAmount: number = 0;

  playerHand: HandModel[] = [];
  dealerHand: HandModel[] = [];

  constructor() {}

  ngOnInit() {
    this.player = history.state.player;
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

}
