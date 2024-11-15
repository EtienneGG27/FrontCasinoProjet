import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf, NgStyle } from '@angular/common';
import { ConnexionService } from '../Service/connexion.service';
import { PlayerModel } from '../Model/player.model';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  imports: [FormsModule, NgStyle, NgIf],
  standalone: true,
})
export class ConnexionComponent implements OnInit {
  username!: string;
  password!: string;
  isConnected: boolean = false;
  retry: boolean = false;
  showRegisterForm: boolean = false;
  newUserName!: string;
  newPassword!: string;
  newEmail!: string;
  registerError: string | null = null; // Pour afficher un message d'erreur spécifique lors de l'inscription

  constructor(
    private router: Router,
    private connexionService: ConnexionService
  ) {}

  ngOnInit(): void {
    this.isConnected = false;
    this.retry = false;
    this.registerError = null;
  }

  onSubmit(): void {
    this.connexionService.login(this.username, this.password).subscribe({
      next: (data: { playerId: number; username: string; tokenBalance: number }) => {
        if (data) {
          this.isConnected = true;
          const player = new PlayerModel(
            data.username,
            this.password,
            data.tokenBalance,
            data.playerId
          );
          this.router.navigate(['/homePage'], { state: { player } });
        } else {
          this.retry = true; // Affiche un message d'erreur
        }
      },
      error: () => {
        this.retry = true; // Affiche un message d'erreur en cas de problème de connexion
      },
    });
  }

  onLogout(): void {
    this.isConnected = false;
  }

  onRegister(): void {
    this.connexionService
      .register(this.newUserName, this.newPassword, this.newEmail)
      .subscribe({
        next: (data) => {
          if (data) {
            this.showRegisterForm = false;
            this.registerError = null; // Supprime le message d'erreur en cas de succès
          }
        },
        error: (error) => {
          // Gestion des erreurs d'inscription
          if (error.status === 400) {
            this.registerError = 'Veuillez vérifier les informations saisies (email trop court ou non valide).';
          } else if (error.status === 409) {
            this.registerError = 'Nom d’utilisateur déjà existant. Veuillez en choisir un autre.';
          } else if (error.status === 201) {
            this.showRegisterForm = false;
            this.registerError = null;
          }
          else {
            this.registerError = 'Une erreur inconnue est survenue. Veuillez réessayer.';
          }
        },
      });
  }
}
