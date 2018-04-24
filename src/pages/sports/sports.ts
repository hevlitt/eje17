import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuoteService } from "../../service/quotes";

@IonicPage()
@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html',
})
export class SportsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public quotes: QuoteService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SportsPage');
  }

}
