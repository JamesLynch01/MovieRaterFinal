import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css']
})
export class MovieDisplayComponent implements OnInit {


  constructor() { }

  @Input() movies;
  @Input() titles;

  ngOnInit() {
  }

}
