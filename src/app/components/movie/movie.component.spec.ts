import { ComponentFixture, TestBed } from '@angular/core/testing';
import { buildTheMovie } from 'src/app/services/movies/movies.service.spec';

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
    component.movie = buildTheMovie();

    expect(component.movie).toBeTruthy();
  });
});
