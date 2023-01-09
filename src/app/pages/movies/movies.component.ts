import { Component,ViewChild } from '@angular/core';
import { GetMoviesService } from 'src/moviesService/get-movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  allMovies:any = [];
  movies:any = [];
  moviesFiltered:any = [];
  searched = '';
  showFiltered = false;
  filteredMovies:any = []
  placeholder = 'Search for movies'
  constructor(private data:GetMoviesService){}

  ngOnInit():void{
    this.data.GetMovies()
    .subscribe(movie =>{
      this.allMovies = movie.filter(movie => movie.category === "Movie");
      this.movies = [...this.allMovies];
    })
   }

   updateSearch(text:string){
    this.searched = text.toLowerCase();
    if (!this.searched) {
      this.showFiltered = false;
      return;
    }
    this.filteredMovies = this.allMovies.filter((v:any) => v.title.toLowerCase().includes(this.searched))
    this.showFiltered = true;
   }
}
