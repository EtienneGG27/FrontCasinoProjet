import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from '../Model/card.model';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {CardComponent} from '../card/card.component';
import {HandModel} from '../Model/hand.model';
import {HandService} from '../Service/hand.service';

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

  constructor(private handService : HandService) {
  }

  ngOnInit() {
    this.hand.cards.push(new CardModel("0", 'BACK', 'assets/cards/BACK.png'), new CardModel("0", 'BACK', 'assets/cards/BACK.png'));
  }

  returnCard(){

  }

  initHand(){
    this.hand.cards.push(new CardModel("0", 'BACK', 'assets/cards/BACK.png'), new CardModel("0", 'BACK', 'assets/cards/BACK.png'));
  }


}
