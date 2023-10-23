import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  setSpoitfyAuthUrl() {
    const CLIENT_ID = '7fc647f778484fde834d07bda543b59e';
    const REDIRECT_URI = 'http://localhost:4200/login';
    const SCOPE = 'playlist-read-private';

    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(CLIENT_ID);
    url += '&scope=' + encodeURIComponent(SCOPE);
    url += '&redirect_uri=' + encodeURIComponent(REDIRECT_URI);

    return url;
  }

  redirectToSpoitfyAuth() {
    window.location.href = this.setSpoitfyAuthUrl();
  }
}
