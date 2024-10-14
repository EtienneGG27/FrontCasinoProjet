import {RouterModule, Routes} from '@angular/router';
import {ConnexionComponent} from './templates/connexion/connexion.component';
import {HomeComponent} from './templates/home/home.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: 'connexionPage', component: ConnexionComponent},
  { path: 'homePage', component: HomeComponent },
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
