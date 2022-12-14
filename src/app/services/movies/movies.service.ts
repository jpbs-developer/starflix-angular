import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Movie } from 'src/app/movie';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  constructor(private http: HttpClient) {}
  getMovies(id: number): Observable<Movie> {
    const params = new HttpParams().append(
      'api_key',
      '2d8677619cc9d7ad9631a94fbcc6fabf'
    );
    return this.http
      .get<Movie>(`${environment.api}/movie/${id}`, { params })
      .pipe(
        map((movie) => {
          movie.backdrop_path = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
          return movie;
        })
      );
  }
}
