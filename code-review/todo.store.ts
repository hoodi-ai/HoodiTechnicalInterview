import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './todo.types';
import { TodoEndpoint } from './todo.endpoint';

@Injectable({
  providedIn: 'root'
})
export class TodoStore
{
  todos$ = new BehaviorSubject<ReadonlyArray<Todo>>([]);

  get todos() { return this.todos$.value; }

  constructor(
    private todoEndpoint: TodoEndpoint)
  {}

  LoadTodos()
  {
    this.todoEndpoint.ListTodos().then(todos => this.todos$.next(todos));
  }

  UpdateTodo(todo: Todo)
  {
    this.todoEndpoint.UpdateTodo(todo).then(() =>
    {
      this.todos$.next([...this.todos])
    })
  }
}
