import { TestBed } from '@angular/core/testing';
import { MoviesService } from './movies.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { Movie } from 'src/app/movie';

export function buildTheMovie() {
  const movie: Movie = {
    adult: false,
    backdrop_path: '/hZkgoQYus5vegHoetLkCJzb17zJ.jpg',
    belongs_to_collection: null,
    budget: 63000000,
    genres: [],
    homepage: 'http://www.foxmovies.com/movies/fight-club',
    id: 550,
    imdb_id: 'tt0137523',
    original_language: 'en',
    original_title: 'Fight Club',
    overview:
      'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
    popularity: 88.656,
    poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    production_companies: [],
    production_countries: [],
    release_date: '1999-10-15',
    revenue: 100853753,
    runtime: 139,
    spoken_languages: [],
    status: 'Released',
    tagline: 'Mischief. Mayhem. Soap.',
    title: 'Fight Club',
    video: false,
    vote_average: 8.4,
    vote_count: 25318,
  };
  return movie;
}
describe(MoviesService.name, () => {
  let service: MoviesService;
  let httpControler: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(MoviesService);
    httpControler = TestBed.inject(HttpTestingController);
  });

  it('should create movie service', () => {
    expect(service).toBeTruthy();
  });

  it('should return the movie', () => {
    service.getMovies(12).subscribe({
      next: (movie) => {
        expect(movie).toBeTruthy();
        expect(movie.poster_path).toEqual('/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg')
      },
    });
    const request = httpControler.expectOne(
      `${environment.api}/movie/12?api_key=2d8677619cc9d7ad9631a94fbcc6fabf`
    );
    request.flush(buildTheMovie());
    expect(request.request.method).toEqual('GET');
    expect(request.request.params.get('api_key')).toEqual(
      '2d8677619cc9d7ad9631a94fbcc6fabf'
    );
  });
});
