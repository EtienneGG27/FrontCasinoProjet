import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgIf, NgStyle} from '@angular/common';
import {ConnexionService} from '../Service/connexion.service';

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
      var response = false;
      this.connexionService.login(this.username, this.password).subscribe(
        (data) => {
          if (data){
            this.router.navigate(['/homePage']);
          }
          else {
            this.isConnected = false;
            this.retry = true;
          }
        }
      );
    }

    onLogout(): void {
      this.isConnected = false;
    }

    onRegister(): void {
      if (this.connexionService.register(this.newUserName, this.newPassword, this.newEmail)){
        this.showRegisterForm = true;
        this.username = this.newUserName;
        this.password = this.newPassword;
        this.router.navigate(['/homePage']);
      }
    }

}
