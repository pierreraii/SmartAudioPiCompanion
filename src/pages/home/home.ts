import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ExplorePage } from '../explore/explore';
import { StatsPage } from '../stats/stats';
import { PlayerPage } from '../player/player';

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
    this.navCtrl.push(PlayerPage);
  };

  goToStats() {
    this.navCtrl.push(StatsPage);
  };

  triggerAlarm() {
  };

}
