import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BottomNav } from '../../bottomNav/bottomNav';
import { Page1_2 } from '../1_2/1_2Page';

@Component({
  selector: 'page-1-1',
  templateUrl: '1_1Page.html'
})
export class Page1_1 {

  next: any;
  prev: any;

  constructor(public navCtrl: NavController) {
    this.next = Page1_2

  }

}
