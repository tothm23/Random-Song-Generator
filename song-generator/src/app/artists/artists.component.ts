import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../services/error.service';
import { RequestService } from '../services/request.service';
import { Artist } from '../models/artist';
import { HttpErrorResponse } from '@angular/common/http';

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
      this.subscribeArtists();
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

  subscribeArtists() {
    this.isFetchingArtists = true;

    for (let i = 0; i < this.artistIds.length; i++) {
      this.requestService.getArtist(this.artistIds[i]).subscribe(
        (data) => {
          this.isFetchingArtists = false;

          let genres = [];

          // Collect genres
          for (let j = 0; j < data.genres.length; j++) {
            genres.push(data.genres[j]);
          }

          this.artists.push({
            spotifyUrl: data.external_urls.spotify,
            followers: data.followers.total,
            genres: genres,
            imageUrl: data.images[2].url,
            name: data.name,
            popularity: data.popularity,
          });
        },
        (error: HttpErrorResponse) => {
          this.errorService.handleError(error);
        }
      );
    }
  }
}
