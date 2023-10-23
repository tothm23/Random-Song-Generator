import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

  getPlaylistsItems(offset: number, limit: number): Observable<any> {
    const playlist_id = '70PKuvsqiyPId7z4iM94jR';

    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });

    let params = new HttpParams();
    params = params.append('offset', offset);
    params = params.append('limit', limit);

    return this.http.get(
      `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
      {
        headers: headers,
        params: params,
      }
    );
  }

  getRecommendations(
    limit: number,
    seed_artists: string,
    seed_tracks: string
  ): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });

    let params = new HttpParams();

    if (seed_tracks === '') {
      params = params.append('seed_artists', seed_artists);
    } else {
      params = params.append('seed_tracks', seed_tracks);
    }

    params = params.append('limit', limit);

    return this.http.get('https://api.spotify.com/v1/recommendations', {
      headers: headers,
      params: params,
    });
  }

  getArtist(artistId: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });

    return this.http.get(`https://api.spotify.com/v1/artists/${artistId}`, {
      headers: headers,
    });
  }
}
