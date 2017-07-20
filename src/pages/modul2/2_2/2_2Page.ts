import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Page2_1 } from '../2_1/2_1Page';
import { Page2_3 } from '../2_3/2_3Page';


@Component({
  selector: 'page-2-2',
  templateUrl: '2_2Page.html'
})
export class Page2_2 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page2_3
    this.prev = Page2_1

  }

}
