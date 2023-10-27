import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Song } from '../models/song';
import { ErrorService } from '../services/error.service';
import { RequestService } from '../services/request.service';

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
  }
}
