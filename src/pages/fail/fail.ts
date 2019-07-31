import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomescreenPage } from '../homescreen/homescreen';
import { HomePage } from '../home/home';

/**
 * Generated class for the FailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fail',
  templateUrl: 'fail.html',
})
export class FailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public nav: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FailPage');
  }

  backToWelcome(){
    this.nav.push(HomescreenPage);
  }
  logout(){  
    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 1000);
  }
  gotoHome(){
    this.nav.push(HomePage);
  }

}
