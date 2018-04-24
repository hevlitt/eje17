import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuoteService } from "../../service/quotes";
import { WelcomePage } from "../welcome/welcome";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public email: string;
  public error: boolean = false;

  constructor(public navCtrl: NavController, public quotes: QuoteService) {
    this.quotes.getFavoriteSports();
    this.email = "holliver.v@gmail.com";
  }

  login(): void {
    //comparar email capturado vs email en server
    if (this.email == this.quotes.data.email) {
      console.log("Todo bien!!!");
      this.error = false;
      this.navCtrl.push(WelcomePage);

    } else {
      console.log("Todo mal chavo")
      this.error = true;
    }
  }
}
