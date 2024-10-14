import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from '../Model/card.model';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {CardComponent} from '../card/card.component';
import {HandModel} from '../Model/hand.model';

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
  @Input() hand!: HandModel[];

  cards: CardModel[] = [];

  showCard: boolean = true;
  backCard = 'assets/cards/BACK.png';

  ngOnInit() {
    this.cards = this.loadCards(); // Chargez les cartes initiales
  }

  loadCards(): CardModel[] {  // Correction du type de retour : CardModel[]
    return [
      { suit: 'C', rank: '2', imagePath: 'assets/cards/2-C.png' },
      { suit: 'D', rank: '3', imagePath: 'assets/cards/3-D.png' }
    ];
  }

  addCard() {
    // Ajoute une nouvelle carte aléatoire (à adapter selon vos besoins)
    this.cards.push({ suit: 'S', rank: 'A', imagePath: 'assets/cards/A-S.png' });
  }

}
