import { Component } from '@angular/core';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent {
  constructor(private errorService: ErrorService) {}

  onClose() {
    this.errorService.setError('');
  }
}
