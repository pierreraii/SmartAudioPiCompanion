import { GatewayService } from '../../services/gateway-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public name;
  public user;
  constructor(public navCtrl: NavController, public gatewayService: GatewayService) {
    this.user = {
      username: '',
      password: ''
    };
  }


  public submit() {
    this.navCtrl.push(HomePage);
    var params = {
      'type': 'login',
      'data': this.user
    }
    this.gatewayService.gatewayCall(params).then((response) => {
      if (response.data) {
        this.navCtrl.push(HomePage);
      }
    });
  }

}
