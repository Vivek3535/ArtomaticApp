import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

//let apiUrl = 'http://sfc.dimensiongraphic.com/sfc-app/api/';
//let apiUrl = 'http://localhost/PHP-Slim-Restful-master/api/';
let apiUrl = 'https://www.artomatic.org/api/user/';

@Injectable()
export class AuthService {
 
  constructor(public http : Http) {
    //console.log('Hello AuthService Provider');
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + type, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

}