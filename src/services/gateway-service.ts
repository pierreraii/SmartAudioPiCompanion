import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  public url;

  constructor (private http: Http) {
    this.url = '';
  }

  public gatewayCall(params) {
    if (params.method == 'GET') {
      return this.http.get(this.url)
        .toPromise()
        .then(response => {
          return response.json();
        })
        .catch(err => err);
    } else {
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });

      return this.http.post(this.url, params.data)
        .toPromise()
        .then(response => {
          return response.json();
        })
        .catch(err => err);
    }
  }

}
