import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-pieces',
  templateUrl: './movie-pieces.component.html',
  styleUrls: ['./movie-pieces.component.css']
})
export class MoviePiecesComponent implements OnInit {

  @Input() movie;
  theStyles;
  name;
  constructor() { }

  ngOnInit() {
    let backDrop = "http://image.tmdb.org/t/p/original" + this.movie.backdrop_path;
    this.theStyles = {width: '200px', backgroundImage: 'url(' + backDrop + ')'};

    if(!this.movie.name) {
      this.name = this.movie.original_title;
    } else {
      this.name = this.movie.name;
    }
  }

}
