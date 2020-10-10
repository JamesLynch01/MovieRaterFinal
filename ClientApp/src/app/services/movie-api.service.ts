import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  private readonly URL = 'https://api.themoviedb.org/3/search/multi';
  private readonly API_KEY = '5a470fd8928415f9a6a9d110a9d0e490';

  constructor(private httpClient: HttpClient) { }
  
  get(searchTerm: string): Promise<any>{
    const params: HttpParams = new HttpParams()
    .append('api_key', this.API_KEY)
    .append('query', searchTerm);

    return this.httpClient.get<any[]>(`${this.URL}`, {params}).toPromise();
  }
}
