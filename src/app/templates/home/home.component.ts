import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GameModel} from '../Model/game.model';
import {NgForOf, NgIf} from '@angular/common';
import {PlayerModel} from '../Model/player.model';
import {NONE_TYPE} from '@angular/compiler';

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

  blackJack: GameModel = { nom: "BlackJack", description: "Description BlackJack", image: "https://play-lh.googleusercontent.com/009hpXoLRxULWBEF8VsHnNTjFrOQVFKfkQfIxZcDGWtVSZEU5mKtSJyy3Zv3pxVcZQ" };
  roulette : GameModel = { nom: "Roulette", description: "Description roulette", image:"https://as2.ftcdn.net/v2/jpg/01/58/48/65/1000_F_158486556_3f1vUzdTXKRfDcAUTnItuYeQZSul0Pjt.jpg"};

  constructor(private router: Router) {}

  ngOnInit() {
    this.games = [
      this.blackJack,
      this.roulette
    ]
    this.player = history.state.player;
  }

  onGameChoice(game : GameModel) {
    if (game.nom === "BlackJack") {
      this.router.navigate(['/blackjack'],  { state: { player: this.player } });
    }
    if (game.nom === "roulette") {
      this.router.navigate(['/roulette'], { state: { player: this.player } });}
  }
}
