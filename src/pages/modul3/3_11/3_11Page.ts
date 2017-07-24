import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-3-11',
  templateUrl: '3_11Page.html'
})
export class Page3_11 {

  bmi: any;
  weight: any;
  height: any;

  constructor(public navCtrl: NavController) {

  }

  updateBmi(){
    if (this.weight && this.height){
      this.bmi = (this.weight / ((this.height/100)*(this.height/100))).toFixed(2)
    }
  }

}
