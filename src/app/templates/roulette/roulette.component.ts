import { Component } from '@angular/core';
import {NgClass, NgForOf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-roulette',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    NgForOf
  ],
  templateUrl: './roulette.component.html',
  styleUrl: './roulette.component.css'
})


export class RouletteComponent {

  numbers: number[] = [...Array(37).keys()];
  isSpinning: boolean = false;

  isRed(number: number): boolean {
    return [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].includes(number);
  }

  getRotation(number: number): string {
    const angle = (number * 360) / 37; // Calculer l'angle pour chaque numéro
    return `rotate(${angle}deg) translateY(-120px)`; // Ajustez translateY pour positionner les numéros
  }

  spin() {
    this.isSpinning = true;
    setTimeout(() => {
      this.isSpinning = false;
    }, 4000); // Durée de la rotation
  }
}
