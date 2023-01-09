import { Component } from '@angular/core';
import { GetMoviesService } from 'src/moviesService/get-movies.service';
@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.scss']
})
export class TvSeriesComponent {
  allTvSeries:any = [];
  tvSeries:any = [];
  filteredTvSeries:any = [];
  searched = '';
  showFiltered = false;
  placeholder = 'Search for TV-shows'
  constructor(private data:GetMoviesService){}
  ngOnInit():void{
    this.data.GetMovies()
    .subscribe(movie =>{
      this.allTvSeries = movie.filter(movie => movie.category === "TV Series");
      this.tvSeries = [...this.allTvSeries];
    })
   }

   updateSearch(text:string){
    this.searched = text.toLowerCase();
    if (!this.searched) {
      this.showFiltered = false;
      return;
    }
    this.filteredTvSeries = this.allTvSeries.filter((v:any) => v.title.toLowerCase().includes(this.searched))
    this.showFiltered = true;
   }

}
