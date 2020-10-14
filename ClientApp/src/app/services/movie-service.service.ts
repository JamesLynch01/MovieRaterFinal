import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { MovieApiService } from './movie-api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  searchResults: any[] = [];
  myMovieList: any[] = [];

  constructor(private apiService: APIService, private movieApiService: MovieApiService) { }

  getSearchResults(): any[] {
    return this.searchResults;
  }

  getMovieList(): any[] {
    return this.myMovieList;
  }

  async searchForMovies(searchTerm: string): Promise<void>{
    const response = await this.movieApiService.get(searchTerm);
    this.searchResults.length = 0;
    this.searchResults.push(...response.results);
  }

  async loadMovieList(): Promise<void> {
    const response = await this.apiService.get();
    this.myMovieList.length = 0;
    this.myMovieList.push(...response);
    console.log(this.myMovieList);
  }

  async saveToList(movie: any): Promise<void>{
    await this.apiService.post(movie);
    await this.loadMovieList();
  }
}
