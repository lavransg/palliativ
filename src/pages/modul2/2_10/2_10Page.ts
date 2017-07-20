import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Page2_9 } from '../2_9/2_9Page';
import { Page2_11 } from '../2_11/2_11Page';

@Component({
  selector: 'page-2-10',
  templateUrl: '2_10Page.html'
})
export class Page2_10 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page2_11
    this.prev = Page2_9

  }

}
