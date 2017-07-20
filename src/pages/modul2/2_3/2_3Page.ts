import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { Page2_2 } from '../2_2/2_2Page';
import { Page2_4 } from '../2_4/2_4Page';


@Component({
  selector: 'page-2-3',
  templateUrl: '2_3Page.html'
})
export class Page2_3 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page2_4
    this.prev = Page2_2

  }

}
