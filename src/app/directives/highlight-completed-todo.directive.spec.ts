// This is a unit test file for the HighlightCompletedTodoDirective.
// It tests if an instance of the directive can be created successfully.

import { HighlightCompletedTodoDirective } from './highlight-completed-todo.directive';

describe('HighlightCompletedTodoDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightCompletedTodoDirective();
    expect(directive).toBeTruthy();
  });
});
