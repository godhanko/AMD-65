import { Component ,Input} from '@angular/core';
import {NavController, NavParams, MenuController, } from 'ionic-angular';

/*
  Generated class for the Record page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-record',
  templateUrl: 'record.html'
})
export class RecordPage {
 @Input() content;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menuCtrl: MenuController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecordPage');
  }

contents=[{
  name:"AK47"
},{
  name:"FN FAL"
}]

  goback() {
    this.navCtrl.pop();
  }
  openList() {
    this.menuCtrl.open();
  }
 closeMenu() {
   this.menuCtrl.close();
 }

 toggleMenu() {
   this.menuCtrl.toggle();
 }
}
