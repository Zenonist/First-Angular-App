import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoItems: Array<Todo> = [{
    title: 'grocery shopping',
    id: 1,
    userId: 1,
    completed: false
  }]
  constructor() {}
}
