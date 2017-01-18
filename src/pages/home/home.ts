import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ExercisePage } from '../exercise/exercise';
import { RecordPage } from '../record/record';
import { FoodPage } from '../food/food';
import { SetupPage } from '../setup/setup';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
  gotoexercise(){
    this.navCtrl.push(ExercisePage);
  }
  gotoRecord(){
    this.navCtrl.push(RecordPage);
  }
  gotoSetup(){
    this.navCtrl.push(SetupPage);
  }
  gotoFood(){
    this.navCtrl.push(FoodPage);
  }

}
