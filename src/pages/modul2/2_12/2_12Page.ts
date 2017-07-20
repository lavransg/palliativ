import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Page2_11 } from '../2_11/2_11Page';
import { Page2_13 } from '../2_13/2_13Page';


@Component({
  selector: 'page-2-12',
  templateUrl: '2_12Page.html'
})
export class Page2_12 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page2_13
    this.prev = Page2_11

  }

}
