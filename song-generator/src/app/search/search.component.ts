import { Component } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  query!: string;

  constructor(private requestService: RequestService) {}

  searchArtists() {
    this.requestService
      .getAllArtists(this.query, 5)
      .subscribe((data: any) => {});
  }
}
