import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Page2_16 } from '../2_16/2_16Page';

@Component({
  selector: 'page-2-17',
  templateUrl: '2_17Page.html'
})
export class Page2_17 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.prev = Page2_16

  }

}
