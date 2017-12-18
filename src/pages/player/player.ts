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

  play() {
    let currentPlayingSong = this.gatewayService.currentPlayingSong;
    this.gatewayService.playSong(currentPlayingSong);
  }

  pause() {
    var params = {
      'type': 'pause',
      'method': 'POST',
    }
    this.gatewayService.gatewayCall(params).then((response) => {
      console.log('res', response);
    });
  }

  next() {
    let queue = this.gatewayService.queue;
    let currentPlayingSong = this.gatewayService.currentPlayingSong;
    let index = 0;
    queue.forEach((element, key) => {
      if (element.title == currentPlayingSong.title) {
        index = key;
      }
    });
    this.gatewayService.playSong(queue[index + 1]);
    this.gatewayService.currentPlayingSong = queue[index + 1];
    this.playingSong = this.gatewayService.currentPlayingSong;
  }

  previous() {
    let queue = this.gatewayService.queue;
    let currentPlayingSong = this.gatewayService.currentPlayingSong;
    let index = 0;
    queue.forEach((element, key) => {
      if (element.title == currentPlayingSong.title) {
        index = key;
      }
    });
    this.gatewayService.playSong(queue[index - 1]);
    this.gatewayService.currentPlayingSong = queue[index - 1];
    this.playingSong = this.gatewayService.currentPlayingSong;
  }
}
