import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greater-number',
  templateUrl: './greater-number.component.html',
  styleUrls: ['./greater-number.component.css']
})
export class GreaterNumberComponent implements OnInit{

  //declare
  x: number = 100;
  y: number = 200;

  //initializing
  constructor(){
    this.x;
    this.y;
  }
  ngOnInit(): void {
    
  }
}
