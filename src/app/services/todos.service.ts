// todos.service.ts
//
// This service handles fetching and managing todos data:
// - Provides methods to fetch todos from an API or local source.
// - Can provide methods to add, update, or delete todos.
//
// Used by the todos.component to load and manage todo data.

import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient);
  getTodosFromAPI() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Array<Todo>>(url);
  }
}
