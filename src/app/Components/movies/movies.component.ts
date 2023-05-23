import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  //declare
  movies: any[];

  constructor(){
    this.movies = [
      {
        title: 'Hello',
        genre: 'Literature',
        director: 'xyz'
      },
      {
        title: 'World',
        genre: 'Literature',
        director: 'abc'
      },
      {
        title: 'Book 3',
        genre: 'Horror',
        director: 'abc'
      },
      {
        title: 'Book 4',
        genre: 'Romance',
        director: 'mno'
      },
      {
        title: 'Book 5',
        genre: 'Sci fi',
        director: 'abc'
      }
    ]
  }

  //method
  public getMovies(){
    return this.movies;
  }

  ngOnInit(): void {
  }
}
