import { Component } from '@angular/core';
import {  NavController, NavParams, MenuController } from 'ionic-angular';
/*
  Generated class for the Setup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html'
})
export class SetupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menuCtrl: MenuController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetupPage');
  }

  goHome() {
    this.navCtrl.pop();
  }


}
