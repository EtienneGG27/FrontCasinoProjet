import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule, NgIf} from '@angular/common';
import {ConnexionComponent} from './templates/connexion/connexion.component'; // Import CommonModule


@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    CommonModule,
    ConnexionComponent,
    NgIf
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
