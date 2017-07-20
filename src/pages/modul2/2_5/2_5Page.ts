import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Page2_4 } from '../2_4/2_4Page';
import { Page2_6 } from '../2_6/2_6Page';


@Component({
  selector: 'page-2-5',
  templateUrl: '2_5Page.html'
})
export class Page2_5 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page2_6
    this.prev = Page2_4

  }

}
