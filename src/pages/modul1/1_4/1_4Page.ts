import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BottomNav } from '../../bottomNav/bottomNav';

import { Page1_3 } from '../1_3/1_3Page';
import { Page1_5 } from '../1_5/1_5Page';


@Component({
  selector: 'page-1-3',
  templateUrl: '1_4Page.html'
})
export class Page1_4 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page1_5
    this.prev = Page1_3

  }

}
