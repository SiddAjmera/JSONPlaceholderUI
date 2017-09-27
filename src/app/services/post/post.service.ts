import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { IPost } from './../../models/post';

@Injectable()
export class PostService {

  private _url: string = 'http://jsonplaceholder.typicode.com/posts?userId=';
  
  constructor(private _http: Http) { }

  public getUserPosts(userId: number): Observable<IPost[]> {
    return this._http.get(this._url + userId)
               .map((response: Response) => response.json() as IPost[]);
  }

}
