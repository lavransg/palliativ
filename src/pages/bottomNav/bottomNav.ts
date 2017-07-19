import {Component} from '@angular/core';

@Component({
  selector: 'bottom-nav',
  inputs: ['prev','next'],
  template:
  `
  <br><br>
  <ion-row width-100>
    <ion-col center text-center width-50>

    <div *ngIf="prev">
      <button ion-button icon-left clear small>
        <ion-icon name="arrow-back"></ion-icon>
        <div>Forrige</div>
      </button>
    </div>

    </ion-col>
    <ion-col center text-center width-50>

      <div *ngIf="next">
      <button ion-button icon-right clear small>
        <div>Neste</div>
        <ion-icon name="arrow-forward"></ion-icon> 
      </button>
      </div>

    </ion-col>
  </ion-row>
  `
})
export class BottomNav {
  constructor() {   
  }
}