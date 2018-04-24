import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuoteService } from "../../service/quotes";
import { SportsPage } from '../sports/sports';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public quotes:QuoteService) {
      console.log(this.quotes.data);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  gotoSports():any{
    this.navCtrl.push(SportsPage);
  }

}
