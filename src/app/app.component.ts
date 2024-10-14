import {Component, OnInit} from '@angular/core';
import {ConnexionComponent} from './templates/connexion/connexion.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ConnexionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  connexion = new ConnexionComponent();

  ngOnInit(): void {
    this.connexion.isConnected = false;
  }



}
