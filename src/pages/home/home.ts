import { AuthService  } from '../../providers/authservice/authservice';
import { Component } from '@angular/core';
import { App, NavController, IonicPage, AlertController, LoadingController, ToastController } from 'ionic-angular';
//import { FileTransfer } from '@ionic-native/file-transfer';
//import { Camera } from '@ionic-native/camera';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HomescreenPage } from '../homescreen/homescreen';
import { SuccessPage } from '../success/success';
import { FailPage } from '../fail/fail';
import { Common } from "../../providers/common";

import { BarcodeScannerOptions, BarcodeScanner }  from '@ionic-native/barcode-scanner';

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable()


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
 // @ViewChild("updatebox") updatebox;

    encodeData: any;
    scannedData: {};
    scannedUserData: {};

    barcodeScannerOptions: BarcodeScannerOptions;
  public featurevideoposts:any;
  public matchscheduleposts:any;
  public topheadlineposts:any;
  public userDetails: any;
  public resposeData: any;
  public resposePostData: any;
  public dataSet: any;
  public noRecords: boolean;
  public base64Image : string;
  // posts: any;
  //resposeData: any;
    userData = {"eventid": "","spaceid":"", "userid":""};
    //userdetail = {"spacedata": ""};

  constructor(
      private storage: Storage,
      public alertCtrl: AlertController,
      public nav: NavController,
      public http: Http,
      public app: App,
      public authService:AuthService,
      public common: Common, public toastCtrl: ToastController, public loadingCtrl: LoadingController,
      private barcodeScanner: BarcodeScanner) {
   this.encodeData = "https://www.FreakyJolly.com";
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
}


ngOnInit() {
}



    scan() {
          this.storage.clear();
   /* this.storage.set('eventid', '376');
    this.storage.set('spaceid', '28');*/
		const options = {
            preferFrontCamera: false, // iOS and Android
            showFlipCameraButton: true, // iOS and Android
            showTorchButton: true, // iOS and Android
            torchOn: false, // Android, launch with the torch switched on (if available)
            prompt: 'Place a barcode inside the scan area', // Android
            // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            resultDisplayDuration: 500,
            formats: 'QR_CODE,PDF_417', // default: all but PDF_417 and RSS_EXPANDED
            // Android only (portrait|landscape), default unset so it rotates with the device
            orientation: 'portrait',
            disableAnimations: true, // iOS
            disableSuccessBeep: false // iOS
        };

        this.barcodeScanner
            .scan(options)
            .then((data) => {
                this.scannedData = data;
               // const newdata = JSON.stringify(data.text);
                var scan_data1 = data.text;
                var scan_data = scan_data1.split(' ');
                var scan_data2 = scan_data[2].replace('Space', '');
                var scan_data3 = scan_data[4].replace('Event', '');
                this.storage.set('eventid', scan_data2);
                this.storage.set('spaceid', scan_data3);

               /* const alert = this.alertCtrl.create({
                    title: 'Scan Results',
                  //  subTitle: newdata ,
                   subTitle: "Event Id : " + scan_data2  + "Space Id : " + scan_data3,
                    buttons: ['OK']
                });
                alert.present();*/
            })
            .catch((err) => {
                const alert = this.alertCtrl.create({
                    title: 'Attention!',
                    subTitle: err,
                    buttons: ['Close']
                });
                alert.present();
            });	
    }



    userscan() {
       // this.storage.clear();
      /* this.storage.set('userid', '419');*/
        const options = {
            preferFrontCamera: false, // iOS and Android
            showFlipCameraButton: true, // iOS and Android
            showTorchButton: true, // iOS and Android
            torchOn: false, // Android, launch with the torch switched on (if available)
            prompt: 'Place a barcode inside the scan area', // Android
            // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            resultDisplayDuration: 500,
            formats: 'QR_CODE,PDF_417', // default: all but PDF_417 and RSS_EXPANDED
            // Android only (portrait|landscape), default unset so it rotates with the device
            orientation: 'portrait',
            disableAnimations: true, // iOS
            disableSuccessBeep: false // iOS
        };

        this.barcodeScanner
            .scan(options)
            .then((data) => {
                this.scannedUserData = data;
            //  const newdata = JSON.stringify(data.text);

                var scan_data1 = data.text;
                var scan_data = scan_data1.split(' ');
                var scan_data2 = scan_data[2].replace('First', '');
                this.storage.set('userid', scan_data2);
                /*const alert = this.alertCtrl.create({
                    title: 'Scan Results',
                    subTitle: JSON.stringify(scan_data),
                    buttons: ['OK']
                });
                alert.present();*/


            })
            .catch((err) => {
                const alert = this.alertCtrl.create({
                    title: 'Attention!',
                    subTitle: err,
                    buttons: ['Close']
                });
                alert.present();
            });
    }
    encodedText() {
        this.barcodeScanner
            .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
            .then(
                encodedData => {
                    console.log(encodedData);
                    this.encodeData = encodedData;

                    const alert = this.alertCtrl.create({
                        title: 'Scan Results',
                        subTitle: encodedData,
                        buttons: ['OK']
                    });
                    alert.present();
                    this.nav.push(SuccessPage);
                },
                err => {
                    console.log("Error occured : " + err);
                }
            );

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
backToWelcome(){
  //  const root = this.app.getRootNav();
  //  root.popToRoot();

  this.nav.push(HomescreenPage);
}

logout(){
  
     localStorage.clear();
     setTimeout(() => this.backToWelcome(), 1000);
}

newsfeeds(){
  //  const root = this.app.getRootNav();
  //  root.popToRoot();
  this.nav.push(HomePage);
}

gotoSuccess(){


    Promise.all([this.storage.get("eventid"), this.storage.get("spaceid"),this.storage.get('userid')]).then(values => {

       /* const alert = this.alertCtrl.create({
            title: 'Scan Results',
            subTitle: "Event id : " + values[0] + " Spaceid " + values[1] + " Userid " + values[2],
            buttons: ['OK']
        });

        alert.present();*/
        if(values[0] != null  && values[1] != null && values[2] != null) {

            this.userData.eventid = values[0];
            this.userData.spaceid = values[1];
            this.userData.userid = values[2];


            /*  this.userData.eventid= '376';
                this.userData.spaceid= '28';
                this.userData.userid= '49';*/

            console.log(this.userData);
            this.authService.postData(JSON.stringify(this.userData), "checkdata.php").then((result) => {
                this.resposeData = result;

                if (this.resposeData.status === true) {
                    console.log(this.resposeData);
                    localStorage.setItem('userdetail', JSON.stringify(this.resposeData))
                    this.nav.push(SuccessPage);
                } else {
                    this.nav.push(FailPage);
                }


            })

        }else if(values[0] == null  && values[1]== null && values[2] == null) {
            const alert = this.alertCtrl.create({
                title: 'No Scan Results',
                subTitle: "Please Scan again ",
                buttons: ['OK']
            });
            alert.present();
        } // every other thing can happen here e.g call a method

    });
   //this.nav.push(SuccessPage);

}
gotoFail(){
  this.nav.push(FailPage);
}

    showNewAlert() {
        const alert = this.alertCtrl.create({
            title: 'No!',
            subTitle: 'Data Available',
            buttons: ['OK']
        });
        alert.present();
    }


}
