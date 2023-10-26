import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private error: string = '';

  getError() {
    return this.error;
  }
}
