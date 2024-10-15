import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from '../Model/card.model';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {CardComponent} from '../card/card.component';
import {HandModel} from '../Model/hand.model';
import {CARDS} from '../Constants/card.constants';
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
    //this.hand.cards.push({rank: '2', suit: '2', imagePath: "assets/cards/BACK.png"});
  }

  addCard() {
    this.handService.addCard(this.hand);
  }


}
