import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class ExplorePage {
  public name;
  constructor(public navCtrl: NavController) {
    this.name = 'Pierre'
  }

}
