import {Component, Input} from '@angular/core';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {CardModel} from '../Model/card.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card!: CardModel;

  getSuit() {
    return this.card.imagePath.split('-')[1].split('.')[0]; // Obtient la couleur à partir du chemin
  }


}
