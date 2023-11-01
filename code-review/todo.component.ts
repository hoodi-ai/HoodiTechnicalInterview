import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.types';
import { TodoStore } from '../todo.store';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit 
{
  notCompletedTodos = new Array<Todo>();
  completedTodos = new Array<Todo>();

  private searchValue$ = new Subject<string | undefined>();

  constructor(private todoStore: TodoStore) {}

  ngOnInit(): void 
  {
    this.todoStore.LoadTodos();

    this.todoStore.todos$.pipe(
      map(todos => todos.filter(todo => todo.completed))
    ).subscribe(todos => this.completedTodos = todos);

    this.todoStore.todos$.pipe(
      map(todos => todos.filter(todo => !todo.completed))
    ).subscribe(todos => this.notCompletedTodos = todos);

    this.searchValue$.subscribe(searchValue =>
    {
      this.completedTodos = this.completedTodos.filter(todo => this.DoMatchSearchValue(todo, searchValue));
      this.notCompletedTodos = this.notCompletedTodos.filter(todo => this.DoMatchSearchValue(todo, searchValue));
    });
  }

  onSearch(searchValue: string)
  {
    this.searchValue$.next(searchValue);
  }

  private DoMatchSearchValue(todo: Todo, searchValue: string | undefined): boolean
  {
    let searchTokens = 
      searchValue?.toLowerCase().split(' ').filter(searchToken => searchToken.length > 0);

    for (let token of searchTokens || [])
      if (!todo.title?.toLowerCase().includes(token))
        return false;

    return true;
  }
}

