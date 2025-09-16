# First NG App Documentation

This document explains how the Angular project works, its structure, and how to run it.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Key Components](#key-components)
3. [Services](#services)
4. [Models](#models)
5. [Directives and Pipes](#directives-and-pipes)
6. [Running the Application](#running-the-application)

## Project Structure

The project follows a standard Angular structure with the following key directories:

```
src/
├── app/
│   ├── components/      # Reusable UI components
│   ├── directives/      # Custom Angular directives
│   ├── model/           # TypeScript type definitions
│   ├── pipes/           # Custom Angular pipes
│   ├── services/        # Application services
│   ├── home/            # Home page component
│   ├── todos/           # Todos management component
│   ├── app.component.ts # Root component
│   ├── app.config.ts    # Application configuration
│   └── app.routes.ts    # Route definitions
├── index.html           # Main HTML file
├── main.ts              # Main application bootstrap
└── styles.scss          # Global styles
```

## Key Concepts

### Components
Components are the building blocks of an Angular application. They define views and handle user interactions.

#### 1. AppComponent (Root Component)
- `src/app/app.component.ts`: The root component that sets up the application's structure.
- It includes the header and a router outlet for navigation.

#### 2. HomeComponent
- `src/app/home/home.component.ts`: The home page component displayed at the root URL (`/`).
- Shows welcome content or other introductory information.

#### 3. TodosComponent
- `src/app/todos/todos.component.ts`: Manages the todo list functionality.
- Fetches todos from an API on initialization.
- Provides search and filtering capabilities.
- Allows toggling todo completion status.

#### 4. HeaderComponent
- `src/app/components/header/header.component.ts`: The application header displayed at the top of every page.
- Contains navigation links and branding.

#### Other Components
- CounterComponent: A simple counter example.
- GreetingComponent: Displays greeting messages.
- TodosItemComponent: Displays individual todo items within the todos list.

### Services
Services handle business logic, data fetching, and communication with external APIs. They are singleton objects that can be injected into components or other services.

#### TodosService
- `src/app/services/todos.service.ts`: Handles fetching and managing todos data.
- Provides a method to get todos from an external API (JSONPlaceholder).
- Could be extended to include methods for adding, updating, or deleting todos.

### Models
Models define the structure of data used in the application. They ensure type safety and consistency across components and services.

#### Todo Type
- `src/app/model/todo.type.ts`: Defines the structure of a todo item with properties:
  - userId: number
  - completed: boolean
  - title: string
  - id: number

### Directives
Directives add behavior to DOM elements. They can change the appearance, layout, or behavior of elements.

#### HighlightCompletedTodoDirective
- `src/app/directives/highlight-completed-todo.directive.ts`: Adds styling to completed todo items.

## Services

### TodosService
- `src/app/services/todos.service.ts`: Handles fetching and managing todos data.
- Provides a method to get todos from an external API (JSONPlaceholder).
- Could be extended to include methods for adding, updating, or deleting todos.

## Models

### Todo Type
- `src/app/model/todo.type.ts`: Defines the structure of a todo item with properties:
  - userId: number
  - completed: boolean
  - title: string
  - id: number

### Pipes
Pipes transform data in templates. They are used for formatting values, filtering lists, and other data transformations.

#### FilterTodosPipe
- `src/app/pipes/filter-todos.pipe.ts`: Filters the todos list based on a search term.

## Running the Application

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:4200`

The application will automatically reload if you change any of the source files.

## Routes

The application has two main routes:
- `/`: Loads the HomeComponent (home page)
- `/todos`: Loads the TodosComponent for managing todo items

Both components are lazy-loaded for better performance.

## Dependencies

Key dependencies include:
- Angular core framework
- Angular Router for navigation
- HttpClient for API requests
- RxJS for reactive programming

## Development Tools

- TypeScript for static typing and modern JavaScript features
- SCSS for styling with CSS preprocessor capabilities
- Karma and Jasmine for testing

## Project Configuration Files

- `angular.json`: Angular CLI configuration
- `tsconfig.json`: TypeScript compiler options
- `package.json`: NPM dependencies and scripts
