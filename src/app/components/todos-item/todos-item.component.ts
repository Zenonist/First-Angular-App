import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';

@Component({
  selector: 'app-todos-item',
  imports: [HighlightCompletedTodoDirective],
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
