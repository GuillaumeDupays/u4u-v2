import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { QuiSommesNousComponent } from './qui-sommes-nous/qui-sommes-nous.component';

import { NousRejoindreComponent } from './nous-rejoindre/nous-rejoindre.component';
import { CollaborateurComponent } from './nous-rejoindre/collaborateur/collaborateur.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DirigeantComponent } from './qui-sommes-nous/dirigeant/dirigeant.component';
import { EtatEspritComponent } from './qui-sommes-nous/etat-esprit/etat-esprit.component';
import { ValeursComponent } from './qui-sommes-nous/valeurs/valeurs.component';

import { DataComponent } from './nos-offres/data/data.component';
import { ItRiskComponent } from './nos-offres/it-risk/it-risk.component';
import { DigitalComponent } from './nos-offres/digital/digital.component';
import { AgenceComponent } from './nous-rejoindre/agence/agence.component';
import { ActionnaireComponent } from './nous-rejoindre/actionnaire/actionnaire.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './nous-rejoindre/form/form.component';
import { MentionsLegalesComponent } from './footer/mentions-legales/mentions-legales.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';

import { StoreModule } from '@ngrx/store';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { ForumComponent } from './forum/forum.component';
import { AuthentificationComponent } from './authentification/authentification.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    QuiSommesNousComponent,

    NousRejoindreComponent,
    CollaborateurComponent,
    DirigeantComponent,
    EtatEspritComponent,
    ValeursComponent,
    DataComponent,
    ItRiskComponent,
    DigitalComponent,
    AgenceComponent,
    ActionnaireComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    MentionsLegalesComponent,
    AdminComponent,
    ContactComponent,
    ForumComponent,
    AuthentificationComponent,


  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    AngularFullpageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
