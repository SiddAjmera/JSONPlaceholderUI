import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IUser } from '../../models/user';

@Injectable()
export class UserService {

  private _url = 'http://jsonplaceholder.typicode.com/users/'

  constructor(private _http: Http) { }

  public getUser(id: number): Observable<IUser> {
    return this._http.get(this._url + id || '1')
               .map((response: Response) => response.json() as IUser);
  }

  public getUserBy(field: string, value: any): Observable<IUser> {
    let params = {};
    params[field] = value;
    let options: RequestOptionsArgs = { params: params };

    return this._http.get(this._url, options)
               .map((response: Response) => response.json()[0] as IUser);
  }

}
