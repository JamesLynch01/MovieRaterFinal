import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-title',
  templateUrl: './movie-title.component.html',
  styleUrls: ['./movie-title.component.css']
})
export class MovieTitleComponent implements OnInit {
  @Input() movie;
  theStyles;
  title;

  constructor() { }

  ngOnInit() {
    let backDrop = "http://image.tmdb.org/t/p/original" + this.movie.backdrop_path;
    this.theStyles = {width: '200px', backgroundImage: 'url(' + backDrop + ')'};

    if(!this.movie.name) {
      this.title = this.movie.orginal_title;
    } else {
      this.title = this.movie.title;
    }
  }

}
