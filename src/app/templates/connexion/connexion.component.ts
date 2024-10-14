import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [
    FormsModule,
    NgStyle,
    NgIf
  ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {

    username!: string;
    password!: string;
    isConnected : boolean = true;

    onSubmit(): void {
      console.log('Username: ' + this.username);
      console.log('Password: ' + this.password);
    }
    onLogout(): void {
      this.isConnected = false;
    }
}
