import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GatewayService } from '../../services/gateway-service';

@Component({
  selector: 'page-player',
  templateUrl: 'player.html'
})
export class PlayerPage {
  public playingSong;
  constructor(public navCtrl: NavController, public gatewayService: GatewayService) {
    this.playingSong = gatewayService.currentPlayingSong;
  }

}
