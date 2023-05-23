import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  //declaring car array
  car: any[];
  hide: boolean = false;

  //initializing
  constructor(){
    this.car = [
      {
        make: "BMW",
        model: "3series",
        year: 2019
      },
      {
        make: "xyz",
        model: "33",
        year: 2013
      },
      {
        make: "abc",
        model: "23",
        year: 2014
      }
    ]
  }

  //method to fetch the record
  public getCar(){
    return this.car;
  }

  //toggle method
  public hideContent(){
    this.hide =! this.hide
  }
  
  ngOnInit(): void {
    
  }
}
