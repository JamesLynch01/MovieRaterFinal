import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { MovieApiService } from './movie-api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  searchResults: any[] = [];

  constructor(private apiService: APIService, private movieApiService: MovieApiService) { }

  getSearchResults(): any[] {
    return this.searchResults;
  }

  async searchForMovies(searchTerm: string): Promise<void>{
    const response = await this.movieApiService.get(searchTerm);
    this.searchResults.length = 0;
    this.searchResults.push(...response.results);
  }
}
