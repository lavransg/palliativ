import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Page2_10 } from '../2_10/2_10Page';
import { Page2_12 } from '../2_12/2_12Page';


@Component({
  selector: 'page-2-11',
  templateUrl: '2_11Page.html'
})
export class Page2_11 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page2_12
    this.prev = Page2_10

  }

}
