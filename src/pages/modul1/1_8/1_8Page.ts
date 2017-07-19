import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BottomNav } from '../../bottomNav/bottomNav';

import { Page1_7 } from '../1_7/1_7Page';
import { Page1_9 } from '../1_9/1_9Page';

@Component({
  selector: 'page-1-8',
  templateUrl: '1_8Page.html'
})
export class Page1_8 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page1_9
    this.prev = Page1_7

  }

}
