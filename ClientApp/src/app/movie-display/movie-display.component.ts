import { Component, Inject, OnInit } from '@angular/core';
import { IMovieInfo } from '../imovie-info';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css']
})
export class MovieDisplayComponent implements OnInit {

  public movies: IMovieInfo[];
  public newMovie: IMovieInfo = { title:'', director:'', catergory: [], actor: [], runTime: undefined, Url_Image: undefined}

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  ngOnInit() {
  }

  async save() {
    await this.http.post<IMovieInfo[]>(this.baseUrl + 'movieinfo', this.newMovie).toPromise();
    this.newMovie = { title: '', director: '', catergory: [], actor: [], runTime: undefined, Url_Image: undefined};
    this.movies = await this.http.get<IMovieInfo[]>(this.baseUrl + 'movieinfo').toPromise();
  }
}
