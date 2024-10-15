import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: "root",
})
export class BlackjackService {

  constructor(private http: HttpClient) {}

  private blackjack = "http://localhost:8080/blackjack"

  getCard(){
    return this.http.get(this.blackjack + "/card")
  }
}
