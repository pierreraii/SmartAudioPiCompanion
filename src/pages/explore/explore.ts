import { PlayerPage } from '../player/player';
import { GatewayService } from '../../services/gateway-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class ExplorePage {
  public radios;

  constructor(public navCtrl: NavController, public gatewayService: GatewayService) {
    this.radios = ['Recommended', 'Pop', 'Jazz', 'Techno', 'Country', 'Electronic', 'Blues', 'Classical'];
  }

  playSong(song) {
    this.gatewayService.playSong(song);
  }

  playRadio(radio) {
    let self = this;
    let params = {
      'type': 'play/radio',
      'method': 'POST',
      'data': {
        radioType: this.radios.indexOf(radio) != 0 ? this.radios.indexOf(radio) : ''
      }
    }
    this.gatewayService.gatewayCall(params).then((response) => {
      if (response.data) {
        this.gatewayService.queue = response.data.songs;
        this.gatewayService.currentPlayingSong = this.gatewayService.queue[0];
        self.playSong(this.gatewayService.currentPlayingSong);
        this.navCtrl.push(PlayerPage);
      }
    });
  }

}
