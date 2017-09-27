import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { IAlbum } from './../../models/album';

@Injectable()
export class AlbumService {

  private _url: string = 'http://jsonplaceholder.typicode.com/albums?userId=';
  
  constructor(private _http: Http) { }

  public getUserAlbums(userId: number): Observable<IAlbum[]> {
    return this._http.get(this._url + userId)
               .map((response: Response) => response.json() as IAlbum[]);
  }

}
