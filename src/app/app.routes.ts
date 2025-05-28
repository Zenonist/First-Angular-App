// app.routes.ts
//
// This file defines the application routes using Angular Router.
// It specifies which components should be loaded for different URL paths.
//
// Routes defined:
// - Empty path (''): Loads HomeComponent (home page)
// - '/todos': Loads TodosComponent (todo management page)

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', // Home route (empty path)
    pathMatch: 'full', // Ensures this route only matches when the entire URL is empty
    loadComponent: () => {
      return import('./home/home.component').then((m) => m.HomeComponent);
    } // Lazy loads the HomeComponent for the home page
  },
  {
    path: 'todos', // Route for the todos page
    loadComponent: () => {
      return import('./todos/todos.component').then((m) => m.TodosComponent);
    } // Lazy loads the TodosComponent for managing todo items
  }
];
