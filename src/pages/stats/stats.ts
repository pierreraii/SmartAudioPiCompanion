import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GatewayService } from '../../services/gateway-service';

@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html'
})
export class StatsPage {
  public stats = {};
  public profile = {};

  constructor(public navCtrl: NavController, public gatewayService: GatewayService) {
    let params1 = {
      'type': 'statistics',
      'method': 'GET'
    }
    this.gatewayService.gatewayCall(params1).then((response) => {
      if (response) {
        this.stats = response.stats;
      }
    });

    let params2 = {
      'type': 'profile',
      'method': 'GET'
    }
    this.gatewayService.gatewayCall(params2).then((response) => {
      if (response) {
        this.profile = response;
      }
    });
  }

}
