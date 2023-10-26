import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  getGreeting(): string {
    const date = new Date();
    let hour = date.getHours();

    if (hour >= 0 && hour < 5) {
      return 'Good night';
    } else if (hour < 12) {
      return 'Good morning';
    } else if (hour < 18) {
      return 'Good day';
    } else if (hour < 22) {
      return 'Good evening';
    } else {
      return 'Good night';
    }
  }
}
