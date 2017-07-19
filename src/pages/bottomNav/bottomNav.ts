import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, Platform } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'bottom-nav',
  inputs: ['prev','next'],
  template:
  `
  <br><br>
  <ion-row width-100>
    <ion-col center text-center width-50>

    <div *ngIf="prev">
      <button ion-button icon-left clear small (click)="goToPage(prev)">
        <ion-icon name="arrow-back"></ion-icon>
        <div>Forrige</div>
      </button>
    </div>

    </ion-col>
    <ion-col center text-center width-50>

      <div *ngIf="next">
      <button ion-button icon-right clear small (click)="goToPage(next)" >
        <div>Neste</div>
        <ion-icon name="arrow-forward"></ion-icon> 
      </button>
      </div>

    </ion-col>
  </ion-row>
  `
})
export class BottomNav {
  constructor(public navCtrl: NavController) {   
  }

  goToPage(page){
    this.navCtrl.setRoot(page);
  }
}