import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieComponent } from './components/movie/movie.component';
import { NoMovieComponent } from './components/no-movie/no-movie.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, MovieComponent, NoMovieComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
