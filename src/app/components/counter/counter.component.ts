import { Component, signal } from '@angular/core';

/**
 * CounterComponent - A simple counter component that allows incrementing,
 * decrementing, and resetting a counter value.
 */
@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  /**
   * Signal to hold the current counter value, initialized to 0.
   */
  counterValue = signal(0);

  /**
   * Increments the counter value by 1.
   */
  increment() {
    this.counterValue.update((val) => val + 1);
  }

  /**
   * Decrements the counter value by 1.
   */
  decrement() {
    this.counterValue.update((val) => val - 1);
  }

  /**
   * Resets the counter value to 0.
   */
  reset() {
    this.counterValue.set(0);
  }
}
