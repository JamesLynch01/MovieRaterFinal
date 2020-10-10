import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { IMovieInfo } from '../imovie-info';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  public movies: IMovieInfo[];
  public newMovie: IMovieInfo = { title:'', director:'', catergory: [], actor: [], runTime: undefined,}

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  async ngOnInit() {
      this.movies = await this.http.get<IMovieInfo[]>(this.baseUrl + 'movieinfo').toPromise();
  }

  async save() {
    await this.http.post<IMovieInfo[]>(this.baseUrl + 'movieinfo', this.newMovie).toPromise();
    this.newMovie = { title: '', director: '', catergory: [], actor: [], runTime: undefined, };
    this.movies = await this.http.get<IMovieInfo[]>(this.baseUrl + 'movieinfo').toPromise();
  }

}
