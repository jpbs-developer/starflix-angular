import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display logo and title', () => {
    const logo: HTMLElement = fixture.nativeElement.querySelector('.logotipo');
    const title: HTMLElement = fixture.nativeElement.querySelector('h1');

    expect(logo).withContext('Display logo').toBeTruthy();
    expect(logo.getAttribute('alt'))
      .withContext('Test alternative text from logo')
      .toEqual('Logo da aplicação StarFlix');
    expect(title).withContext('Display title').toBeTruthy();
    expect(title.textContent)
      .withContext('TextContent title')
      .toEqual('Não sabe o que assistir?');
  });
});
