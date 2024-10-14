import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from '../Model/card.model';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {CardComponent} from '../card/card.component';
import {HandModel} from '../Model/hand.model';
import {CARDS} from '../Constants/card.constants';

@Component({
  selector: 'app-hand',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    CardComponent,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']  // Correction ici (styleUrls au lieu de styleUrl)
})

export class HandComponent implements OnInit {

  @Input() hand!: HandModel;

  showCard: boolean = true;
  backCard = 'assets/cards/BACK.png';

  ngOnInit() {
    this.loadHand(CARDS);
  }

  loadHand(cardsCARDS : CardModel[]) {  // Correction du type de retour : CardModel[]
    this.hand.loadCards(this.getRandomCards(2, cardsCARDS));
  }

  getRandomCards(count: number, cardsCARDS : CardModel[]): CardModel[] {
    const randomCards: CardModel[] = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * cardsCARDS.length);
      const randomCard = cardsCARDS[randomIndex];
      randomCards.push(randomCard);
    }
    return randomCards;
  }

  addCard() {
    // Ajoute une nouvelle carte aléatoire (à adapter selon vos besoins)
    this.hand.cards.push(this.getRandomCards(1, CARDS)[0]);
  }
}
