import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Object;
  theaters: Object;
  kids: Object;
  drama: Object;
  findedMovies: Object;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getFilms('kids').subscribe(d => this.kids = d);
    this.moviesService.getFilms('drama').subscribe(d => this.drama = d);
    this.moviesService.getFilms('popular').subscribe(d => this.popular = d);
    this.moviesService.getFilms('theaters').subscribe(d => this.theaters = d);
  }

  search(value){
    this.moviesService.findMovie(value.search).subscribe(d => this.findedMovies = d);
  }
}
