import { HttpModule } from '@angular/http';
import { AuthService } from '../providers/authservice/authservice';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { MyApp } from './app.component';
import { HomescreenPage } from '../pages/homescreen/homescreen';
import { Login } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { SuccessPage } from '../pages/success/success';
import { FailPage } from '../pages/fail/fail';
//import { ShareService } from '../app/shareservice';
//import { MomentModule } from 'angular2-moment';
//import { LinkyModule } from 'angular-linky';
import { Common } from '../providers/common';
import { SplitPane } from '../providers/split-pane';
//import { VideoPlayer } from '@ionic-native/video-player';
//import { SocialSharing } from '@ionic-native/social-sharing';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [  
    HomescreenPage,
    MyApp, 
    Login,
    HomePage,
    SuccessPage,
    FailPage,
  ],
  imports: [ 
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp), 
    //MomentModule,
    //LinkyModule,
    IonicStorageModule.forRoot(),
  ], 
  bootstrap: [IonicApp],
  entryComponents: [
    HomescreenPage, 
    MyApp,
    Login,
    HomePage,
    SuccessPage,
    FailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Common,
	//VideoPlayer,
    SplitPane,

    BarcodeScanner,
      {provide: ErrorHandler, useClass: IonicErrorHandler,},
    //{provide: RouteReuseStrategy, useClass: IonicRouteStrategy,},
    AuthService,
    //ShareService,
	//SocialSharing
  ]
})
export class AppModule {}
