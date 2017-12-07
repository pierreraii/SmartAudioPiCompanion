import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html'
})
export class StatsPage {
  public name;
  constructor(public navCtrl: NavController) {
    this.name = 'Pierre'
  }

}
