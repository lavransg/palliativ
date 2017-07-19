import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BottomNav } from '../../bottomNav/bottomNav';

import { Page1_8 } from '../1_8/1_8Page';


@Component({
  selector: 'page-1-9',
  templateUrl: '1_9Page.html'
})
export class Page1_9 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {

    this.prev = Page1_8

  }

}
