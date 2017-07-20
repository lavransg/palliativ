import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { Page2_12 } from '../2_12/2_12Page';
import { Page2_14 } from '../2_14/2_14Page';


@Component({
  selector: 'page-2-13',
  templateUrl: '2_13Page.html'
})
export class Page2_13 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page2_14
    this.prev = Page2_12

  }

}
