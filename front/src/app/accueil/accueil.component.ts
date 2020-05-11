import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  config: any;
  fullpage_api: any;


  constructor() {
    this.config = {
      // fullpage options
      licenseKey: '',
      anchors: ['accueil','dirigeant', 'forum', 'qui-sommes-nous', 'etat-esprit', 'valeurs',
        'nous-rejoindre', 'nos-offres','data','digital','it-risk', 'footer'],
      menu: '#accueil',
      navigation: false,
      navigationPosition: 'right',
      responsiveWidth: 900,

      afterResponsive: function(isResponsive){
      },

      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
        console.log(destination.index)
      }
    };
  }
  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

}


