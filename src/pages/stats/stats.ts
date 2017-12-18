import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GatewayService } from '../../services/gateway-service';

@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html'
})
export class StatsPage {
  public stats;
  public profile;

  constructor(public navCtrl: NavController, public gatewayService: GatewayService) {
    let params = {
      'type': 'statistics',
      'method': 'GET'
    }
    this.gatewayService.gatewayCall(params).then((response) => {
      if (response.data) {
        this.profile = response.data.profile;
      }
    });
  }

}
