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

  hit(gameId : number) : Observable<GameModel>{
    return this.http.post<GameModel>(this.blackjack + "/hit", {gameId: gameId});
  }

  stand(gameId : number) : Observable<GameModel>{
    return this.http.post<GameModel>(this.blackjack + "/stand", {gameId: gameId});
  }

  double(gameId : number) : Observable<GameModel>{
    return this.http.post<GameModel>(this.blackjack + "/double", {gameId: gameId});
  }

  surrender(gameId : number) : Observable<GameModel>{
    return this.http.post<GameModel>(this.blackjack + "/surrender", {gameId: gameId});
  }

  split(gameId : number) : Observable<GameModel>{
    return this.http.post<GameModel>(this.blackjack + "/split", {gameId: gameId});
  }




}
