import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AccueilComponent} from './accueil/accueil.component';
import {CollaborateurComponent} from './nous-rejoindre/collaborateur/collaborateur.component';
import {DirigeantComponent} from './qui-sommes-nous/dirigeant/dirigeant.component';
import {DataComponent} from './nos-offres/data/data.component';
import {DigitalComponent} from './nos-offres/digital/digital.component';
import {ItRiskComponent} from './nos-offres/it-risk/it-risk.component';
import {EtatEspritComponent} from './qui-sommes-nous/etat-esprit/etat-esprit.component';
import {ValeursComponent} from './qui-sommes-nous/valeurs/valeurs.component';
import {AgenceComponent} from './nous-rejoindre/agence/agence.component';
import {ActionnaireComponent} from './nous-rejoindre/actionnaire/actionnaire.component';
import {FormComponent} from "./nous-rejoindre/form/form.component";
import { HttpClientModule } from '@angular/common/http';

import {AuthentificationComponent} from "./authentification/authentification.component";



const routes: Routes = [

  { path: '', component: AccueilComponent },
  { path: 'acces-collaborateur', component : AuthentificationComponent }

/*
    { path: 'dirigeant', component: DirigeantComponent },
    { path: 'esprit', component: EtatEspritComponent },
    { path: 'valeurs', component: ValeursComponent },*/

/*    { path: 'data', component: DataComponent },
    { path: 'digital', component: DigitalComponent },
    { path: 'it-risk', component: ItRiskComponent },*/

/*    { path: 'collaborateur', component: CollaborateurComponent },*/
/*
    { path: 'agence', component: NosOffresComponent },
    { path: 'actionnaire', component: AccueilComponent },
*/



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
