// filter-todos.pipe.ts
//
// This custom pipe filters the list of todos based on a search term:
// - Takes an array of todos and a search string as input.
// - Returns only the todos whose title or description matches the search term.
//
// Used in todos.component.html to filter the displayed todos as the user types.

import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: Todo[], searchTerm: string): Todo[] {
    if (!searchTerm) {
      return todos;
    }
    const text = searchTerm.toLowerCase();
    return todos.filter(todo => todo.title.toLowerCase().includes(text));
  }

}
