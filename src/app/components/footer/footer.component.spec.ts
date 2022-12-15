import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display search button and description', () => {
    const searchButton: HTMLButtonElement =
      fixture.nativeElement.querySelector('.searchButton');
    const icon = searchButton.querySelector('img');
    const buttonSpan = searchButton.querySelector('span');
    const description: HTMLElement = fixture.nativeElement.querySelector('.description');

    expect(searchButton).toBeTruthy();
    expect(buttonSpan?.textContent).toEqual('Encontrar filme');
    expect(icon).toBeTruthy();
    expect(description).toBeTruthy();
    expect(description.textContent?.trim())
      .toEqual(`Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.`);
  });
});
