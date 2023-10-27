import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Song } from '../models/song';
import { ErrorService } from '../services/error.service';
import { RequestService } from '../services/request.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent {
  searchedSong!: string;
  isPlaying!: boolean;
  isSelected!: boolean;
  isFetching!: boolean;

  songs!: Song[];

  selectedItem!: any;
  currentTime!: Subject<number>;
  playlistItemsOffset!: number;

  @ViewChild('player', { static: true }) player!: ElementRef;

  constructor(
    private requestService: RequestService,
    private errorService: ErrorService
  ) {}

  ngOnInit() {
    this.searchedSong = '';
    this.isPlaying = false;
    this.isSelected = false;
    this.isFetching = false;
    this.songs = [];
    this.selectedItem = null;
    this.currentTime = new Subject();
    this.playlistItemsOffset = 0;

    this.subscribePlaylistItems(0);
  }

  subscribePlaylistItems(offset: number) {
    this.playlistItemsOffset = offset;
    this.isFetching = true;
    this.songs = [];

    this.requestService.getPlaylistsItems(offset, 100).subscribe(
      (data: any) => {
        this.isFetching = false;

        for (let i = 0; i < data.items.length; i++) {
          // Collects artists, ids
          let artistsNames = [];
          let artistsIds = [];
          for (let j = 0; j < data.items[i].track.album.artists.length; j++) {
            artistsNames.push(data.items[i].track.album.artists[j].name);
            artistsIds.push(data.items[i].track.album.artists[j].id);
          }

          // Fills songarray
          this.songs.push({
            index: i + 1 + offset,
            image: data.items[i].track.album.images[2].url,
            imageb: data.items[i].track.album.images[1].url,
            trackId: data.items[i].track.id,
            name: data.items[i].track.name,
            artistsIds: artistsIds,
            artistsNames: artistsNames,
            popularity: data.items[i].track.popularity,
            hasPreview: data.items[i].track.preview_url,
            release: data.items[i].track.album.release_date,
            duration: data.items[i].track.duration_ms,
          });
        }
      },
      (error: HttpErrorResponse) => {
        this.errorService.handleError(error);
      }
    );
  }

  initSong(index: number, item: any) {
    // Takes we back to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    this.requestService
      .getPlaylistsItems(this.playlistItemsOffset, 100)
      .subscribe(
        (data: any) => {
          // If track doesn't has preview
          if (data.items[index].track.preview_url === null) {
            this.errorService.setError("The track doesn't has preview!");
          } else {
            this.isSelected = true;
            this.isPlaying = true;
            this.selectedItem = item;

            this.player.nativeElement.src = data.items[index].track.preview_url;
            this.player.nativeElement.load();
            this.play();
          }
        },
        (error: any) => {
          this.errorService.handleError(error);
        }
      );
  }

  play() {
    // If the play() isn't undefined or null
    if (this.player.nativeElement.play()) {
      this.player.nativeElement
        .play()
        .then()
        .catch((error: any) => {
          console.error(`Song isn't playing. ${error}`);
        });
    } else {
      console.log(
        `The value of this.player.nativeElement.play() is ${this.player.nativeElement.play()}`
      );
    }
  }

  pause() {
    // If the pause() isn't undefined or null
    if (this.player.nativeElement.pause()) {
      this.player.nativeElement
        .pause()
        .then()
        .catch((error: any) => {
          console.error(`Song isn't paused. ${error}`);
        });
    } else {
      console.log(
        `The value of this.player.nativeElement.pause() is ${this.player.nativeElement.pause()}`
      );
    }
  }
}
