import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../services/error.service';
import { SpotifyService } from '../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  logged!: boolean;

  ngOnInit() {
    this.logged = false;
  }

  constructor(
    private router: Router,
    private spotifyService: SpotifyService,
    private errorService: ErrorService
  ) {}

  onLogin() {
    if (navigator.onLine) {
      this.logged = true;
      this.spotifyService.setSpoitfyAuthUrl();
      this.spotifyService.redirectToSpoitfyAuth();
    } else {
      this.logged = false;
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
