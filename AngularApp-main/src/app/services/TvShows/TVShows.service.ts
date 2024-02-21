import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TVShowsService {

  constructor(private http: HttpClient) { }

  getTVShows() {
    return this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=5f2b5e0ae3a00a80c918135739ad8f3f&language=en-US&page=4');
  }

  getTvShowsPage(page: number) {
    return this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=5f2b5e0ae3a00a80c918135739ad8f3f&language=en-US&page='+page);
  }
}

