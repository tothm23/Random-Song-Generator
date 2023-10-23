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
}
