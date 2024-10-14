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


  availableCards: CardModel[] = [
    { suit: 'C', rank: '2', imagePath: './assets/cards/2-C.png' },

  ];

  ngOnInit() {
    this.drawRandomCard();
  }

  drawRandomCard() {
    const randomIndex = Math.floor(Math.random() * this.availableCards.length);
    this.chosenCard = this.availableCards[randomIndex]; // Choisit une carte au hasard
    console.log(`Carte choisie: ${this.chosenCard.rank} de ${this.chosenCard.suit}`);
  }
}
