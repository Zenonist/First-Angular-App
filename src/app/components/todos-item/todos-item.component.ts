import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todos-item',
  imports: [HighlightCompletedTodoDirective, UpperCasePipe],
  templateUrl: './todos-item.component.html',
  styleUrl: './todos-item.component.scss',
})
export class TodosItemComponent {
  todo = input.required<Todo>();
  todoToggled = output<Todo>();

  todoClicked() {
    this.todoToggled.emit(this.todo());
  }
}
