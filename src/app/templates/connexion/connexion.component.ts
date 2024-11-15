import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgIf, NgStyle} from '@angular/common';
import {ConnexionService} from '../Service/connexion.service';
import {PlayerModel} from '../Model/player.model';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css',
  imports: [
    FormsModule,
    NgStyle,
    NgIf
  ],
  standalone: true
})

export class ConnexionComponent implements OnInit {


    username!: string;
    password!: string;
    isConnected! : boolean;
    retry!: boolean;
    showRegisterForm!: boolean;
    newUserName!: string;
    newPassword!: string;
    newEmail!: string;

    constructor(private router: Router, private connexionService: ConnexionService) {}

    ngOnInit(): void {
      this.isConnected = false;
      this.retry = false;
    }

  onSubmit(): void {
    this.connexionService.login(this.username, this.password).subscribe(
      (data : {playerId : number, username: string, tokenBalance:number}) => {
        let player;
        if (data) {
          this.isConnected = true;
          player = new PlayerModel(data.username, this.password, data.tokenBalance, data.playerId);
          this.router.navigate(['/homePage'], {state: {player: player}});
        }
        else {
          this.retry = true;
        }
      }
    );
  }

    onLogout(): void {
      this.isConnected = false;
    }

    onRegister(): void {
        this.connexionService.register(this.newUserName, this.newPassword, this.newEmail).subscribe(
          (data) => {
            if (data){
              this.showRegisterForm = false;
            }
          }
        );
      }
}
