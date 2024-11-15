import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {GameModel} from '../Model/game.model';

@Injectable({
  providedIn: "root",
})
export class BlackjackService {

  constructor(private http: HttpClient) {}

  private blackjack = "http://localhost:8080/game"

  createGame(idPlayer: number, betAmout: number) : Observable<GameModel>{
    return this.http.post<GameModel>(this.blackjack + "/create", {playerId: idPlayer, betAmount: betAmout});
  }

  hit(game : any) : Observable<GameModel>{
    return this.http.post<GameModel>(this.blackjack + "/hit", {game});
  }

  stand(game : GameModel) : Observable<GameModel>{
    return this.http.post<GameModel>(this.blackjack + "/stand", {game: game});
  }

  double(gameId : number) : Observable<GameModel>{
    return this.http.post<GameModel>(this.blackjack + "/double", {gameId: gameId});
  }

  surrender(game : number) : Observable<GameModel>{
    return this.http.post<GameModel>(this.blackjack + "/surrender", {game: game});
  }

  split(gameId : number) : Observable<GameModel>{
    return this.http.post<GameModel>(this.blackjack + "/split", {gameId: gameId});
  }






}
