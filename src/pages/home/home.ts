import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ExplorePage } from '../explore/explore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public name;

  constructor(public navCtrl: NavController) {
    this.name = 'Pierre'
  }

  goToExplore() {
    this.navCtrl.push(ExplorePage);
  };

  goToPlayer() {
    this.navCtrl.push(ExplorePage);
  };

  goToStats() {
    this.navCtrl.push(ExplorePage);
  };

  triggerAlarm() {
    this.navCtrl.push(ExplorePage);
  };

}
