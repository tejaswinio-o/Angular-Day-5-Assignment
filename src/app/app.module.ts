import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsComponent } from './Components/cars/cars.component';
import { GreaterNumberComponent } from './Components/greater-number/greater-number.component';
import { MoviesComponent } from './Components/movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    GreaterNumberComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
