import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BottomNav } from '../../bottomNav/bottomNav';

import { Page1_6 } from '../1_6/1_6Page';
import { Page1_8 } from '../1_8/1_8Page';


@Component({
  selector: 'page-1-7',
  templateUrl: '1_7Page.html'
})
export class Page1_7 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page1_8
    this.prev = Page1_6

  }

}
