import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../models/movies';

const apiKey = 'e6fbfb1c7db68d5dbd1f7ca9e82778ba';

@Injectable()
export class MoviesService {
  path: string = 'https://api.themoviedb.org/3/';
  popular: string = 'discover/movie?sort_by=popularity.desc';
  theaters: string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
  kids: string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  drama: string = 'discover/movie?with_genres=18&primary_release_year=2014';
  authentication: string = '&api_key=';
  movieAuth: string = '?api_key=';
  movie: string = 'movie/';
  search: string = 'search/movie?query=';

  constructor( private http: HttpClient ) { }

  getFilms(type: string) : Observable<Movies>{
    return this.http.get<Movies>(`${this.path}${this[type]}${this.authentication}${apiKey}`);
  }

  getMovie(id: number){
    return this.http.get(`${this.path}${this.movie}${id}${this.movieAuth}${apiKey}`)
  }

  findMovie(name: string){
    return this.http.get(`${this.path}${this.search}${name}${this.authentication}${apiKey}`);
  }
}
