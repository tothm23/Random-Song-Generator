import { Component } from '@angular/core';
import { ErrorService } from '../services/error.service';
import { SpotifyService } from '../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private router: Router,
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

  onBack() {
    if (navigator.onLine) {
      this.spotifyService.writeTokenToLocalStorage();
      this.router.navigate(['home']);
    }
  }
}
