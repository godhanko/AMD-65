import { ExercisePage } from '../pages/exercise/exercise';
import { FoodPage } from '../pages/food/food';
import { RecordPage } from '../pages/record/record';
import { SetupPage } from '../pages/setup/setup';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RecordmenuComponent} from '../components/recordmenu/recordmenu';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExercisePage,
    FoodPage,
    RecordPage,
    SetupPage,
    RecordmenuComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ExercisePage,
    FoodPage,
    RecordPage,
    SetupPage,
    RecordmenuComponent
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
