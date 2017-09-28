import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ITodo } from './../../models/todo';
import { TodoService } from './../../services/todo/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos: ITodo[];
  public isLoading: boolean = true;

  constructor(private _todoService: TodoService, private _route: ActivatedRoute) { }

  public ngOnInit() {
    this._route.queryParams.subscribe((queryParams) => {
      let userId = +queryParams['userId'];
      this._todoService.getUserTodos(userId)
          .subscribe((todos: ITodo[]) => {
            this.todos = todos;
            this.isLoading = false;
          });
    });
  }

}
