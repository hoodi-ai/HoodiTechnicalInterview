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

  async ListTodos()
  {
    var response = await fetch('https://jsonplaceholder.typicode.com/todos');
    var todos = await response.json();

    return todos;
  }

  async GetTodo(id: string)
  {
    var response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    var todo = await response.json();

    return todo;
  }
}
