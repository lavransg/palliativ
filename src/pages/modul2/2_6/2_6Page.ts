import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Page2_5 } from '../2_5/2_5Page';
import { Page2_7 } from '../2_7/2_7Page';


@Component({
  selector: 'page-2-6',
  templateUrl: '2_6Page.html'
})
export class Page2_6 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page2_7
    this.prev = Page2_5

  }

}
