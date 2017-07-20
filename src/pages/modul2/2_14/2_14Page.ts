import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Page2_13 } from '../2_13/2_13Page';
import { Page2_15 } from '../2_15/2_15Page';


@Component({
  selector: 'page-2-14',
  templateUrl: '2_14Page.html'
})
export class Page2_14 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page2_15
    this.prev = Page2_13

  }

}
