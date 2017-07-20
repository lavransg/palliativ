import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { Page2_6 } from '../2_6/2_6Page';
import { Page2_8 } from '../2_8/2_8Page';


@Component({
  selector: 'page-2-7',
  templateUrl: '2_7Page.html'
})
export class Page2_7 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page2_8
    this.prev = Page2_6

  }

}
