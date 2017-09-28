import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { IAlbum } from './../../models/album';
import { IPhoto } from './../../models/photo';

@Injectable()
export class AlbumService {

  private _url: string = 'http://jsonplaceholder.typicode.com/albums?userId=';
  private _photosUrl: string = 'http://jsonplaceholder.typicode.com/photos/';
  
  constructor(private _http: Http) { }

  public getUserAlbums(userId: number): Observable<IAlbum[]> {
    return this._http.get(this._url + userId)
               .map((response: Response) => response.json() as IAlbum[]);
  }

  public getAlbumPhotos(albumId: number): Observable<IPhoto[]> {
    let params = { albumId: albumId };
    let options: RequestOptionsArgs = { params: params };
    return this._http.get(this._photosUrl, options)
               .map((response: Response) => response.json() as IPhoto[]);
  }

}
