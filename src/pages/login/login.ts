
import { Component } from '@angular/core';
import { AuthService  } from '../../providers/authservice/authservice';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HomescreenPage } from '../homescreen/homescreen';




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
   // public userData: Array<any> = [];
    resposeData : any;
  userData = {"username":"", "password":""};
  //userData = {"username":"shweta", "password":"e10adc3949ba59abbe56e057f20f883e"};


  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public authService: AuthService, public alertCtrl: AlertController) {
  }



  backtomain()
      {
          this.navCtrl.push(HomescreenPage);
      }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad Login');
  }

  login(){
   this.presentLoading();
   if(this.userData.username && this.userData.password){

       console.log(this.userData.username);

    this.authService.postData(JSON.stringify(this.userData), "login.php").then((result) =>{
    this.resposeData = result;
    if(this.resposeData.status == true){
      console.log(this.resposeData.userData);
     localStorage.setItem('userData', JSON.stringify(this.resposeData) )
    this.navCtrl.push(HomePage);
  }
  else{
    this.showAlert();
  }
    


    }, (err) => {
      //Connection failed message
    });
   }
   else{
    this.showAlert();
   }
  
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

    showAlert() {
        const alert = this.alertCtrl.create({
            title: 'Incorrect!',
            subTitle: 'Username and Password',
            buttons: ['OK']
        });
        alert.present();
    }


}
