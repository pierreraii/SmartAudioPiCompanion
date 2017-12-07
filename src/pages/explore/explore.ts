import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class ExplorePage {
  public radios;
  constructor(public navCtrl: NavController) {
    this.radios = ['Pop', 'Jazz', 'Techno', 'Country', 'Electronic', 'Blues', 'Classical'];
  }

  playRadio(radio) {
    console.log('radio: ', radio);
  }

}
