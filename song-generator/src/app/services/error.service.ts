import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private error: string = '';

  getError() {
    return this.error;
  }

  setError(error: string) {
    this.error = error;
  }

  handleError(error: HttpErrorResponse | any) {
    if (error.status === 401) {
      this.setError('Bad or expired token.');
    } else if (error.status === 403) {
      this.setError('Bad OAuth request.');
    } else if (error.status === 429) {
      this.setError('The app has exceeded its rate limits.');
    } else if (error.status === 504) {
      this.setError('Gateway Timeout.');
    } else if (error.status === 0) {
      this.setError('No internet connection.');
    } else {
      this.setError(error);
    }
  }
}
