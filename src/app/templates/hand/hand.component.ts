import {Component, OnInit} from '@angular/core';
import {CardModel} from '../Model/card.model';
import {NgClass, NgIf} from '@angular/common';
import {CardComponent} from '../card/card.component';

@Component({
  selector: 'app-hand',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    CardComponent
  ],
  templateUrl: './hand.component.html',
  styleUrl: './hand.component.css'
})
export class HandComponent implements OnInit {

  cards: CardModel[] = [];
  chosenCard!: CardModel;




  ngOnInit() {
    this.cards = [
      { suit: 'C', rank: '2', imagePath: './assets/cards/2-C.png' },
      { suit: 'C', rank: '3', imagePath: './assets/cards/3-C.png' },
    ];
  }


}
