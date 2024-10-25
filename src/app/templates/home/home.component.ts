import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GameModel} from '../Model/game.model';
import {NgForOf, NgIf} from '@angular/common';
import {PlayerModel} from '../Model/player.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  games: GameModel[] = []
  player!: PlayerModel;

  constructor(private router: Router) {}

  ngOnInit() {
    this.games = []
    this.player = history.state.player;
  }

  onGameChoice(nomGame: string) {
    if (nomGame === "Blackjack") {
      this.router.navigate(['/blackjack'],  { state: { player: this.player } });
    }
    if (nomGame === "Roulette") {
      this.router.navigate(['/roulette'], { state: { player: this.player } });}
  }
}
