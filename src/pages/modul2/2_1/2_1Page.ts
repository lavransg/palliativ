import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Page2_2 } from '../2_2/2_2Page';


@Component({
  selector: 'page-2-1',
  templateUrl: '2_1Page.html'
})
export class Page2_1 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page2_2

  }

}
