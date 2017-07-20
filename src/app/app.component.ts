import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
import {Page2_10} from '../pages/modul2/2_10/2_10Page';
import {Page2_11} from '../pages/modul2/2_11/2_11Page';
import {Page2_12} from '../pages/modul2/2_12/2_12Page';
import {Page2_13} from '../pages/modul2/2_13/2_13Page';
import {Page2_14} from '../pages/modul2/2_14/2_14Page';
import {Page2_15} from '../pages/modul2/2_15/2_15Page';
import {Page2_16} from '../pages/modul2/2_16/2_16Page';
import {Page2_17} from '../pages/modul2/2_17/2_17Page';

import {Page3_1} from '../pages/modul3/3_1/3_1Page';
import {Page3_2} from '../pages/modul3/3_2/3_2Page';
import {Page3_3} from '../pages/modul3/3_3/3_3Page';
import {Page3_4} from '../pages/modul3/3_4/3_4Page';
import {Page3_5} from '../pages/modul3/3_5/3_5Page';
import {Page3_6} from '../pages/modul3/3_6/3_6Page';
import {Page3_7} from '../pages/modul3/3_7/3_7Page';
import {Page3_8} from '../pages/modul3/3_8/3_8Page';
import {Page3_9} from '../pages/modul3/3_9/3_9Page';
import {Page3_10} from '../pages/modul3/3_10/3_10Page';
import {Page3_11} from '../pages/modul3/3_11/3_11Page';
import {Page3_12} from '../pages/modul3/3_12/3_12Page';
import {Page3_13} from '../pages/modul3/3_13/3_13Page';
import {Page3_14} from '../pages/modul3/3_14/3_14Page';

import {Page4_1} from '../pages/modul4/4_1/4_1Page';
import {Page4_2} from '../pages/modul4/4_2/4_2Page';
import {Page4_3} from '../pages/modul4/4_3/4_3Page';
import {Page4_4} from '../pages/modul4/4_4/4_4Page';
import {Page4_5} from '../pages/modul4/4_5/4_5Page';
import {Page4_6} from '../pages/modul4/4_6/4_6Page';
import {Page4_7} from '../pages/modul4/4_7/4_7Page';
import {Page4_8} from '../pages/modul4/4_8/4_8Page';
import {Page4_9} from '../pages/modul4/4_9/4_9Page';
import {Page4_10} from '../pages/modul4/4_10/4_10Page';
import {Page4_11} from '../pages/modul4/4_11/4_11Page';
import {Page4_12} from '../pages/modul4/4_12/4_12Page';
import {Page4_13} from '../pages/modul4/4_13/4_13Page';
import {Page4_14} from '../pages/modul4/4_14/4_14Page';
import {Page4_15} from '../pages/modul4/4_15/4_15Page';
import {Page4_16} from '../pages/modul4/4_16/4_16Page';

import {Page5_1} from '../pages/modul5/5_1/5_1Page';
import {Page5_2} from '../pages/modul5/5_2/5_2Page';
import {Page5_3} from '../pages/modul5/5_3/5_3Page';
import {Page5_4} from '../pages/modul5/5_4/5_4Page';
import {Page5_5} from '../pages/modul5/5_5/5_5Page';
import {Page5_6} from '../pages/modul5/5_6/5_6Page';
import {Page5_7} from '../pages/modul5/5_7/5_7Page';
import {Page5_8} from '../pages/modul5/5_8/5_8Page';
import {Page5_9} from '../pages/modul5/5_9/5_9Page';
import {Page5_10} from '../pages/modul5/5_10/5_10Page';
import {Page5_11} from '../pages/modul5/5_11/5_11Page';

import {Page6_1} from '../pages/modul6/6_1/6_1Page';
import {Page6_2} from '../pages/modul6/6_2/6_2Page';
import {Page6_3} from '../pages/modul6/6_3/6_3Page';
import {Page6_4} from '../pages/modul6/6_4/6_4Page';
import {Page6_5} from '../pages/modul6/6_5/6_5Page';
import {Page6_6} from '../pages/modul6/6_6/6_6Page';
import {Page6_7} from '../pages/modul6/6_7/6_7Page';
import {Page6_8} from '../pages/modul6/6_8/6_8Page';
import {Page6_9} from '../pages/modul6/6_9/6_9Page';
import {Page6_10} from '../pages/modul6/6_10/6_10Page';
import {Page6_11} from '../pages/modul6/6_11/6_11Page';
import {Page6_12} from '../pages/modul6/6_12/6_12Page';
import {Page6_13} from '../pages/modul6/6_13/6_13Page';
import {Page6_14} from '../pages/modul6/6_14/6_14Page';
import {Page6_15} from '../pages/modul6/6_15/6_15Page';
import {Page6_16} from '../pages/modul6/6_16/6_16Page';

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
import {Page9_10} from '../pages/modul9/9_10/9_10Page';
import {Page9_11} from '../pages/modul9/9_11/9_11Page';
import {Page9_12} from '../pages/modul9/9_12/9_12Page';
import {Page9_13} from '../pages/modul9/9_13/9_13Page';
import {Page9_14} from '../pages/modul9/9_14/9_14Page';

import {Page10_1} from '../pages/modul10/10_1/10_1Page';
import {Page10_2} from '../pages/modul10/10_2/10_2Page';
import {Page10_3} from '../pages/modul10/10_3/10_3Page';
import {Page10_4} from '../pages/modul10/10_4/10_4Page';
import {Page10_5} from '../pages/modul10/10_5/10_5Page';
import {Page10_6} from '../pages/modul10/10_6/10_6Page';
import {Page10_7} from '../pages/modul10/10_7/10_7Page';
import {Page10_8} from '../pages/modul10/10_8/10_8Page';
import {Page10_9} from '../pages/modul10/10_9/10_9Page';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BottomNav } from '../pages/bottomNav/bottomNav';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  modul1: Array<{title: string, component: any}>;
  modul2: Array<{title: string, component: any}>;
  modul3: Array<{title: string, component: any}>;
  modul4: Array<{title: string, component: any}>;
  modul5: Array<{title: string, component: any}>;
  modul6: Array<{title: string, component: any}>;
  modul7: Array<{title: string, component: any}>;
  modul8: Array<{title: string, component: any}>;
  modul9: Array<{title: string, component: any}>;
  modul10: Array<{title: string, component: any}>;

  toggleMenu1: boolean;
  toggleMenu2: boolean;
  toggleMenu3: boolean;
  toggleMenu4: boolean;
  toggleMenu5: boolean;
  toggleMenu6: boolean;
  toggleMenu7: boolean;
  toggleMenu8: boolean;
  toggleMenu9: boolean;
  toggleMenu10: boolean;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.toggleMenu1 = true;
    this.toggleMenu2 = true;
    this.toggleMenu3 = true;
    this.toggleMenu4 = true;
    this.toggleMenu5 = true;
    this.toggleMenu6 = true;
    this.toggleMenu7 = true;
    this.toggleMenu8 = true;
    this.toggleMenu9 = true;
    this.toggleMenu10 = true;

    this.modul1 = [
      { title: 'Introfilm', component: Page1_1 },
      { title: 'Hvorfor kurs?', component: Page1_2 },
      { title: 'Alvorlige konsekvenser', component: Page1_3 },
      { title: 'Årsak til underernæring', component: Page1_4 },
      { title: 'Erneringsscreening', component: Page1_5 },
      { title: 'Faktorer som spiller inn på erneringsstatus', component: Page1_6 },
      { title: 'Måltidsmiljø', component: Page1_7 },
      { title: 'Holdninger', component: Page1_8 },
      { title: 'Modulprøve', component: Page1_9 }
    ];
    this.modul2 = [
      { title: 'Rammer for mat og måltider i helsetjenesten', component: Page2_1 },
      { title: 'Som del av omsorgen: Mattilbudet', component: Page2_2 },
      { title: 'Standardkoster', component: Page2_3 },
      { title: 'Rett mat til rett pasient', component: Page2_4 },
      { title: 'Helsepersonell sin oppgave', component: Page2_5 },
      { title: 'Nøkkelrådskost og energi- og næringssett', component: Page2_6 },
      { title: 'Måltidsrytme', component: Page2_7 },
      { title: 'Måltidsrytme: unngå nattfaste', component: Page2_8 },
      { title: 'Servering av mat og måltider', component: Page2_9 },
      { title: 'Forberede måltidet', component: Page2_10 },
      { title: 'Forberede måltidet', component: Page2_11 },
      { title: 'Forberede pasienten', component: Page2_12 },
      { title: 'Matkvalitet', component: Page2_13 },
      { title: 'Når pasienten ikke spiser', component: Page2_14 },
      { title: 'Balansegang mot "matpress"', component: Page2_15 },
      { title: 'Samarbeid og kommunikasjon', component: Page2_16 },
      { title: 'Modulprøve', component: Page2_17 },
    ];
        this.modul3 = [
      { title: 'Kartlegging av kosthold', component: Page3_1 },
      { title: 'Nye pasienter/brukere', component: Page3_2 },
      { title: 'Kostsamtalen', component: Page3_3 },
      { title: 'Kostsamtalen føres slik', component: Page3_4 },
      { title: 'Kartlegging av ernæringsstatus', component: Page3_5 },
      { title: 'Hvordan man kartlegger', component: Page3_6 },
      { title: 'Hvordan måle vekt, høyde, KMI og vektutvikling', component: Page3_7 },
      { title: 'Veiing', component: Page3_8 },
      { title: 'Høydemåling', component: Page3_9 },
      { title: 'Alternativ høydemåling', component: Page3_10 },
      { title: 'Beregne kroppsmasseindeks', component: Page3_11 },
      { title: 'Vektutvikling', component: Page3_12 },
      { title: 'Spiser lite?', component: Page3_13 },
      { title: 'Kroppens energibehov', component: Page3_14 },
    ];
        this.modul4 = [
      { title: '2_1', component: Page4_1 },
      { title: '2_2', component: Page4_2 },
      { title: '2_3', component: Page4_3 },
      { title: '2_4', component: Page4_4 },
      { title: '2_5', component: Page4_5 },
      { title: '2_6', component: Page4_6 },
      { title: '2_7', component: Page4_7 },
      { title: '2_8', component: Page4_8 },
      { title: '2_9', component: Page4_9 },
      { title: '2_8', component: Page4_10 },
      { title: '2_8', component: Page4_11 },
      { title: '2_8', component: Page4_12 },
      { title: '2_8', component: Page4_13 },
      { title: '2_8', component: Page4_14 },
      { title: '2_8', component: Page4_15 },
      { title: '2_8', component: Page4_16 },
    ];
        this.modul5 = [
      { title: '2_1', component: Page5_1 },
      { title: '2_2', component: Page5_2 },
      { title: '2_3', component: Page5_3 },
      { title: '2_4', component: Page5_4 },
      { title: '2_5', component: Page5_5 },
      { title: '2_6', component: Page5_6 },
      { title: '2_7', component: Page5_7 },
      { title: '2_8', component: Page5_8 },
      { title: '2_9', component: Page5_9 },
      { title: '2_10', component: Page5_10 },
      { title: '2_11', component: Page5_11 },
    ];
        this.modul6 = [
      { title: '2_1', component: Page6_1 },
      { title: '2_2', component: Page6_2 },
      { title: '2_3', component: Page6_3 },
      { title: '2_4', component: Page6_4 },
      { title: '2_5', component: Page6_5 },
      { title: '2_6', component: Page6_6 },
      { title: '2_7', component: Page6_7 },
      { title: '2_8', component: Page6_8 },
      { title: '2_9', component: Page6_9 },
      { title: '2_8', component: Page6_10 },
      { title: '2_8', component: Page6_11 },
      { title: '2_8', component: Page6_12 },
      { title: '2_8', component: Page6_13 },
      { title: '2_8', component: Page6_14 },
      { title: '2_8', component: Page6_15 },
      { title: '2_8', component: Page6_16 },
    ];
        this.modul7 = [
      { title: '2_1', component: Page7_1 },
      { title: '2_2', component: Page7_2 },
      { title: '2_3', component: Page7_3 },
      { title: '2_4', component: Page7_4 },
      { title: '2_5', component: Page7_5 },
      { title: '2_6', component: Page7_6 },
      { title: '2_7', component: Page7_7 },
      { title: '2_8', component: Page7_8 },
      { title: '2_9', component: Page7_9 }
    ];
        this.modul8 = [
      { title: '2_1', component: Page8_1 },
      { title: '2_2', component: Page8_2 },
      { title: '2_3', component: Page8_3 },
      { title: '2_4', component: Page8_4 },
      { title: '2_5', component: Page8_5 },
      { title: '2_6', component: Page8_6 },
      { title: '2_7', component: Page8_7 },
      { title: '2_8', component: Page8_8 },
      { title: '2_9', component: Page8_9 }
    ];
        this.modul9 = [
      { title: '2_1', component: Page9_1 },
      { title: '2_2', component: Page9_2 },
      { title: '2_3', component: Page9_3 },
      { title: '2_4', component: Page9_4 },
      { title: '2_5', component: Page9_5 },
      { title: '2_6', component: Page9_6 },
      { title: '2_7', component: Page9_7 },
      { title: '2_8', component: Page9_8 },
      { title: '2_9', component: Page9_9 },
      { title: '2_8', component: Page9_10 },
      { title: '2_8', component: Page9_11 },
      { title: '2_8', component: Page9_12 },
      { title: '2_8', component: Page9_13 },
      { title: '2_8', component: Page9_14 },
    ];
        this.modul10 = [
      { title: '2_1', component: Page10_1 },
      { title: '2_2', component: Page10_2 },
      { title: '2_3', component: Page10_3 },
      { title: '2_4', component: Page10_4 },
      { title: '2_5', component: Page10_5 },
      { title: '2_6', component: Page10_6 },
      { title: '2_7', component: Page10_7 },
      { title: '2_8', component: Page10_8 },
      { title: '2_9', component: Page10_9 }
    ];


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  toggleSubMenu(modul) {

    switch(modul){
      case "modul1":
        this.toggleMenu1 = !this.toggleMenu1;
        this.toggleMenu2 = true;
        this.toggleMenu3 = true;
        this.toggleMenu4 = true;
        this.toggleMenu5 = true;
        this.toggleMenu6 = true;
        this.toggleMenu7 = true;
        this.toggleMenu8 = true;
        this.toggleMenu9 = true;
        this.toggleMenu10 = true;  
        break;
      case "modul2":
        this.toggleMenu2 = !this.toggleMenu2;
        this.toggleMenu1 = true;
        this.toggleMenu3 = true;
        this.toggleMenu4 = true;
        this.toggleMenu5 = true;
        this.toggleMenu6 = true;
        this.toggleMenu7 = true;
        this.toggleMenu8 = true;
        this.toggleMenu9 = true;
        this.toggleMenu10 = true;
        break;
      case "modul3":
        this.toggleMenu3 = !this.toggleMenu3;
        this.toggleMenu1 = true;
        this.toggleMenu2 = true;
        this.toggleMenu4 = true;
        this.toggleMenu5 = true;
        this.toggleMenu6 = true;
        this.toggleMenu7 = true;
        this.toggleMenu8 = true;
        this.toggleMenu9 = true;
        this.toggleMenu10 = true;
        break;
      case "modul4":
        this.toggleMenu4 = !this.toggleMenu4;
        this.toggleMenu1 = true;
        this.toggleMenu2 = true;
        this.toggleMenu3 = true;
        this.toggleMenu5 = true;
        this.toggleMenu6 = true;
        this.toggleMenu7 = true;
        this.toggleMenu8 = true;
        this.toggleMenu9 = true;
        this.toggleMenu10 = true;
        break;
      case "modul5":
        this.toggleMenu5 = !this.toggleMenu5;
        this.toggleMenu1 = true;
        this.toggleMenu2 = true;
        this.toggleMenu3 = true;
        this.toggleMenu4 = true;
        this.toggleMenu6 = true;
        this.toggleMenu7 = true;
        this.toggleMenu8 = true;
        this.toggleMenu9 = true;
        this.toggleMenu10 = true;
        break;
      case "modul6":
        this.toggleMenu6 = !this.toggleMenu6;
        this.toggleMenu1 = true;
        this.toggleMenu2 = true;
        this.toggleMenu3 = true;
        this.toggleMenu4 = true;
        this.toggleMenu5 = true;
        this.toggleMenu7 = true;
        this.toggleMenu8 = true;
        this.toggleMenu9 = true;
        this.toggleMenu10 = true;
        break;
      case "modul7":
        this.toggleMenu7 = !this.toggleMenu7;
        this.toggleMenu1 = true;
        this.toggleMenu2 = true;
        this.toggleMenu3 = true;
        this.toggleMenu4 = true;
        this.toggleMenu5 = true;
        this.toggleMenu6 = true;
        this.toggleMenu8 = true;
        this.toggleMenu9 = true;
        this.toggleMenu10 = true;
        break;
      case "modul8":
        this.toggleMenu8 = !this.toggleMenu8;
        this.toggleMenu1 = true;
        this.toggleMenu2 = true;
        this.toggleMenu3 = true;
        this.toggleMenu4 = true;
        this.toggleMenu5 = true;
        this.toggleMenu6 = true;
        this.toggleMenu7 = true;
        this.toggleMenu9 = true;
        this.toggleMenu10 = true;
        break;
      case "modul9":
        this.toggleMenu9 = !this.toggleMenu9;
        this.toggleMenu1 = true;
        this.toggleMenu2 = true;
        this.toggleMenu3 = true;
        this.toggleMenu4 = true;
        this.toggleMenu5 = true;
        this.toggleMenu6 = true;
        this.toggleMenu7 = true;
        this.toggleMenu8 = true;
        this.toggleMenu10 = true;
        break;
      case "modul10":
        this.toggleMenu10 = !this.toggleMenu10;
        this.toggleMenu1 = true;
        this.toggleMenu2 = true;
        this.toggleMenu3 = true;
        this.toggleMenu4 = true;
        this.toggleMenu5 = true;
        this.toggleMenu6 = true;
        this.toggleMenu7 = true;
        this.toggleMenu8 = true;
        this.toggleMenu9 = true;
        break;
      default:
        break;
    }

  }

  goHome() {
    this.nav.setRoot(HomePage);
    this.toggleMenu1 = true;
    this.toggleMenu2 = true;
    this.toggleMenu3 = true;
    this.toggleMenu4 = true;
    this.toggleMenu5 = true;
    this.toggleMenu6 = true;
    this.toggleMenu7 = true;
    this.toggleMenu8 = true;
    this.toggleMenu9 = true;
    this.toggleMenu10 = true;
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
