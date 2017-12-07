import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-player',
  templateUrl: 'player.html'
})
export class PlayerPage {
  public name;
  constructor(public navCtrl: NavController) {
    this.name = 'Pierre'
  }

}
