import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { Page2_8 } from '../2_8/2_8Page';
import { Page2_10 } from '../2_10/2_10Page';


@Component({
  selector: 'page-2-9',
  templateUrl: '2_9Page.html'
})
export class Page2_9 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page2_10
    this.prev = Page2_8

  }

}
