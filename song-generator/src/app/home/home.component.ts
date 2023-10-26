import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../services/error.service';
import { RequestService } from '../services/request.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  seed_artists!: string;
  seed_tracks!: string;

  isFetchingRecommendedArtists!: boolean;
  isFetchingTracks!: boolean;

  itemsOfRecommendationsBasedOnArtists!: any;
  itemsOfRecommendationsBasedOnTracks!: any;

  constructor(
    private requestService: RequestService,
    private errorService: ErrorService
  ) {}

  async ngOnInit() {
    this.seed_artists = '';
    this.seed_tracks = '';

    this.isFetchingRecommendedArtists = false;
    this.isFetchingTracks = false;

    if (navigator.onLine) {
      await this.subscribePlaylistsItemsSync();
      this.subscribeRecommendations();
    } else {
      this.errorService.setError('No internet connection.');
    }
  }

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

  async subscribePlaylistsItemsSync() {
    const artistsLimited = [];
    const tracks = [];

    try {
      const data = await this.requestService
        .getPlaylistsItems(0, 5)
        .toPromise();

      for (let i = 0; i < data.items.length; i++) {
        tracks.push(data.items[i].track.id);
        for (let j = 0; j < data.items[i].track.artists.length; j++) {
          artistsLimited.push(data.items[i].track.artists[j].id);
        }
      }
    } catch (error: any) {
      this.errorService.handleError(error);
    }

    // Separating with a comma and deleting the last comma
    this.seed_artists = artistsLimited.join(',');
    this.seed_tracks = tracks.join(',');
  }

  subscribeRecommendations() {
    this.isFetchingRecommendedArtists = true;
    this.isFetchingTracks = true;

    this.requestService.getRecommendations(5, this.seed_artists, '').subscribe(
      (data) => {
        this.isFetchingRecommendedArtists = false;
        this.itemsOfRecommendationsBasedOnArtists = data.tracks;
      },
      (error: HttpErrorResponse) => {
        this.errorService.handleError(error);
      }
    );

    this.requestService.getRecommendations(5, '', this.seed_tracks).subscribe(
      (data) => {
        this.isFetchingTracks = false;
        this.itemsOfRecommendationsBasedOnTracks = data.tracks;
      },
      (error: HttpErrorResponse) => {
        this.errorService.handleError(error);
      }
    );
  }

  getError(): string {
    return this.errorService.getError();
  }
}
