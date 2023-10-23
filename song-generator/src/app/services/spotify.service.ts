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

  getParamsFromSpotifyAuth = (hash: string) => {
    const stringAfterHashtag = hash.substring(1);
    const paramsInUrl = stringAfterHashtag.split('&');

    const paramsSplitUp = paramsInUrl.reduce(
      (accumulater: any, currentValue: any) => {
        const [key, value] = currentValue.split('=');
        accumulater[key] = value;
        return accumulater;
      },
      {}
    );

    return paramsSplitUp;
  };

  getToken(): string {
    if (window.location.hash) {
      const { access_token } = this.getParamsFromSpotifyAuth(
        window.location.hash
      );
      return access_token;
    } else {
      return '';
    }
  }

  writeTokenToLocalStorage() {
    if (window.location.hash) {
      localStorage.clear();
      localStorage.setItem('access_token', this.getToken());
    }
  }
}
