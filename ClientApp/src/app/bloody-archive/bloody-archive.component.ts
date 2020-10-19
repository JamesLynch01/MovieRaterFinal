import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatGridList } from '@angular/material';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-bloody-archive',
  templateUrl: './bloody-archive.component.html',
  styleUrls: ['./bloody-archive.component.css']
})
export class BloodyArchiveComponent implements OnInit {

  searchResults: any[] = [];

  constructor(private movieService: MovieServiceService) { }

  ngOnInit() {
    
  }

  loadSearch(event): void {
    this.movieService.searchForMovies(event.target.value);
    this.searchResults=this.movieService.searchResults;
  }
}
