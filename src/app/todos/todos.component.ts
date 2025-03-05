import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';
import { TodosItemComponent } from '../components/todos-item/todos-item.component';

@Component({
  selector: 'app-todos',
  // Remove NgIf in case that we use @if directive instead
  // imports: [NgIf],
  imports: [TodosItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit{
  todoService = inject(TodosService);
  // Define a signal to store the todo items with empty array as initial value
  todoItems = signal<Array<Todo>>([]);

  // Allow to run function when the component is initialized
  ngOnInit(): void {
    this.todoService.getTodosFromAPI().pipe(
      catchError((error) => {
        console.error('Error:', error);
        throw error;
      })
    ).subscribe((todos) => {
      this.todoItems.set(todos);
    });
  }

  updateTodoItem(todoItem: Todo){
    console.log("A")
    this.todoItems.update((todos) => {
      return todos.map(todo => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo
      })
    })
  }
}
