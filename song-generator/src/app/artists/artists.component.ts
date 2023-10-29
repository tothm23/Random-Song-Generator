import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../services/error.service';
import { RequestService } from '../services/request.service';
import { Artist } from '../models/artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
})
export class ArtistsComponent implements OnInit {
  artistIds!: string[];

  artists!: Artist[];
  searchedItem!: string;
  isFetchingArtists!: boolean;

  constructor(
    private requestService: RequestService,
    private errorService: ErrorService
  ) {}

  async ngOnInit() {
    this.artistIds = [];

    this.artists = [];
    this.searchedItem = '';
    this.isFetchingArtists = false;

    if (navigator.onLine) {
      await this.collectArtistIdsSync();
    } else {
      this.errorService.setError('No internet connection.');
    }
  }

  async collectArtistIdsSync() {
    try {
      const data = await this.requestService
        .getPlaylistsItems(0, 100)
        .toPromise();

      for (let i = 0; i < data.items.length; i++) {
        for (let j = 0; j < data.items[i].track.artists.length; j++) {
          // Prevents items from repeating
          if (!this.artistIds.includes(data.items[i].track.artists[j].id)) {
            this.artistIds.push(data.items[i].track.artists[j].id);
          }
        }
      }
    } catch (error: any) {
      this.errorService.handleError(error);
    }
  }
}
