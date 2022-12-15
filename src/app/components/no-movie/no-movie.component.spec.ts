import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMovieComponent } from './no-movie.component';

describe('NoMovieComponent', () => {
  let component: NoMovieComponent;
  let fixture: ComponentFixture<NoMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoMovieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NoMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display image, title and description', () => {
    const image = fixture.nativeElement.querySelector('.no-movie-image');
    const title = fixture.nativeElement.querySelector('h2');

    expect(image).toBeTruthy();
    expect(title).toBeTruthy();
  });
});
