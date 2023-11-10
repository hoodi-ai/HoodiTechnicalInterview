/*** todo.service.ts ***/
import { Injectable } from '@angular/core';

export type Todo =
{
  id?: string,
  title?: string,
  completed?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodoService 
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

  async GetTodo(id: string)
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
}
