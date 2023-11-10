/*** todo-item.component.ts ***/
import { Component, Input, OnInit } from '@angular/core';
import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'todo-item',
  template: `
    <div style="background-color: cornflowerblue;">
      <h4>{{todo?.title}}<span *ngIf="todo?.completed"> ✓</span></h4>
    </div>
  `
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
