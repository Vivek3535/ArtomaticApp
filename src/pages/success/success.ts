import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomescreenPage } from '../homescreen/homescreen';


/**
 * Generated class for the SuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-success',
  templateUrl: 'success.html',
})
export class SuccessPage {
  resposeData: any;
  userdetail= {"space_name":this.resposeData,"space_time":this.resposeData};
  constructor(public navCtrl: NavController, public navParams: NavParams, public nav: NavController) {

    const data = JSON.parse(localStorage.getItem('userdetail'));
    console.log(data);
    // this.userdetail= data.spacedata;
    this.userdetail= data;
    //this.userdetail= data.spacedata.space_name;

  }

  ionViewDidLoad() {
    localStorage.getItem('userdetail');
    console.log( this.userdetail);
  }

  backToWelcome(){
    this.nav.push(HomescreenPage);
  }
  logout(){  
    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 1000);
  }

}
