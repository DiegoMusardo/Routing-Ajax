import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/album';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>("https://jsonplaceholder.typicode.com/albums");
  }

  getAlbumById(id: string): Observable<Album> {
    return this.http.get<Album>("https://jsonplaceholder.typicode.com/albums/" + id);
  }
}
