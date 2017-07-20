import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { Page2_15 } from '../2_15/2_15Page';
import { Page2_17 } from '../2_17/2_17Page';

@Component({
  selector: 'page-2-16',
  templateUrl: '2_16Page.html'
})
export class Page2_16 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page2_17
    this.prev = Page2_15

  }

}
