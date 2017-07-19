import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BottomNav } from '../../bottomNav/bottomNav';
import { Page1_1 } from '../1_1/1_1Page';
import { Page1_3 } from '../1_3/1_3Page';

@Component({
  selector: 'page-1-2',
  templateUrl: '1_2Page.html'
})
export class Page1_2 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page1_3
    this.prev = Page1_1

  }

}
