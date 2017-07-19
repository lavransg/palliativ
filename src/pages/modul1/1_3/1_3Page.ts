import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BottomNav } from '../../bottomNav/bottomNav';

import { Page1_2 } from '../1_2/1_2Page';
import { Page1_4 } from '../1_4/1_4Page';



@Component({
  selector: 'page-1-3',
  templateUrl: '1_3Page.html'
})
export class Page1_3 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page1_4
    this.prev = Page1_2

  }

}
