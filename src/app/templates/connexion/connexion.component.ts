import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgIf, NgStyle} from '@angular/common';

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

    constructor(private router: Router) {}


    ngOnInit(): void {
      this.isConnected = false;
      this.retry = false;
    }

    onSubmit(): void {
      if (this.username === 'admin' && this.password === 'admin') {
        this.isConnected = true
        this.router.navigate(['/homePage']);
      }
      else {
        this.isConnected = false;
        this.retry = true;
      }
    }

    onLogout(): void {
      this.isConnected = false;
    }

    onRegister(): void {
      this.showRegisterForm = true;
      this.username = this.newUserName;
      this.password = this.newPassword;
    }

}
