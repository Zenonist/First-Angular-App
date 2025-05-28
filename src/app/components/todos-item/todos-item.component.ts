// todos-item.component.ts
//
// This component represents a single todo item in the list:
// - Receives a todo object as input.
// - Emits an event when the todo is toggled (completed/uncompleted).
// - Handles UI for displaying the todo and its completed state.
//
// Used by the parent todos.component to render each todo in the list.
//
// This component is displayed as part of the /todos route, where the todo list is shown.

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
