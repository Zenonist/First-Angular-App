import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * HeaderComponent - A component that displays the application header with a title.
 */
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  /**
   * Signal to hold the application title.
   */
  title = signal("My first Angular App");
}
