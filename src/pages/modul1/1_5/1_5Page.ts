import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BottomNav } from '../../bottomNav/bottomNav';

import { Page1_4 } from '../1_4/1_4Page';
import { Page1_6 } from '../1_6/1_6Page';

@Component({
  selector: 'page-1-5',
  templateUrl: '1_5Page.html'
})
export class Page1_5 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page1_6
    this.prev = Page1_4

  }

}
