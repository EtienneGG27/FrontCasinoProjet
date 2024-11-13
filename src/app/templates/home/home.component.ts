import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GameModel} from '../Model/game.model';
import {NgForOf, NgIf} from '@angular/common';
import {PlayerModel} from '../Model/player.model';
import {StatsModel} from '../Model/stats.model';
import {Observable} from 'rxjs';
import {StatsService} from '../Service/stats.service';

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
  stats!: StatsModel;

  constructor(private router: Router, private statsService : StatsService) {}

  ngOnInit() {
    this.games = []
    this.player = history.state.player;
    this.stats = new StatsModel(0, 0, 0, 0, 0, 0);
    this.findStats();
  }

  onGameChoice(nomGame: string) {
    if (nomGame === "Blackjack") {
      this.router.navigate(['/blackjack'],  { state: { player: this.player } });
    }
  }

  findStats(){
    this.statsService.findPerfomance(this.player.id).subscribe((stats: StatsModel) => {
      this.stats = this.statsService.parseStatsService(stats);
    });
  }
}
