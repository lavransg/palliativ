import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BottomNav } from '../pages/bottomNav/bottomNav';

import {Page1_1} from '../pages/modul1/1_1/1_1Page';
import {Page1_2} from '../pages/modul1/1_2/1_2Page';
import {Page1_3} from '../pages/modul1/1_3/1_3Page';
import {Page1_4} from '../pages/modul1/1_4/1_4Page';
import {Page1_5} from '../pages/modul1/1_5/1_5Page';
import {Page1_6} from '../pages/modul1/1_6/1_6Page';
import {Page1_7} from '../pages/modul1/1_7/1_7Page';
import {Page1_8} from '../pages/modul1/1_8/1_8Page';
import {Page1_9} from '../pages/modul1/1_9/1_9Page';

import {Page2_1} from '../pages/modul2/2_1/2_1Page';
import {Page2_2} from '../pages/modul2/2_2/2_2Page';
import {Page2_3} from '../pages/modul2/2_3/2_3Page';
import {Page2_4} from '../pages/modul2/2_4/2_4Page';
import {Page2_5} from '../pages/modul2/2_5/2_5Page';
import {Page2_6} from '../pages/modul2/2_6/2_6Page';
import {Page2_7} from '../pages/modul2/2_7/2_7Page';
import {Page2_8} from '../pages/modul2/2_8/2_8Page';
import {Page2_9} from '../pages/modul2/2_9/2_9Page';

import {Page3_1} from '../pages/modul3/3_1/3_1Page';
import {Page3_2} from '../pages/modul3/3_2/3_2Page';
import {Page3_3} from '../pages/modul3/3_3/3_3Page';
import {Page3_4} from '../pages/modul3/3_4/3_4Page';
import {Page3_5} from '../pages/modul3/3_5/3_5Page';
import {Page3_6} from '../pages/modul3/3_6/3_6Page';
import {Page3_7} from '../pages/modul3/3_7/3_7Page';
import {Page3_8} from '../pages/modul3/3_8/3_8Page';
import {Page3_9} from '../pages/modul3/3_9/3_9Page';

import {Page4_1} from '../pages/modul4/4_1/4_1Page';
import {Page4_2} from '../pages/modul4/4_2/4_2Page';
import {Page4_3} from '../pages/modul4/4_3/4_3Page';
import {Page4_4} from '../pages/modul4/4_4/4_4Page';
import {Page4_5} from '../pages/modul4/4_5/4_5Page';
import {Page4_6} from '../pages/modul4/4_6/4_6Page';
import {Page4_7} from '../pages/modul4/4_7/4_7Page';
import {Page4_8} from '../pages/modul4/4_8/4_8Page';
import {Page4_9} from '../pages/modul4/4_9/4_9Page';

import {Page5_1} from '../pages/modul5/5_1/5_1Page';
import {Page5_2} from '../pages/modul5/5_2/5_2Page';
import {Page5_3} from '../pages/modul5/5_3/5_3Page';
import {Page5_4} from '../pages/modul5/5_4/5_4Page';
import {Page5_5} from '../pages/modul5/5_5/5_5Page';
import {Page5_6} from '../pages/modul5/5_6/5_6Page';
import {Page5_7} from '../pages/modul5/5_7/5_7Page';
import {Page5_8} from '../pages/modul5/5_8/5_8Page';
import {Page5_9} from '../pages/modul5/5_9/5_9Page';

import {Page6_1} from '../pages/modul6/6_1/6_1Page';
import {Page6_2} from '../pages/modul6/6_2/6_2Page';
import {Page6_3} from '../pages/modul6/6_3/6_3Page';
import {Page6_4} from '../pages/modul6/6_4/6_4Page';
import {Page6_5} from '../pages/modul6/6_5/6_5Page';
import {Page6_6} from '../pages/modul6/6_6/6_6Page';
import {Page6_7} from '../pages/modul6/6_7/6_7Page';
import {Page6_8} from '../pages/modul6/6_8/6_8Page';
import {Page6_9} from '../pages/modul6/6_9/6_9Page';

import {Page7_1} from '../pages/modul7/7_1/7_1Page';
import {Page7_2} from '../pages/modul7/7_2/7_2Page';
import {Page7_3} from '../pages/modul7/7_3/7_3Page';
import {Page7_4} from '../pages/modul7/7_4/7_4Page';
import {Page7_5} from '../pages/modul7/7_5/7_5Page';
import {Page7_6} from '../pages/modul7/7_6/7_6Page';
import {Page7_7} from '../pages/modul7/7_7/7_7Page';
import {Page7_8} from '../pages/modul7/7_8/7_8Page';
import {Page7_9} from '../pages/modul7/7_9/7_9Page';

import {Page8_1} from '../pages/modul8/8_1/8_1Page';
import {Page8_2} from '../pages/modul8/8_2/8_2Page';
import {Page8_3} from '../pages/modul8/8_3/8_3Page';
import {Page8_4} from '../pages/modul8/8_4/8_4Page';
import {Page8_5} from '../pages/modul8/8_5/8_5Page';
import {Page8_6} from '../pages/modul8/8_6/8_6Page';
import {Page8_7} from '../pages/modul8/8_7/8_7Page';
import {Page8_8} from '../pages/modul8/8_8/8_8Page';
import {Page8_9} from '../pages/modul8/8_9/8_9Page';

import {Page9_1} from '../pages/modul9/9_1/9_1Page';
import {Page9_2} from '../pages/modul9/9_2/9_2Page';
import {Page9_3} from '../pages/modul9/9_3/9_3Page';
import {Page9_4} from '../pages/modul9/9_4/9_4Page';
import {Page9_5} from '../pages/modul9/9_5/9_5Page';
import {Page9_6} from '../pages/modul9/9_6/9_6Page';
import {Page9_7} from '../pages/modul9/9_7/9_7Page';
import {Page9_8} from '../pages/modul9/9_8/9_8Page';
import {Page9_9} from '../pages/modul9/9_9/9_9Page';

import {Page10_1} from '../pages/modul10/10_1/10_1Page';
import {Page10_2} from '../pages/modul10/10_2/10_2Page';
import {Page10_3} from '../pages/modul10/10_3/10_3Page';
import {Page10_4} from '../pages/modul10/10_4/10_4Page';
import {Page10_5} from '../pages/modul10/10_5/10_5Page';
import {Page10_6} from '../pages/modul10/10_6/10_6Page';
import {Page10_7} from '../pages/modul10/10_7/10_7Page';
import {Page10_8} from '../pages/modul10/10_8/10_8Page';
import {Page10_9} from '../pages/modul10/10_9/10_9Page';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BottomNav,
    Page1_1,
    Page1_2,
    Page1_3,
    Page1_4,
    Page1_5,
    Page1_6,
    Page1_7,
    Page1_8,
    Page1_9,

    Page2_1,
    Page2_2,
    Page2_3,
    Page2_4,
    Page2_5,
    Page2_6,
    Page2_7,
    Page2_8,
    Page2_9,

    Page3_1,
    Page3_2,
    Page3_3,
    Page3_4,
    Page3_5,
    Page3_6,
    Page3_7,
    Page3_8,
    Page3_9,

    Page4_1,
    Page4_2,
    Page4_3,
    Page4_4,
    Page4_5,
    Page4_6,
    Page4_7,
    Page4_8,
    Page4_9,

    Page5_1,
    Page5_2,
    Page5_3,
    Page5_4,
    Page5_5,
    Page5_6,
    Page5_7,
    Page5_8,
    Page5_9,

    Page6_1,
    Page6_2,
    Page6_3,
    Page6_4,
    Page6_5,
    Page6_6,
    Page6_7,
    Page6_8,
    Page6_9,

    Page7_1,
    Page7_2,
    Page7_3,
    Page7_4,
    Page7_5,
    Page7_6,
    Page7_7,
    Page7_8,
    Page7_9,

    Page8_1,
    Page8_2,
    Page8_3,
    Page8_4,
    Page8_5,
    Page8_6,
    Page8_7,
    Page8_8,
    Page8_9,

    Page9_1,
    Page9_2,
    Page9_3,
    Page9_4,
    Page9_5,
    Page9_6,
    Page9_7,
    Page9_8,
    Page9_9,

    Page10_1,
    Page10_2,
    Page10_3,
    Page10_4,
    Page10_5,
    Page10_6,
    Page10_7,
    Page10_8,
    Page10_9
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BottomNav,
    Page1_1,
    Page1_2,
    Page1_3,
    Page1_4,
    Page1_5,
    Page1_6,
    Page1_7,
    Page1_8,
    Page1_9,

    Page2_1,
    Page2_2,
    Page2_3,
    Page2_4,
    Page2_5,
    Page2_6,
    Page2_7,
    Page2_8,
    Page2_9,

    Page3_1,
    Page3_2,
    Page3_3,
    Page3_4,
    Page3_5,
    Page3_6,
    Page3_7,
    Page3_8,
    Page3_9,

    Page4_1,
    Page4_2,
    Page4_3,
    Page4_4,
    Page4_5,
    Page4_6,
    Page4_7,
    Page4_8,
    Page4_9,

    Page5_1,
    Page5_2,
    Page5_3,
    Page5_4,
    Page5_5,
    Page5_6,
    Page5_7,
    Page5_8,
    Page5_9,

    Page6_1,
    Page6_2,
    Page6_3,
    Page6_4,
    Page6_5,
    Page6_6,
    Page6_7,
    Page6_8,
    Page6_9,

    Page7_1,
    Page7_2,
    Page7_3,
    Page7_4,
    Page7_5,
    Page7_6,
    Page7_7,
    Page7_8,
    Page7_9,

    Page8_1,
    Page8_2,
    Page8_3,
    Page8_4,
    Page8_5,
    Page8_6,
    Page8_7,
    Page8_8,
    Page8_9,

    Page9_1,
    Page9_2,
    Page9_3,
    Page9_4,
    Page9_5,
    Page9_6,
    Page9_7,
    Page9_8,
    Page9_9,

    Page10_1,
    Page10_2,
    Page10_3,
    Page10_4,
    Page10_5,
    Page10_6,
    Page10_7,
    Page10_8,
    Page10_9


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
