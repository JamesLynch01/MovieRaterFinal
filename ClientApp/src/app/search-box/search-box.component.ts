import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor(private movieService: MovieServiceService) { }

  ngOnInit() {
  }

  loadSearch(event): void {
    this.movieService.searchForMovies(event.target.value);
  }
}
