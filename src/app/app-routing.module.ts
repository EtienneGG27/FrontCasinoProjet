import {RouterModule, Routes} from '@angular/router';
import {ConnexionComponent} from './templates/connexion/connexion.component';
import {HomeComponent} from './templates/home/home.component';
import {NgModule} from '@angular/core';
import {RouletteComponent} from './templates/roulette/roulette.component';

const routes: Routes = [
  { path: 'connexionPage', component: ConnexionComponent},
  { path: 'homePage', component: HomeComponent },
  { path: 'game/:nom', component: RouletteComponent },
  { path: '', redirectTo: '/connexionPage', pathMatch: 'full' }, // Redirection vers connexion par défaut
  { path: '**', redirectTo: '/homePage' } // Redirection en cas de page non trouvée
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
