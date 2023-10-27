import { Component } from '@angular/core';
import { RequestService } from '../services/request.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  query!: string;
  data: any;

  constructor(
    private requestService: RequestService,
    private errorService: ErrorService
  ) {}

  searchArtists() {
    this.requestService.getAllArtists(this.query, 5).subscribe((data: any) => {
      this.data = data;
    }),
      (error: HttpErrorResponse) => {
        this.errorService.handleError(error);
      };
  }

  getError(): string {
    return this.errorService.getError();
  }
}
