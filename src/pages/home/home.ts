import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ExplorePage } from '../explore/explore';
import { StatsPage } from '../stats/stats';
import { PlayerPage } from '../player/player';
import { GatewayService } from '../../services/gateway-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public name;

  constructor(public navCtrl: NavController, public gatewayService: GatewayService) {
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
    var params = {
      type: 'play/song',
      data: {
        songId: 'alarm'
      }
    }
    this.gatewayService.gatewayCall(params).then((response) => {
      console.log('response: ', response);
    });
  };

}
