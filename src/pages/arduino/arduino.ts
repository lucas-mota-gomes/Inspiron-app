import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ArduinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-arduino',
  templateUrl: 'arduino.html',
})
export class ArduinoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArduinoPage');
  }

  LED(bool: boolean){
    this.provider.led(bool);
  }

}
