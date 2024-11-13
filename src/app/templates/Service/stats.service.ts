import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StatsModel} from '../Model/stats.model';

@Injectable({
    providedIn: 'root'
  }
)
export class StatsService {

  constructor(private http: HttpClient) {
  }

  private player = "http://localhost:8080/playerStatistics"

  findPerfomance(playerId: number) {
    return this.http.post<StatsModel>(`${this.player}/${playerId}`, {});
  }


  parseStatsService(stats: StatsModel) {
    // Conversion de l'objet en chaîne JSON, puis parsing en objet
    let jsonGame = JSON.parse(JSON.stringify(stats));

    return{
      id: jsonGame.playerId,
      games_played: jsonGame.gamesPlayed,
      games_won: jsonGame.gamesWon,
      games_lost: jsonGame.gamesLost,
      total_tokens: jsonGame.totalTokens,
      total_bets: jsonGame.totalBets
    };
  }


}
