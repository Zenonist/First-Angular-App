// todos.component.ts
//
// This component manages the todo list state and logic:
// - Fetches todos from the TodosService on initialization.
// - Stores todos in a signal for reactive updates.
// - Provides a searchTerm signal for filtering.
// - Handles updating todo completion state when toggled.
//
// The template (todos.component.html) displays the UI and binds to these signals.
// Filtering is performed using the filterTodos pipe.

import { Component, inject, input, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';
import { TodosItemComponent } from '../components/todos-item/todos-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  // Remove NgIf in case that we use @if directive instead | FormsModule
  // imports: [NgIf],
  imports: [TodosItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  // Define a signal to store the todo items with empty array as initial value
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

  // Allow to run function when the component is initialized
  ngOnInit(): void {
    this.todoService
      .getTodosFromAPI()
      .pipe(
        catchError((error) => {
          console.error('Error:', error);
          throw error;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }

  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  }
}
