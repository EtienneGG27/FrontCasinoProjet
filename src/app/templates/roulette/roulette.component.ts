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

}

