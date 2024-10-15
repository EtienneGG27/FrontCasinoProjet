import {Component, OnInit} from '@angular/core';
import {ConnexionComponent} from './templates/connexion/connexion.component';
import {HomeComponent} from './templates/home/home.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
}
