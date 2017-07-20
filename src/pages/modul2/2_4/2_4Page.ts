import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { Page2_3 } from '../2_3/2_3Page';
import { Page2_5 } from '../2_5/2_5Page';


@Component({
  selector: 'page-2-3',
  templateUrl: '2_4Page.html'
})
export class Page2_4 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page2_5
    this.prev = Page2_3

  }

}
