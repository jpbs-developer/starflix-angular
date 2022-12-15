import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { MoviesService } from './services/movies/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  movie$!: Observable<Movie>;

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {}

  getMovie() {
    const randomNumber = this.generateRandomNumber();
    this.movie$ = this.movieService.getMovies(randomNumber);
  }

  generateRandomNumber(): number {
    const randomNumber = Math.floor(Math.random() * 1000);
    return randomNumber;
  }
}
