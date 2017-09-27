import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ITodo } from './../../models/todo';

@Injectable()
export class TodoService {

  private _url: string = 'http://jsonplaceholder.typicode.com/todos?userId=';

  constructor(private _http: Http) { }

  public getUserTodos(userId: number): Observable<ITodo[]> {
    return this._http.get(this._url + userId)
               .map((response: Response) => response.json() as ITodo[])
  }

}
