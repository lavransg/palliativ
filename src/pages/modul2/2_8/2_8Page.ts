import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { Page2_7 } from '../2_7/2_7Page';
import { Page2_9 } from '../2_9/2_9Page';


@Component({
  selector: 'page-2-8',
  templateUrl: '2_8Page.html'
})
export class Page2_8 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page2_9
    this.prev = Page2_7

  }

}
