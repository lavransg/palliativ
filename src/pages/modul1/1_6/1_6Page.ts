import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BottomNav } from '../../bottomNav/bottomNav';


import { Page1_5 } from '../1_5/1_5Page';
import { Page1_7 } from '../1_7/1_7Page';


@Component({
  selector: 'page-1-6',
  templateUrl: '1_6Page.html'
})
export class Page1_6 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page1_7
    this.prev = Page1_5

  }

}
