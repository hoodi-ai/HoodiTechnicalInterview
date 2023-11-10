/*** todo-item.component.ts ***/
import { Component, Input, OnInit } from '@angular/core';
import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html'
})
export class TodoItemComponent implements OnInit 
{
  @Input() id?: string;

  private _todo?: Todo;
  get todo() { return this._todo }

  constructor(
    private todoService: TodoService) 
  {}

  ngOnInit(): void 
  {
    this.todoService.GetTodo(this.id!).then(todo => this._todo = todo);
  }
}
