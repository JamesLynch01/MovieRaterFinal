import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { IMovieInfo } from '../imovie-info';
import { MovieApiService } from '../services/movie-api.service';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  public movies: IMovieInfo[] = [];
  public newMovie: IMovieInfo = { title:'', movie_poster: '', movieId: undefined,}
  
  showTicks = false;
  autoTicks = false;
  thumbLabel = false;
  tickInterval = 1;
  value = 0;
  max = 100;
  min = 0;
  step = 1;

  constructor(private movieService: MovieServiceService, private apiService: MovieApiService) { }

  async ngOnInit() {
    this.movies = await this.movieService.getMovies();
  }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  async getMovie(id) {
    return this.apiService.getMovie(id);
  }
  
  async deleteMovie(movie) {
    this.movieService.deleteMovies(movie);
    this.movies = await this.movieService.getMovies();
  }

}
