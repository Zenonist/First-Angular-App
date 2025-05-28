// todo.type.ts
//
// This file defines the Todo type (interface) used throughout the application.
// It specifies the structure of a todo item with the following properties:
//
// - userId: A number representing the ID of the user who created this todo
// - completed: A boolean indicating whether the todo is completed or not
// - title: A string containing the title/description of the todo
// - id: A number serving as a unique identifier for each todo item

export type Todo = {
  userId: number;
  completed: boolean;
  title: string;
  id: number;
}
