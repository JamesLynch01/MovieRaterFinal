import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { IMovieInfo } from '../imovie-info';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  public movie: IMovieInfo[];
  public newMovie: IMovieInfo = { title:'', director:'', catergory: '', actor: '', runTime: undefined,}

  constructor(private movieService: MovieServiceService) { }

  async ngOnInit() {
      this.movie = await this.movieService.getMovies();
  }

  async save() {
    await this.movieService.addMovies(this.newMovie);
    this.newMovie = { title: '', director: '', catergory: '', actor: '', runTime: undefined, };
    this.movie = await this.movieService.getMovies();
  }

}
