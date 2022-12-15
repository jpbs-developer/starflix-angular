import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { MoviesService } from './services/movies/movies.service';
import { buildTheMovie } from './services/movies/movies.service.spec';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: MoviesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(MoviesService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize movie$ property with value falsy', () => {
    expect(component.movie$).toBeFalsy();
  });

  it('should populate movie$ property when called the request from movieService', () => {
    spyOn(service, 'getMovies').and.returnValue(of(buildTheMovie()));
    component.getMovie()
    fixture.detectChanges();
    const movieComponet = fixture.nativeElement.querySelector('app-movie');
    const noMovieComponet = fixture.nativeElement.querySelector('app-no-movie');
    expect(movieComponet)
      .withContext('Not display movie component')
      .toBeTruthy();
    expect(noMovieComponet)
      .withContext('Display no-movie component')
      .toBeNull();
  });

  it('should not display app-movie component when the property movie$ not populated', () => {
    fixture.detectChanges();
    const movieComponet = fixture.nativeElement.querySelector('app-movie');
    const noMovieComponet = fixture.nativeElement.querySelector('app-no-movie');
    expect(movieComponet).withContext('Not display movie component').toBeNull();
    expect(noMovieComponet)
      .withContext('Display no-movie component')
      .toBeTruthy();
  });

  it('should generate random number', () => {
    const randomNumber = component.generateRandomNumber();
    expect(randomNumber).toBeTruthy();
  });
});
