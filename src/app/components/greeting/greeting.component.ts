import { Component, input } from '@angular/core';

/**
 * GreetingComponent - A simple component that displays a greeting message.
 */
@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent {
  /**
   * Input property to receive the greeting message from parent component.
   * Defaults to 'Default greeting message' if not provided.
   */
  message = input('Default greeting message');
}
