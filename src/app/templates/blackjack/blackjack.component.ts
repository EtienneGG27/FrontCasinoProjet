import {Component, OnInit} from '@angular/core';
import {CardComponent} from '../card/card.component';
import {CardModel} from '../Model/card.model';
import {HandComponent} from '../hand/hand.component';

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

  constructor() {}



  ngOnInit() {
    this.player = history.state.player;
  }



}
