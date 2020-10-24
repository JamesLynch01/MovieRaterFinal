import { Component, OnInit } from '@angular/core';
import { IMovieInfo } from '../imovie-info';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-bloody-archive',
  templateUrl: './bloody-archive.component.html',
  styleUrls: ['./bloody-archive.component.css']
})
export class BloodyArchiveComponent implements OnInit {

  searchResults: any[] = [];
  public movie: IMovieInfo[];
  public newMovie: IMovieInfo = { title:'', director:'', movie_poster: '', actor: '', movieId: undefined,}

  constructor(private movieService: MovieServiceService) { }

  async ngOnInit() {
    this.movie = await this.movieService.getMovies();
  }

  loadSearch(event): void {
    this.movieService.searchForMovies(event.target.value);
    this.searchResults=this.movieService.searchResults;
  }

  async save(movie) {
    this.newMovie = { title: movie.title, director: '', movie_poster: movie.poster_path, actor: '', movieId: movie.id, };
    console.log(movie.runtime);
    await this.movieService.addMovies(this.newMovie);
    // // this.movieService.addMovies(event.target.value);
    this.newMovie = { title: '', director: '', movie_poster: '', actor: '', movieId: undefined, };
    // this.movie = await this.movieService.getMovies();
  }
}
