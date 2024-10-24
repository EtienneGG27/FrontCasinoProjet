import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class BlackjackService {

  constructor(private http: HttpClient) {}

  private blackjack = "http://localhost:8080/game"

  createGame( idPlayer: number, betAmout: number){
    return this.http.post<any>(this.blackjack + "/create", {playerId: 2, betAmount: betAmout});
  }

  getCard(){
    return this.http.get(this.blackjack + "/card")
  }
}
