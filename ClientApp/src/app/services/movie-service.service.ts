import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { IMovieInfo } from '../imovie-info';
import { MovieApiService } from './movie-api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  searchResults: any[] = [];
  myMovieList: IMovieInfo[];

  constructor( private movieApiService: MovieApiService, private http: HttpClient, @Inject('BASE_URL') private baseUrl: string
  ) { }

  async getMovies(): Promise<IMovieInfo[]> {
    return await this.http.get<IMovieInfo[]>(`${this.baseUrl}movieinfo`).toPromise();
  }

  async addMovies(newMovie: IMovieInfo): Promise<IMovieInfo> {
    return await this.http.post<IMovieInfo>(`${this.baseUrl}movieinfo`, newMovie).toPromise();
  } 

  deleteMovies(movie: IMovieInfo) {
    return this.http.delete<IMovieInfo>(`${this.baseUrl}movieinfo/${movie.id}`).toPromise();
  }

  getSearchResults(): any[] {
    return this.searchResults;
  }

  async searchForMovies(searchTerm: string): Promise<void>{
    const response = await this.movieApiService.get(searchTerm);
    this.searchResults.length = 0;
    this.searchResults.push(...response.results);
  }
  
}
