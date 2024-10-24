import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
  }
)
export class ConnexionService {

  constructor(private http: HttpClient) {}

  private player = "http://localhost:8080/player"

  login(username: string, password: string) {
    return this.http.post<{playerId : number, username: string, tokenBalance:number}>(this.player + "/login", {username: username, password: password})
  }

  register(username:string, password:string, email:string){
    return this.http.post<string>(this.player+ "/register", {username: username, password: password, email: email})
  }

}
