import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GatewayService {
  public url;
  public currentPlayingSong;
  public queue;

  constructor (private http: Http) {
    this.url = 'http://192.168.137.32:13629/api';
  }

  public gatewayCall(params) {
    if (params.method == 'GET') {
      return this.http.get(`${this.url}/${params.type}`)
        .toPromise()
        .then(response => {
          return response.json();
        })
        .catch(err => err);
    } else {
      let headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });

      return this.http.post(`${this.url}/${params.type}`, params.data)
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

  public nextSong() {
    let index = 0;
    this.queue.forEach((element, key) => {
      if (element.id == this.currentPlayingSong.id) {
        index = key;
      }
    });
    let songToPlay = this.queue[index];
    var params = {
      'type': 'play/song',
      'method': 'POST',
      'data': {
        songId: songToPlay.id
      }
    }
    this.gatewayCall(params).then((response) => {
      this.currentPlayingSong = songToPlay;
    });
  }

}
