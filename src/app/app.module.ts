import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from "@angular/http";
import { QuoteService } from '../service/quotes';
import { WelcomePage } from '../pages/welcome/welcome';
import { SportsPage } from '../pages/sports/sports';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    SportsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    SportsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QuoteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
