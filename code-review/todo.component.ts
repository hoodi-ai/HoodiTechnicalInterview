/*** todo.component.ts ***/
import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit 
{
  todos = new Array<Todo>();

  get notCompletedTodos()
  {
    return this.todos.filter(todo => !todo.completed && this._doMatchSearchValue(todo));
  }

  get completedTodos()
  {
    return this.todos.filter(todo => todo.completed && this._doMatchSearchValue(todo));
  }

  private _searchValue = "";

  constructor(private todoService: TodoService) {}

  ngOnInit(): void 
  {
    this.todoService.ListTodos().then(todos => this.todos = todos);
  }

  onSearch(searchValue: string)
  {
    this._searchValue = searchValue;
  }

  private _doMatchSearchValue(todo: Todo): boolean
  {
    let searchTokens = 
      this._searchValue.toLowerCase().split(' ').filter(searchToken => searchToken.length > 0);

    for (let token of searchTokens)
      if (!todo.title?.toLowerCase().includes(token))
        return false;

    return true;
  }
}
