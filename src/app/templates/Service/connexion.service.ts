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
    const options = new HttpParams().set('username', username).set('password', password)
    return this.http.post<boolean>(this.player + "/login", options)
  }

  register(username:string, password:string, email:string){
    return this.http.post<boolean>(this.player+ "/register", {username, password, email})
  }
}
