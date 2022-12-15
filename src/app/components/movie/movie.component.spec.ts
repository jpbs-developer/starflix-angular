import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display image, title and description', () => {
    const image = fixture.nativeElement.querySelector('.movie-thumb');
    const title = fixture.nativeElement.querySelector('h2');
    const description =
      fixture.nativeElement.querySelector('.movie-description');
    expect(image).toBeTruthy();
    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  });

  it('should inicialize (@Input movie) with value empty', () => {
    const movie = component.movie;
    expect(movie).toBeFalsy();
  });

  it('should populate (@Input movie) when go passed the movie as biding', () => {
    component.movie = {
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
        'A ticking-time-bogression into a shocking new form oflubsn eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
      popularity: 73.563,
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
      vote_average: 8.429,
      vote_count: 25330,
    };

    expect(component.movie).toBeTruthy();
  });
});
