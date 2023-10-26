import { Component } from '@angular/core';
import { ErrorService } from '../services/error.service';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private spotifyService: SpotifyService,
    private errorService: ErrorService
  ) {}

  onLogin() {
    if (navigator.onLine) {
      this.spotifyService.setSpoitfyAuthUrl();
      this.spotifyService.redirectToSpoitfyAuth();
    } else {
      this.errorService.setError('No internet connection.');
    }
  }
}
