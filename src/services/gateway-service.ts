import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GatewayService {
  public url;
  public currentPlayingSong;
  public queue;

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

  public playSong(song) {
    var params = {
      'type': 'play/song',
      'method': 'POST',
      'data': {
        songId: song.id
      }
    }
    this.gatewayCall(params).then((response) => {
      this.currentPlayingSong = song;
    });
  }

  public pauseSong() {
    var params = {
      'type': 'pause',
      'method': 'POST',
    }
    this.gatewayCall(params).then((response) => {
      // this.currentPlayingSong = song;
    });
  }

}
