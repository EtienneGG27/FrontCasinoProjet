import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule, NgIf} from '@angular/common';
import {ConnexionComponent} from './templates/connexion/connexion.component';
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'; // Import CommonModule


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgIf,
    AppRoutingModule,
    FormsModule,
    ConnexionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
