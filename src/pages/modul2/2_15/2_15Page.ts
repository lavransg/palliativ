import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { Page2_14 } from '../2_14/2_14Page';
import { Page2_16 } from '../2_16/2_16Page';


@Component({
  selector: 'page-2-15',
  templateUrl: '2_15Page.html'
})
export class Page2_15 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page2_16
    this.prev = Page2_14

  }

}
