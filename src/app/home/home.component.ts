// home.component.ts
//
// This is the TypeScript file for the HomeComponent.
// It contains the component logic, including:
// - A signal for the greeting message
// - A method to handle keyup events from an input field

import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMessage = signal("Hello, World!");

  keyUpHandler(event: KeyboardEvent) {
    console.log(`user typed the ${event.key} in the input`);
  }
}
