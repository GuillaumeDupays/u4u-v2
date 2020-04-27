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
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['accueil', 'dirigeant', 'forum','qui-sommes-nous', 'nous-rejoindre', 'footer'],
      menu: '#menu',

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


