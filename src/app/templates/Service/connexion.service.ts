import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
  }
)
export class ConnexionService {

  constructor(private http: HttpClient) {}

  private player = "http://localhost:8080/player"

  login(username: string, password: string) {
    return this.http.post<boolean>(this.player + "/login", {username, password})
  }

  register(username:string, password:string, email:string){
    return this.http.post<boolean>(this.player+ "/register", {username, password, email})
  }
}
