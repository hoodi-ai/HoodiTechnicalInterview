import { Injectable } from '@angular/core';
import { Todo } from './todo.types';

@Injectable({
  providedIn: 'root'
})
export class TodoEndpoint
{
  constructor() {}

  ListTodos()
  {
    return new Promise<any>((resolve) =>
    {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) =>
        {
          response.json().then((todos) => resolve(todos));
        });
    });
  }

  GetTodo(id: string)
  {
    return new Promise<any>((resolve) =>
    {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) =>
        {
          response.json().then((todos) => resolve(todos));
        });
    });
  }

  UpdateTodo(todo: Todo)
  {
    return new Promise<any>((resolve) =>
    {
      // This is a placeholder only, don't review this code
      setTimeout(() => resolve("Update succeeded"), 100);
    });
  }
}
